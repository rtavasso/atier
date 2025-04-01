"use server"

type FeedbackData = {
  email: string
  feedback: string
  timestamp: string
}

// In a real application, this would connect to a database
// For now, we'll simulate storing the feedback
const feedbackStore: FeedbackData[] = []

export async function submitFeedback(email: string, feedback: string) {
  // Validate inputs
  if (!email || !feedback) {
    throw new Error("Email and feedback are required")
  }

  // Create feedback entry
  const feedbackEntry: FeedbackData = {
    email,
    feedback,
    timestamp: new Date().toISOString(),
  }

  // In a real app, you would save to a database here
  // For this example, we'll just store in memory
  feedbackStore.push(feedbackEntry)

  // Log the feedback (for demonstration purposes)
  console.log("Feedback received:", feedbackEntry)

  // Simulate a slight delay for the API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return { success: true }
}

