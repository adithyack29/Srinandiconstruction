import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Sri Nandi Construction | Residential & Commercial Construction Bangalore',
  description: 'Sri Nandi Construction offers residential construction, commercial projects, renovation, interiors, and civil works in Bangalore.',
  icons: {
    icon: '/favicon.ico',
    apple: '/images/srinandilogo.png',
  },
}

export const viewport = {
  themeColor: '#A9A9A9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", inter.variable)}>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
