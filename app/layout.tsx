// app/layout.tsx
import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider" // Import ThemeProvider

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono" 
})

// Updated Metadata
export const metadata: Metadata = {
  title: "curator - Sample & Patch Library Manager by a tier", // Updated Title
  description: "Find your Vital presets, Serum presets, and audio samples instantly. curator helps manage your sound library across different synths and formats.", // Updated Description
  generator: 'v0.dev' // Keep or update as needed
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetbrainsMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

// Remove the duplicate import './globals.css' at the end if present