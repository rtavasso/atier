// app/feedback/page.tsx
'use client'; // Needs to be client component for useFormState/useFormStatus

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; // Import Textarea
// Import specific OS icons and Download icon
import { AudioWaveformIcon as Waveform, Mail, MessageSquare, HelpCircle } from "lucide-react";
import Link from "next/link";
import { submitFeedback, type FeedbackFormState } from '@/app/actions/formActions';
import { ModeToggle } from "@/components/ui/mode-toggle"; // Import ModeToggle

// SubmitButton for the feedback form
function FeedbackSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90" aria-disabled={pending} disabled={pending}>
      <MessageSquare className="mr-2 h-4 w-4" />
      {pending ? 'Submitting...' : 'Submit Feedback'}
    </Button>
  );
}

export default function Home() {
  const initialFeedbackState: FeedbackFormState = { message: null, success: false, errors: {} };
  const [state, formAction] = useFormState(submitFeedback, initialFeedbackState);

  return (
    <div className="flex h-screen flex-col bg-background text-foreground overflow-hidden">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors">
          <div className="flex items-center gap-2">
            <Waveform className="h-6 w-6 text-accent-cyan" />
            <span className="text-xl font-bold">curator</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          {/* Mode Toggle */}
          {/* <ModeToggle /> */}
          
          <Link
            href="/how-to-use"
            className="flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:text-accent-cyan/80 transition-colors"
          >
            <HelpCircle className="h-5 w-5" />
            How to Use
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="max-w-md w-full flex flex-col items-center text-center">
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                Search with <span className="text-accent-cyan">Sound.</span>
              </h1>
            </div>

            {/* --- Conditional Rendering Section --- */}
            <div className="w-full flex flex-col items-center space-y-6 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm">
              {/* SHOW FORM IF NOT SUCCESSFUL */}
              {!state.success && (
                <>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Provide Feedback</h2>
                    <p className="mt-1 text-sm text-muted-foreground">Let us know what you think!</p>
                  </div>

                  <form action={formAction} className="w-full space-y-4">
                    {/* Email Input */}
                    <div className="space-y-2 text-left">
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        aria-describedby="feedback-email-error"
                        aria-invalid={!!state?.errors?.email}
                        className="h-12 border-border bg-card text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:ring-ring"
                      />
                      {state?.errors?.email && (
                        <p id="feedback-email-error" className="text-sm text-destructive mt-1">
                          {state.errors.email.join(', ')}
                        </p>
                      )}
                    </div>

                    {/* Feedback Textarea */}
                    <div className="space-y-2 text-left">
                      <Label htmlFor="feedback">Your Feedback</Label>
                      <Textarea
                        id="feedback"
                        name="feedback"
                        placeholder="Tell us how we can improve..."
                        required
                        rows={4}
                        aria-describedby="feedback-text-error"
                        aria-invalid={!!state?.errors?.feedback}
                        className="border-border bg-card text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:ring-ring"
                      />
                      {state?.errors?.feedback && (
                        <p id="feedback-text-error" className="text-sm text-destructive mt-1">
                          {state.errors.feedback.join(', ')}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        If you're reporting a bug, please include any relevant logs from the command prompt that runs alongside the application.
                      </p>
                    </div>

                    {/* Display general form messages */}
                    {state?.message && !state.errors?.email && !state.errors?.feedback && (
                      <p id="feedback-general-message" className={`text-sm mt-1 ${state.success ? 'text-green-500' : 'text-destructive'}`}>
                         {state.message}
                      </p>
                    )}

                    {/* Update Submit Button */}
                    <FeedbackSubmitButton />
                  </form>
                  <p className="text-xs text-muted-foreground">Thank you for helping make curator better.</p>
                </>
              )}

              {/* SHOW SUCCESS MESSAGE IF SUCCESSFUL */}
              {state.success && (
                <div className="w-full space-y-4 text-center">
                   <h2 className="text-2xl font-bold text-green-400">Feedback Sent!</h2>
                   {state.message && (
                     <p className='text-sm mt-1 text-green-400'>
                        {state.message} {/* Success message from the action */}
                     </p>
                   )}
                   <p className="text-muted-foreground mt-2">We appreciate your input.</p>
                   <Button variant="outline" asChild className="mt-4">
                     <Link href="/">Back to Home</Link>
                   </Button>
                </div>
              )}
            </div>
             {/* --- End Conditional Rendering Section --- */}

            <Button
              asChild
              variant="outline"
              className="mt-6"
            >
              <Link href="/" className="flex items-center gap-2">
                <Waveform className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-2">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} a tier. All rights reserved.
        </div>
      </footer>
    </div>
  );
}