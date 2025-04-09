import Link from "next/link"
import Image from "next/image"
import { AudioWaveformIcon as Waveform, ArrowLeft, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function HowToUse() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto flex h-16 items-center justify-between px-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Waveform className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">curator</span>
        </div>
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to get started with curator and begin creating professional music in minutes.
            </p>
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
                    
                    {/* Sample Terminal Command */}
                    <div className="mt-4 bg-card rounded-md border border-border p-3">
                      <div className="flex items-center text-muted-foreground text-sm mb-1">
                        <Code className="h-4 w-4 mr-2" />
                        <span>Terminal Installation</span>
                      </div>
                      <code className="font-mono text-xs block text-foreground whitespace-pre overflow-x-auto">
                        $ cd ~/Downloads<br/>
                        $ chmod +x ./curator-installer.sh<br/>
                        $ ./curator-installer.sh
                      </code>
                    </div>
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
                        <span>Track View: Where you arrange audio and MIDI clips</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Mixer: Control levels, panning, and effects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Browser: Access instruments, samples, and presets</span>
                      </li>
                    </ul>
                    
                    {/* Sample Keyboard Shortcuts */}
                    <div className="mt-4 bg-card rounded-md border border-border p-3">
                      <div className="flex items-center text-muted-foreground text-sm mb-1">
                        <Code className="h-4 w-4 mr-2" />
                        <span>Keyboard Shortcuts</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Play/Pause</span>
                          <span className="font-mono text-foreground">Space</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Save</span>
                          <span className="font-mono text-foreground">Ctrl+S</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Undo</span>
                          <span className="font-mono text-foreground">Ctrl+Z</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Redo</span>
                          <span className="font-mono text-foreground">Ctrl+Y</span>
                        </div>
                      </div>
                    </div>
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
                    <h2 className="text-2xl font-bold mb-3">Create Your First Track</h2>
                    <p className="text-muted-foreground">
                      Start by creating a new project and adding your first track. You can record audio, add MIDI
                      instruments, or import existing samples.
                    </p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Click "File &gt; New Project" to get started</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Add tracks using the "+" button in the track view</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Drag and drop samples from the browser</span>
                      </li>
                    </ul>
                    
                    {/* Sample Configuration */}
                    <div className="mt-4 bg-card rounded-md border border-border p-3">
                      <div className="flex items-center text-muted-foreground text-sm mb-1">
                        <Code className="h-4 w-4 mr-2" />
                        <span>Project Configuration</span>
                      </div>
                      <code className="font-mono text-xs block text-foreground whitespace-pre overflow-x-auto">
{`{
  "projectName": "My First Track",
  "bpm": 120,
  "timeSignature": "4/4",
  "sampleRate": 44100,
  "bitDepth": 24
}`}
                      </code>
                    </div>
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

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card rounded-xl overflow-hidden border border-border">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Mixing and effects interface"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Mix and Master</h2>
                    <p className="text-muted-foreground">
                      Once you've created your tracks, use the mixer to balance levels, add effects, and master your
                      final output.
                    </p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Access the mixer by clicking the "Mix" tab</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Add effects by clicking the "+" in the effects rack</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Use the master channel for final output processing</span>
                      </li>
                    </ul>
                    
                    {/* Sample Effect Chain */}
                    <div className="mt-4 bg-card rounded-md border border-border p-3">
                      <div className="flex items-center text-muted-foreground text-sm mb-1">
                        <Code className="h-4 w-4 mr-2" />
                        <span>Effect Chain Example</span>
                      </div>
                      <code className="font-mono text-xs block text-foreground whitespace-pre overflow-x-auto">
{`// Master Channel Effects
1. EQ -> Low Cut @ 30Hz
2. Compression -> 4:1 ratio
3. Limiter -> -0.3dB ceiling`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Creating?</h2>
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

