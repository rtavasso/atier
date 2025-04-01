import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AudioWaveformIcon as Waveform, Mail, MessageSquare, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-black text-white overflow-hidden">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Waveform className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-bold">BeatCraft</span>
        </div>
        <Link
          href="/how-to-use"
          className="flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
        >
          <HelpCircle className="h-5 w-5" />
          How to Use
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="max-w-md w-full flex flex-col items-center text-center">
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                Create. Mix. <span className="text-purple-500">Master.</span>
              </h1>
              <p className="text-gray-400">
                Professional music production software designed for creators at every level.
              </p>
            </div>

            <div className="w-full flex flex-col items-center space-y-6 p-6 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Get Started Now</h2>
                <p className="mt-1 text-sm text-gray-400">Enter your email to download BeatCraft</p>
              </div>

              <form className="w-full space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 border-gray-800 bg-gray-900 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <Button type="submit" className="w-full h-12 bg-purple-600 text-white hover:bg-purple-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Get Access
                </Button>
              </form>

              <p className="text-xs text-gray-500">By downloading, you agree to our Terms of Service</p>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-6 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <Link href="/feedback" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Provide Feedback
              </Link>
            </Button>
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

