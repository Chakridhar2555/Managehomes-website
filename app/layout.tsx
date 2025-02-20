import type { Metadata } from 'next'
import './globals.css'
import { Header } from "@/components/header"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: 'LuxuryEstates - Premium Real Estate',
  description: 'Find your dream luxury property',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 w-full max-w-[1920px] mx-auto">
          {children}
        </main>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
