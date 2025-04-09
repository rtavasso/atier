// app/page.tsx
'use client'; // Needs to be client component for useFormState/useFormStatus

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label'; // Import Label
import { AudioWaveformIcon as Waveform, Mail, MessageSquare, HelpCircle, Sliders } from "lucide-react";
import Link from "next/link";
import { submitForm, type EmailFormState } from '@/app/actions/formActions'; // Import action and state type
import { ModeToggle } from "@/components/ui/mode-toggle"; // Import ModeToggle

// Define SubmitButton within or import if used elsewhere
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90" aria-disabled={pending} disabled={pending}>
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
    <div className="flex h-screen flex-col bg-background text-foreground overflow-hidden">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {/* Update branding to curator */}
          <Waveform className="h-6 w-6 text-accent-cyan" /> 
          <span className="text-xl font-bold">curator</span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Mode Toggle */}
          {/* <ModeToggle /> */}
          
          {/* How to Use Link */}
          <Link
            href="/how-to-use" // Make sure this page exists or remove link
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
              {/* Update heading for curator */}
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                Find Your Sound. <span className="text-accent-cyan">Instantly.</span>
              </h1>
              <p className="text-muted-foreground">
                Manage your Vital presets, Serum patches, and audio samples across your library.
              </p>
              
              {/* Sample Parameters Display */}
              <div className="flex justify-center space-x-4 mt-4">
                <div className="bg-card border border-border rounded-md px-3 py-2 flex items-center">
                  <Sliders className="text-accent-yellow h-4 w-4 mr-2" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground">BPM</span>
                    <span className="font-mono text-lg">120.0</span>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-md px-3 py-2 flex items-center">
                  <Sliders className="text-accent h-4 w-4 mr-2" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground">KEY</span>
                    <span className="font-mono text-lg">A min</span>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-md px-3 py-2 flex items-center">
                  <Sliders className="text-accent-cyan h-4 w-4 mr-2" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground">TIME</span>
                    <span className="font-mono text-lg">4/4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-center space-y-6 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm">
              <div className="text-center">
                 {/* Update call to action */}
                <h2 className="text-2xl font-bold">Download curator Beta</h2>
                <p className="mt-1 text-sm text-muted-foreground">Enter your email to get the download link</p>
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
                    className="h-12 border-border bg-card text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:ring-ring"
                  />
                  {/* Display validation errors */}
                  {state?.errors?.email && (
                    <p id="email-error-message" className="text-sm text-destructive mt-1">
                      {state.errors.email.join(', ')}
                    </p>
                  )}
                   {/* Display general form messages (success or specific non-field errors) */}
                  {state?.message && !state.errors?.email && (
                    <p id={state.success ? "email-success-message" : "email-error-message"} className={`text-sm mt-1 ${state.success ? 'text-green-500' : 'text-destructive'}`}>
                       {state.message}
                    </p>
                  )}
                </div>
                <SubmitButton /> {/* Use the dedicated submit button component */}
              </form>

              <p className="text-xs text-muted-foreground">By downloading, you agree to our Terms of Service</p>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-6"
            >
              <Link href="/feedback" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Provide Feedback
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-2">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
           {/* Keep company name */}
          © {new Date().getFullYear()} a tier. All rights reserved.
        </div>
      </footer>
    </div>
  );
}