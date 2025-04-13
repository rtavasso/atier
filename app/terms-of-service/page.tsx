// app/terms-of-service/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; // Optional: for a back button

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Optional Header */}
      <header className="container mx-auto flex h-16 items-center justify-between px-4 border-b border-border">
        <Link href="/" className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors">
            {/* You can add your logo/branding here if desired */}
            <span className="text-xl font-bold">curator</span>
        </Link>
        <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose dark:prose-invert prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Terms of Service for curator Beta
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-8">
            <strong>Effective Date:</strong> April 17, 2025
          </p>

          <p className="mb-4">
            Welcome to the beta program for "curator" (the "Software"), provided by a tier ("we", "us", or "our"). These Terms of Service ("Terms") govern your download, installation, and use of the beta version of the Software.
          </p>

          <p className="font-semibold mb-4">
            PLEASE READ THESE TERMS CAREFULLY. BY DOWNLOADING, INSTALLING, OR USING THE SOFTWARE, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT DOWNLOAD, INSTALL, OR USE THE SOFTWARE.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">1. Beta Software</h2>
          <p className="mb-4">
            You acknowledge that the Software is a pre-release, beta version. As such, it may contain bugs, errors, and other problems. The Software is provided for testing and evaluation purposes only and may not be suitable for production use. You use the Software at your own risk. We are not obligated to provide any maintenance, technical support, or updates for the Software, nor are we obligated to release a final commercial version.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">2. License Grant</h2>
          <p className="mb-4">
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to install and use the Software solely for your internal testing and evaluation purposes during the beta period.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">3. Restrictions</h2>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 pl-4 text-muted-foreground">
            <li>Modify, adapt, translate, reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the Software.</li>
            <li>Rent, lease, loan, resell, distribute, sublicense, or otherwise transfer the Software.</li>
            <li>Remove or obscure any copyright, trademark, or other proprietary notices contained in or on the Software.</li>
            <li>Use the Software for any commercial purpose or in any manner not expressly permitted by these Terms.</li>
            <li>Use the Software for any illegal or unauthorized purpose.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">4. Feedback</h2>
          <p className="mb-4">
            We welcome your feedback, comments, and suggestions regarding the Software ("Feedback"). You agree that any Feedback you provide is voluntary and we are free to use such Feedback for any purpose without any obligation or compensation to you. You grant us a worldwide, perpetual, irrevocable, royalty-free license to use and incorporate your Feedback into the Software or other products and services.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">5. Disclaimer of Warranties</h2>
          <p className="mb-4">
            THE SOFTWARE IS PROVIDED <strong className="font-bold">"AS IS"</strong> AND <strong className="font-bold">"AS AVAILABLE,"</strong> WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SOFTWARE WILL MEET YOUR REQUIREMENTS, OPERATE WITHOUT INTERRUPTION, BE ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">6. Limitation of Liability</h2>
          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE OR OUR AFFILIATES, LICENSORS, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO, USE OF, OR INABILITY TO USE THE SOFTWARE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL CUMULATIVE LIABILITY ARISING FROM OR RELATED TO THESE TERMS OR THE SOFTWARE WILL NOT EXCEED TEN DOLLARS ($10.00 USD).
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">7. Termination</h2>
          <p className="mb-4">
            We may terminate your license to use the Software at any time, for any reason or no reason, with or without notice. Upon termination, you must immediately cease all use of the Software and destroy all copies, full or partial, of the Software in your possession or control. Sections 3, 4, 5, 6, 8, and 9 shall survive any termination.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">8. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in San Diego County, California, and the parties hereby consent to personal jurisdiction and venue therein.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">9. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. If we make changes, we will provide notice of such changes, such as by posting the revised Terms on our website or providing notice through the Software. Your continued use of the Software after such notice constitutes your acceptance of the modified Terms.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">10. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at: <a href="mailto:curatorbyatier@gmail.com" className="underline">curatorbyatier@gmail.com</a>
          </p>
        </div>
      </main>

       {/* Optional Footer */}
       <footer className="border-t border-border py-4 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} a tier. All rights reserved.
        </div>
      </footer>
    </div>
  );
}