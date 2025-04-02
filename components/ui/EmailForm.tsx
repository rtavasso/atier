// components/ui/EmailForm.tsx
'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitForm, type EmailFormState } from '@/app/actions/formActions'; // Adjust path if needed
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  );
}

export function EmailForm() {
  // More explicit initial state
  const initialState: EmailFormState = { message: null, success: false, errors: {} };
  const [state, formAction] = useFormState(submitForm, initialState);

  // Construct aria-describedby based on state
  const describedByIds = [
      state?.errors?.email ? 'email-field-error' : undefined,
      state?.message && !state.errors?.email ? 'email-general-message' : undefined
  ].filter(Boolean).join(' '); // Filter out undefined and join

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          aria-describedby={describedByIds || undefined} // Link input to relevant messages
          aria-invalid={!!state?.errors?.email} // Indicate invalid state
        />
         {/* Display specific email validation errors */}
        {state?.errors?.email && (
          <p id="email-field-error" className="text-sm text-red-500 mt-1">
            {state.errors.email.join(', ')}
          </p>
        )}
      </div>

      {/* Add other form fields here if needed */}

      <SubmitButton />

      {/* Display general form messages ONLY if there are no specific field errors */}
      {state?.message && !state.errors?.email && (
         <p
            id="email-general-message"
            className={`text-sm mt-2 ${state.success ? 'text-green-500' : 'text-red-500'}`}
          >
            {state.message}
         </p>
       )}
    </form>
  );
}