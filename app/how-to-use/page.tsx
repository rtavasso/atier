import Link from "next/link"
import Image from "next/image"
import { AudioWaveformIcon as Waveform, ArrowLeft, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function HowToUse() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto flex h-16 items-center justify-between px-4 border-b border-border">
        <Link href="/" className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors">
          <div className="flex items-center gap-2">
            <Waveform className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">curator</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          {/* <ModeToggle /> */}
          <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">How to Use curator</h1>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Download & Install</h2>
                    <p className="text-muted-foreground">
                      Enter your email on the homepage to get access to the download link. Once downloaded, run the
                      installer and follow the on-screen instructions to complete installation.
                    </p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Compatible with Windows 10/11 and macOS 10.15+</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Requires minimum 4GB RAM, 2GHz processor</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-card rounded-xl overflow-hidden border border-border">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Download and installation screen"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card rounded-xl overflow-hidden border border-border">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="curator interface overview"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Explore the Interface</h2>
                    <p className="text-muted-foreground">
                      When you first open curator, you'll see the main workspace. Familiarize yourself with the key
                      areas:
                    </p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Home: Where you find and filter samples from your library</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Library: Where you can manage your library and add new samples</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Finding a Sample</h2>
                    <p className="text-muted-foreground">
                      Start by tracking a folder of samples and wait for the processing to complete. Each sample can take up to a second to process, so if you have a lot of samples, it may take a while, but you'll only have to do this once!
                    </p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Go back to the home page and search for a sample you added by name</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Explore the similar samples, and filter them by BPM, timbre, and more</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Once you find a sample you like, simply drag it into your DAW</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-card rounded-xl overflow-hidden border border-border">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Creating a new track"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-muted-foreground mb-6">
              Now that you know the basics, it's time to unleash your creativity with curator.
            </p>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/">Download curator Now</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-4 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} curator. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

