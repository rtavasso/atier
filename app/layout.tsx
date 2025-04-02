// app/layout.tsx
import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

// Updated Metadata
export const metadata: Metadata = {
  title: "curator - Sample & Patch Library Manager by a tier", // Updated Title
  description: "Find your Vital presets, Serum presets, and audio samples instantly. Curator helps manage your sound library across different synths and formats.", // Updated Description
  generator: 'v0.dev' // Keep or update as needed
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Optionally add a className="dark" here if you want dark mode by default */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}

// Remove the duplicate import './globals.css' at the end if present