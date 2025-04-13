// components/ui/DownloadButton.tsx
import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming a Button component

interface DownloadButtonProps {
  href: string; // e.g., "/downloads/curator-v1.0.zip"
  children: React.ReactNode;
  filename?: string; // Optional: specific filename for the download attribute
}

export function DownloadButton({ href, children, filename }: DownloadButtonProps) {
  return (
    // Use an anchor tag directly for simple downloads
    // Styling might need adjustment if your Button component doesn't render an <a>
    <Button asChild>
        <a
            href={href}
            download={filename || true} // Use provided filename or default browser behavior
            // Add target="_blank" and rel="noopener noreferrer" if you want it to potentially open in a new tab before download starts, though 'download' usually prevents this.
        >
            {children}
        </a>
    </Button>
  );
}