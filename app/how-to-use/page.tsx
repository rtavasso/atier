import Link from "next/link"
import Image from "next/image"
import { AudioWaveformIcon as Waveform, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowToUse() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto flex h-16 items-center justify-between px-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Waveform className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-bold">BeatCraft</span>
        </div>
        <Link href="/" className="flex items-center text-sm text-gray-400 hover:text-white">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">How to Use BeatCraft</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Follow these simple steps to get started with BeatCraft and begin creating professional music in minutes.
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Download & Install</h2>
                    <p className="text-gray-400">
                      Enter your email on the homepage to get access to the download link. Once downloaded, run the
                      installer and follow the on-screen instructions to complete installation.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>Compatible with Windows 10/11 and macOS 10.15+</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>Requires minimum 4GB RAM, 2GHz processor</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
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
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="BeatCraft interface overview"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Explore the Interface</h2>
                    <p className="text-gray-400">
                      When you first open BeatCraft, you'll see the main workspace. Familiarize yourself with the key
                      areas:
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>Track View: Where you arrange audio and MIDI clips</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>Mixer: Control levels, panning, and effects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>Browser: Access instruments, samples, and presets</span>
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Create Your First Track</h2>
                    <p className="text-gray-400">
                      Start by creating a new project and adding your first track. You can record audio, add MIDI
                      instruments, or import existing samples.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>Click "File &gt; New Project" to get started</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>Add tracks using the "+" button in the track view</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>Drag and drop samples from the browser</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
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
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Mix and Master</h2>
                    <p className="text-gray-400">
                      Once you've created your tracks, use the mixer to balance levels, add effects, and master your
                      final output.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>Access the mixer by clicking the "Mix" tab</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>Add effects by clicking the "+" in the effects rack</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>Use the master channel for final output processing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Creating?</h2>
            <p className="text-gray-400 mb-6">
              Now that you know the basics, it's time to unleash your creativity with BeatCraft.
            </p>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/">Download BeatCraft Now</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-4 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BeatCraft. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

