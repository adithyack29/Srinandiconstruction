import type { Metadata } from 'next'
import { Inter, Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sri Nandi Construction | Residential & Commercial Construction Bangalore',
  description: 'Sri Nandi Construction offers residential construction, commercial projects, renovation, interiors, and civil works in Bangalore.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
