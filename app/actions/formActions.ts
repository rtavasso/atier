// app/actions/formActions.ts
'use server';

import { createClient } from 'redis';
import { z } from 'zod';

// --- Schemas and Types (EmailFormState, FeedbackFormState) remain the same ---
const EmailFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
});
export type EmailFormState = { /* ... */ };

const FeedbackFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  feedback: z.string().min(10, { message: 'Feedback must be at least 10 characters long.' }),
});
export type FeedbackFormState = { /* ... */ };


// --- Redis Client Initialization (Updated) ---
// Explicitly pass the URL from environment variables
const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
    // Log an error during build or initial load if the URL is missing
    console.error("FATAL ERROR: REDIS_URL environment variable is not set.");
    // Optionally throw an error during initialization if preferred,
    // although this might affect build processes if env var isn't set during build.
    // throw new Error("REDIS_URL is not configured.");
}

const redisClient = createClient({
  url: redisUrl // Use the environment variable here
});

redisClient.on('error', (err: Error) => console.error('Redis Client Error', err));

async function ensureRedisConnection() {
    // Added check for missing URL to prevent connection attempts without it
    if (!redisUrl) {
        console.error("Cannot connect to Redis: URL is not configured.");
        throw new Error("Redis URL not configured.");
    }
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

// --- submitForm Action (Logic remains the same, relies on updated client) ---
export async function submitForm(
  prevState: EmailFormState | undefined,
  formData: FormData
): Promise<EmailFormState> {
  // 1. Validate
  const validatedFields = EmailFormSchema.safeParse({ email: formData.get('email') });
  if (!validatedFields.success) { /* ... return error state ... */
    console.error('Email Validation Error:', validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Submission failed. Please check the errors.',
      success: false,
    };
  }

  // 2. Prepare data
  const { email } = validatedFields.data;
  const submissionTime = new Date().toISOString();
  const uniqueId = crypto.randomUUID();
  const submissionData = { email, submittedAt: submissionTime };

  // 3. Save data
  try {
    await ensureRedisConnection(); // This will now use the correct URL
    await redisClient.set(`signup:${uniqueId}`, JSON.stringify(submissionData));
    await redisClient.sAdd('signup_emails', email);
    console.log('Email signup saved successfully to Redis for:', email);
    return { message: 'Thank you! Check your email for the download link.', success: true };
  } catch (error) {
    console.error('Redis Error (Email Signup):', error);
    return { message: `Server error: ${error instanceof Error ? error.message : 'Could not save email signup.'}`, success: false };
  }
}

// --- submitFeedback Action (Logic remains the same, relies on updated client) ---
export async function submitFeedback(
  prevState: FeedbackFormState | undefined,
  formData: FormData
): Promise<FeedbackFormState> {
  // 1. Validate
  const validatedFields = FeedbackFormSchema.safeParse({
    email: formData.get('email'),
    feedback: formData.get('feedback'),
  });
  if (!validatedFields.success) { /* ... return error state ... */
     console.error('Feedback Validation Error:', validatedFields.error.flatten().fieldErrors);
     return {
       errors: validatedFields.error.flatten().fieldErrors,
       message: 'Feedback submission failed. Please check the errors below.',
       success: false,
     };
  }

  // 2. Prepare data
  const { email, feedback } = validatedFields.data;
  const submissionTime = new Date().toISOString();
  const uniqueId = crypto.randomUUID();
  const feedbackData = { email, feedback, submittedAt: submissionTime };

  // 3. Save data
  try {
    await ensureRedisConnection(); // This will now use the correct URL
    await redisClient.set(`feedback:${uniqueId}`, JSON.stringify(feedbackData));
    console.log('Feedback saved successfully to Redis from:', email);
    return { message: 'Thank you for your feedback!', success: true };
  } catch (error) {
    console.error('Redis Error (Feedback):', error);
    return { message: `Server error: ${error instanceof Error ? error.message : 'Could not save feedback.'}`, success: false };
  }
}