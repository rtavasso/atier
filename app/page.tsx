// app/page.tsx
'use client'; // Needs to be client component for useFormState/useFormStatus

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label'; // Import Label
import { AudioWaveformIcon as Waveform, Mail, MessageSquare, HelpCircle } from "lucide-react";
import Link from "next/link";
import { submitForm, type EmailFormState } from '@/app/actions/formActions'; // Import action and state type

// Define SubmitButton within or import if used elsewhere
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full h-12 bg-purple-600 text-white hover:bg-purple-700" aria-disabled={pending} disabled={pending}>
      <Mail className="mr-2 h-4 w-4" />
      {pending ? 'Submitting...' : 'Get Access'}
    </Button>
  );
}

export default function Home() {
  // Initial state for the email form
  const initialState: EmailFormState = { message: null, success: false, errors: {} };
  const [state, formAction] = useFormState(submitForm, initialState);

  return (
    <div className="flex h-screen flex-col bg-black text-white overflow-hidden">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {/* Use Curator details */}
          <Waveform className="h-6 w-6 text-cyan-400" /> {/* Use new accent */}
          <span className="text-xl font-bold">curator</span>
        </div>
        {/* Keep How to Use Link */}
         <Link
           href="/how-to-use" // Make sure this page exists or remove link
           className="flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
         >
           <HelpCircle className="h-5 w-5" />
           How to Use
         </Link>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="max-w-md w-full flex flex-col items-center text-center">
            <div className="space-y-4 mb-8">
              {/* Update heading for Curator */}
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                Find Your Sound. <span className="text-cyan-400">Instantly.</span> {/* Use new accent */}
              </h1>
              <p className="text-gray-400">
                Manage your Vital presets, Serum patches, and audio samples across your library.
              </p>
            </div>

            <div className="w-full flex flex-col items-center space-y-6 p-6 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <div className="text-center">
                 {/* Update call to action */}
                <h2 className="text-2xl font-bold">Download Curator Beta</h2>
                <p className="mt-1 text-sm text-gray-400">Enter your email to get the download link</p>
              </div>

              {/* Updated form using useFormState */}
              <form action={formAction} className="w-full space-y-4">
                <div className="space-y-2 text-left"> {/* Added text-left for label */}
                  <Label htmlFor="email" className="sr-only">Email Address</Label> {/* Hide label visually but keep for accessibility */}
                  <Input
                    id="email"
                    name="email" // Name matches FormData key expected by action
                    type="email"
                    placeholder="Enter your email"
                    required
                    aria-describedby="email-error-message email-success-message"
                    className="h-12 border-gray-800 bg-gray-900 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500" // Use new accent
                  />
                  {/* Display validation errors */}
                  {state?.errors?.email && (
                    <p id="email-error-message" className="text-sm text-red-500 mt-1">
                      {state.errors.email.join(', ')}
                    </p>
                  )}
                   {/* Display general form messages (success or specific non-field errors) */}
                  {state?.message && !state.errors?.email && (
                    <p id={state.success ? "email-success-message" : "email-error-message"} className={`text-sm mt-1 ${state.success ? 'text-green-500' : 'text-red-500'}`}>
                       {state.message}
                    </p>
                  )}
                </div>
                <SubmitButton /> {/* Use the dedicated submit button component */}
              </form>

              <p className="text-xs text-gray-500">By downloading, you agree to our Terms of Service</p>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-6 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <Link href="/feedback" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Provide Feedback
              </Link>
            </Button>
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