import Link from "next/link"
import { AudioWaveformIcon as Waveform, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Feedback() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Waveform className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-bold">BeatCraft</span>
        </div>
        <Link href="/" className="flex items-center text-sm text-gray-400 hover:text-white">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center py-8">
        <div className="container mx-auto px-4 max-w-md">
          <div className="space-y-6 p-8 rounded-xl border border-gray-800 bg-gray-900/30">
            <div className="text-center">
              <h1 className="text-2xl font-bold">We Value Your Feedback</h1>
              <p className="mt-2 text-gray-400">Help us improve BeatCraft by sharing your thoughts and suggestions.</p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="border-gray-800 bg-gray-900 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="feedback" className="text-sm font-medium">
                  Your Feedback
                </label>
                <Textarea
                  id="feedback"
                  placeholder="Share your experience, suggestions, or report issues..."
                  className="min-h-[150px] border-gray-800 bg-gray-900 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Submit Feedback
              </Button>
            </form>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-2">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} BeatCraft. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

