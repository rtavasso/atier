import Link from "next/link"
import Image from "next/image"
import { AudioWaveformIcon as Waveform, ArrowLeft, Code, MessageSquare, Download } from "lucide-react"
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              curator is an intelligent sample library manager.
              Search with samples to find similar sounds, filter them further to find just what you're looking for, and then drag-and-drop directly into your DAW.
            </p>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="flex flex-col gap-8">
              <div className="bg-card rounded-xl overflow-hidden border border-border w-full">
                <div className="p-0">
                  <Image
                    src="/curator-main.png"
                    alt="curator main interface"
                    width={1200}
                    height={900}
                    className="w-full h-auto rounded-none"
                  />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Explore the Interface</h2>
                  <p className="text-muted-foreground">
                    When you first open curator, you'll see the main workspace. The Manage Library button in the bottom left will take you to the library management interface where you can add samples to your library.
                    The search bar at the top searches for samples in the library, so make sure to add samples to your library first. Note that just because a sample is on your computer, that doesn't mean curator will find it. You have to manually add your sample folders to the library first.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-8">
              <div className="bg-card rounded-xl overflow-hidden border border-border w-full">
                <div className="p-0">
                  <Image
                    src="/curator-manage.png"
                    alt="curator library management interface"
                    width={1200}
                    height={900}
                    className="w-full h-auto rounded-none"
                  />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Adding Samples to the Library</h2>
                  <p className="text-muted-foreground">
                    Start by tracking a folder of samples and wait for the processing to complete. Each sample can take up to a second to process, so if you have a lot of samples, it may take a while, but you'll only have to do this once! Once the processing is complete, you can go back to the home page and use the search bar to find your samples.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-8">
              <div className="bg-card rounded-xl overflow-hidden border border-border w-full">
                <div className="p-0">
                  <Image
                    src="/curator-main-results.png"
                    alt="curator search results interface"
                    width={1200}
                    height={900}
                    className="w-full h-auto rounded-none"
                  />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Using Your Samples</h2>
                  <p className="text-muted-foreground">
                    Search for a sample in a tracked folder by name or by dragging and dropping it into the search bar.
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Preview similar samples directly in curator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Filter by similarity, timbre, BPM, key and more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Drag and drop samples directly into your DAW</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feedback Section */}
            <div className="bg-muted/50 rounded-xl p-8 border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">Having Issues or Suggestions?</h2>
                  <p className="text-muted-foreground mb-4">
                    If you're experiencing any problems with curator or have ideas for new features, we'd love to hear from you. Your feedback helps us make curator better for everyone.
                  </p>
                  
                  <div className="bg-background/50 rounded-lg p-4 mb-5 border border-border">
                    <div className="flex items-start gap-3">
                      <Download className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium mb-1">Trouble playing samples?</h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          If you're having difficulty with sample playback, you may need to install FFmpeg, a required component for audio processing.
                        </p>
                        <Button variant="link" asChild className="h-auto p-0 text-xs font-medium text-primary">
                          <Link href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer">
                            Download FFmpeg
                            <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="inline-flex items-center">
                    <Link href="/feedback">
                      Submit Feedback
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
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
          © {new Date().getFullYear()} a tier. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

