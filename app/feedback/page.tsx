// app/feedback/page.tsx
'use client'; // Needs to be client component for useFormState/useFormStatus

import { useFormState, useFormStatus } from 'react-dom';
import Link from "next/link";
import { AudioWaveformIcon as Waveform, ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Import Label
import { Textarea } from "@/components/ui/textarea";
import { submitFeedback, type FeedbackFormState } from '@/app/actions/formActions'; // Import NEW action and state type

// Define SubmitButton for feedback form
function FeedbackSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700" aria-disabled={pending} disabled={pending}> {/* Use new accent */}
      {pending ? 'Submitting...' : 'Submit Feedback'}
    </Button>
  );
}


export default function Feedback() {
  // Initial state for the feedback form
  const initialState: FeedbackFormState = { message: null, success: false, errors: {} };
  const [state, formAction] = useFormState(submitFeedback, initialState);

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
       <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
           {/* Use Curator details */}
          <Waveform className="h-6 w-6 text-cyan-400" /> {/* Use new accent */}
          <span className="text-xl font-bold">curator</span>
        </div>
        <Link href="/" className="flex items-center text-sm text-gray-400 hover:text-white">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center py-8">
        <div className="container mx-auto px-4 max-w-md">
          <div className="space-y-6 p-8 rounded-xl border border-gray-800 bg-gray-900/30">
            <div className="text-center">
               {/* Update title/desc for Curator */}
              <h1 className="text-2xl font-bold">We Value Your Feedback</h1>
              <p className="mt-2 text-gray-400">Help us improve Curator by sharing your thoughts and suggestions.</p>
            </div>

            {/* Updated form using useFormState */}
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email" // Name matches FormData key
                  type="email"
                  placeholder="your@email.com"
                  required
                  aria-describedby="email-error"
                  className="border-gray-800 bg-gray-900 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500" // Use new accent
                />
                 {/* Display email validation errors */}
                {state?.errors?.email && (
                  <p id="email-error" className="text-sm text-red-500 mt-1">
                    {state.errors.email.join(', ')}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback" className="text-sm font-medium">
                  Your Feedback
                </Label>
                <Textarea
                  id="feedback"
                  name="feedback" // Name matches FormData key
                  placeholder="Share your experience, suggestions, or report issues..."
                  required
                  aria-describedby="feedback-error"
                  className="min-h-[150px] border-gray-800 bg-gray-900 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500" // Use new accent
                />
                {/* Display feedback validation errors */}
                {state?.errors?.feedback && (
                    <p id="feedback-error" className="text-sm text-red-500 mt-1">
                        {state.errors.feedback.join(', ')}
                    </p>
                )}
              </div>

              <FeedbackSubmitButton /> {/* Use the dedicated submit button */}

              {/* Display general form messages (success or failure) */}
               {state?.message && !state.errors?.email && !state.errors?.feedback && (
                 <p className={`text-sm mt-2 ${state.success ? 'text-green-500' : 'text-red-500'}`}>
                    {state.message}
                 </p>
               )}
            </form>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-2">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          {/* Update company name */}
          © {new Date().getFullYear()} a tier. All rights reserved.
        </div>
      </footer>
    </div>
  );
}