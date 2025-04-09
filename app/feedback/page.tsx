// app/feedback/page.tsx
'use client'; // Needs to be client component for useFormState/useFormStatus

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
// Import specific OS icons and Download icon
import { AudioWaveformIcon as Waveform, Mail, MessageSquare, HelpCircle, Download, Apple, MonitorIcon } from "lucide-react";
import Link from "next/link";
import { submitForm, type EmailFormState } from '@/app/actions/formActions';
import { DownloadButton } from '@/components/ui/DownloadButton'; // Import the DownloadButton component
import { ModeToggle } from "@/components/ui/mode-toggle"; // Import ModeToggle

// SubmitButton for the email form
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90" aria-disabled={pending} disabled={pending}>
      <Mail className="mr-2 h-4 w-4" />
      {pending ? 'Submitting...' : 'Get Download Link'}
    </Button>
  );
}

export default function Home() {
  const initialState: EmailFormState = { message: null, success: false, errors: {} };
  const [state, formAction] = useFormState(submitForm, initialState);

  // Construct aria-describedby based on state for the input field
  const describedByIds = [
      state?.errors?.email ? 'email-field-error' : undefined,
      state?.message && !state.errors?.email && !state.success ? 'email-general-error' : undefined
  ].filter(Boolean).join(' ');

  return (
    <div className="flex h-screen flex-col bg-background text-foreground overflow-hidden">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Waveform className="h-6 w-6 text-accent-cyan" />
          <span className="text-xl font-bold">curator</span>
        </div>
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
                Find Your Sound. <span className="text-accent-cyan">Instantly.</span>
              </h1>
              <p className="text-muted-foreground">
                Manage your Vital presets, Serum patches, and audio samples across your library.
              </p>
            </div>

            {/* --- Conditional Rendering Section --- */}
            <div className="w-full flex flex-col items-center space-y-6 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm">
              {/* SHOW FORM IF NOT SUCCESSFUL */}
              {!state.success && (
                <>
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
                        aria-describedby={describedByIds || undefined}
                        aria-invalid={!!state?.errors?.email}
                        className="h-12 border-border bg-card text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:ring-ring"
                      />
                      {state?.errors?.email && (
                        <p id="email-field-error" className="text-sm text-destructive mt-1">
                          {state.errors.email.join(', ')}
                        </p>
                      )}
                      {state?.message && !state.success && !state.errors?.email && (
                         <p id="email-general-error" className='text-sm mt-1 text-destructive'>
                            {state.message}
                         </p>
                       )}
                    </div>
                    <SubmitButton />
                  </form>
                  <p className="text-xs text-muted-foreground">We'll email you the link. By submitting, you agree to our Terms.</p>
                </>
              )}

              {/* SHOW SUCCESS MESSAGE AND DOWNLOAD BUTTONS IF SUCCESSFUL */}
              {state.success && (
                <div className="w-full space-y-4 text-center">
                   <h2 className="text-2xl font-bold text-green-400">Success!</h2>
                   {state.message && (
                     <p className='text-sm mt-1 text-green-400'>
                        {state.message} {/* Success message from the action */}
                     </p>
                   )}
                   <p className="text-muted-foreground mt-2 mb-4">Download curator for your platform:</p>
                   <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      {/* --- Updated Download Buttons --- */}
                      <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <a href="/downloads/curator-setup-win.exe" download="curator-setup-win.exe">
                          <MonitorIcon className="mr-2 h-4 w-4" /> Windows
                        </a>
                      </Button>

                      <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        <a href="/downloads/curator-mac.dmg" download="curator-mac.dmg">
                          <Apple className="mr-2 h-4 w-4" /> macOS
                        </a>
                      </Button>
                      {/* --- End Updated Download Buttons --- */}
                   </div>
                </div>
              )}
            </div>
             {/* --- End Conditional Rendering Section --- */}

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