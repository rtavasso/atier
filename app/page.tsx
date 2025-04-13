// app/page.tsx
'use client'; // Needs to be client component for useFormState/useFormStatus

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label'; // Import Label
// Import necessary icons
import { AudioWaveformIcon as Waveform, Mail, MessageSquare, HelpCircle, Sliders, DownloadCloud } from "lucide-react";
import Link from "next/link";
import { submitForm, type EmailFormState } from '@/app/actions/formActions'; // Import action and state type
import { ModeToggle } from "@/components/ui/mode-toggle"; // Import ModeToggle
import { DownloadButton } from '@/components/ui/DownloadButton'; // *** IMPORT DownloadButton ***
import { SiApple, SiMicrosoftwindows } from 'react-icons/si';

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
        {/* ... Header content ... */}
        <Link href="/" className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors">
          <div className="flex items-center gap-2">
            <Waveform className="h-6 w-6 text-accent-cyan" /> 
            <span className="text-xl font-bold">curator</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
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
            {/* ... Heading, Description, Sample Parameters ... */}
             <div className="space-y-4 mb-8">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                Search with <span className="text-accent-cyan">Sound.</span>
              </h1>
              <p className="text-muted-foreground">
                Navigate your sample library with sound, and filter by automatically generated tags.
              </p>
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

            {/* --- Form / Download Section --- */}
            <div className="w-full flex flex-col items-center space-y-6 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm">

              {/* --- CONDITIONAL RENDERING START --- */}
              {!state.success ? (
                <> {/* Fragment to group form elements */}
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Download curator Beta</h2>
                    <p className="mt-1 text-sm text-muted-foreground">Enter your email to get the download link</p>
                  </div>

                  <form action={formAction} className="w-full space-y-4">
                    <div className="space-y-2 text-left">
                      <Label htmlFor="email" className="sr-only">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        aria-describedby="email-error-message email-success-message" // Combined potential descriptions
                        aria-invalid={!!state?.errors?.email} // Set aria-invalid based on error state
                        className="h-12 border-border bg-card text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:ring-ring"
                      />
                      {/* Display validation errors */}
                      {state?.errors?.email && (
                        <p id="email-error-message" className="text-sm text-destructive mt-1">
                          {state.errors.email.join(', ')}
                        </p>
                      )}
                      {/* Display general form messages (ONLY if not successful and no specific field errors) */}
                      {state?.message && !state.success && !state.errors?.email && (
                        <p id="email-error-message" className="text-sm text-destructive mt-1"> {/* Treat general message as error before success */}
                          {state.message}
                        </p>
                      )}
                    </div>
                    <SubmitButton />
                  </form>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to our{' '}
                    <Link href="/terms-of-service" className="underline hover:text-primary transition-colors">
                      Terms of Service
                    </Link>
                  </p>
                </>
              ) : (
                <div className="w-full space-y-4 text-center">
                  {/* Success Message */}
                  <h2 className="text-2xl font-bold text-green-500">Success!</h2>
                  <p className="text-sm text-muted-foreground">
                    {state.message || "Thank you! You can now download curator."} {/* Use message from action or provide a default */}
                  </p>

                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <DownloadButton
                      href="/downloads/curator-macos.dmg" // Correct path from public folder
                      filename="curator-macos.dmg"     // Suggested filename for download
                    >
                      <SiApple className="mr-2 h-4 w-4" /> Download for macOS
                    </DownloadButton>
                    <DownloadButton
                      href="/downloads/curator-windows.exe" // Correct path from public folder
                      filename="curator-windows.exe"     // Suggested filename for download
                    >
                      <SiMicrosoftwindows className="mr-2 h-4 w-4" /> Download for Windows
                    </DownloadButton>
                  </div>
                   <p className="text-xs text-muted-foreground pt-2">Check your email for updates.</p> {/* Optional extra info */}
                </div>
              )}
              {/* --- CONDITIONAL RENDERING END --- */}

            </div>
            {/* ... Feedback Button ... */}
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
          © {new Date().getFullYear()} a tier. All rights reserved.
        </div>
      </footer>
    </div>
  );
}