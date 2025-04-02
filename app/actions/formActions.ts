// app/actions/formActions.ts
'use server';

import { createClient } from 'redis';
import { z } from 'zod';

// --- Existing Email Form Schemas/Types ---
const EmailFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
});

export type EmailFormState = {
  message: string | null;
  errors?: {
    email?: string[];
  };
  success: boolean;
};

// --- New Feedback Form Schemas/Types ---
const FeedbackFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  feedback: z.string().min(10, { message: 'Feedback must be at least 10 characters long.' }),
});

export type FeedbackFormState = {
  message: string | null;
  errors?: {
    email?: string[];
    feedback?: string[];
  };
  success: boolean;
};


// --- Redis Client Initialization (Shared) ---
const redisClient = createClient({
  // url: process.env.REDIS_URL // uncomment if REDIS_URL isn't automatically picked up
});

redisClient.on('error', (err: Error) => console.error('Redis Client Error', err));

async function ensureRedisConnection() {
    if (!redisClient.isOpen) {
        try {
            await redisClient.connect();
            console.log("Redis client connected.");
        } catch (connectionError) {
            console.error("Failed to connect to Redis:", connectionError);
            throw new Error("Could not connect to the database.");
        }
    }
}

// --- Email Submission Action (Existing - submitForm) ---
export async function submitForm(
  prevState: EmailFormState | undefined,
  formData: FormData
): Promise<EmailFormState> {
  // 1. Validate email form data
  const validatedFields = EmailFormSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    console.error('Email Validation Error:', validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Submission failed. Please check the errors.',
      success: false,
    };
  }

  // 2. Prepare email data
  const { email } = validatedFields.data;
  const submissionTime = new Date().toISOString();
  const uniqueId = crypto.randomUUID();
  const submissionData = { email, submittedAt: submissionTime };

  // 3. Save email data to Redis
  try {
    await ensureRedisConnection();
    // Key structure for email signups
    await redisClient.set(`signup:${uniqueId}`, JSON.stringify(submissionData));
    await redisClient.sAdd('signup_emails', email); // Set of emails for uniqueness checks if needed

    console.log('Email signup saved successfully to Redis for:', email);
    return { message: 'Thank you! Check your email for the download link.', success: true };

  } catch (error) {
    console.error('Redis Error (Email Signup):', error);
    return { message: 'Server error: Could not save email signup.', success: false };
  }
}


// --- Feedback Submission Action (New - submitFeedback) ---
export async function submitFeedback(
  prevState: FeedbackFormState | undefined,
  formData: FormData
): Promise<FeedbackFormState> {
  // 1. Validate feedback form data
  const validatedFields = FeedbackFormSchema.safeParse({
    email: formData.get('email'),
    feedback: formData.get('feedback'),
  });

  if (!validatedFields.success) {
    console.error('Feedback Validation Error:', validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Feedback submission failed. Please check the errors below.',
      success: false,
    };
  }

  // 2. Prepare feedback data
  const { email, feedback } = validatedFields.data;
  const submissionTime = new Date().toISOString();
  const uniqueId = crypto.randomUUID();
  const feedbackData = { email, feedback, submittedAt: submissionTime };

  // 3. Save feedback data to Redis
  try {
    await ensureRedisConnection();
    // Use a different key structure for feedback
    await redisClient.set(`feedback:${uniqueId}`, JSON.stringify(feedbackData));
    // Optionally add to a different set if needed
    // await redisClient.sAdd('feedback_emails', email);

    console.log('Feedback saved successfully to Redis from:', email);
    return { message: 'Thank you for your feedback!', success: true };

  } catch (error) {
    console.error('Redis Error (Feedback):', error);
    return { message: 'Server error: Could not save feedback.', success: false };
  }
}