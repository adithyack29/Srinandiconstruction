'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'


const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Handle scroll effect for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Top Bar - Contact Info */}
            <div className="hidden bg-primary text-primary-foreground md:block">
                <div className="container mx-auto flex h-10 items-center justify-between px-4 text-sm font-medium">
                    <div className="flex items-center space-x-6">
                        <a href="tel:+918494913111" className="flex items-center transition-colors hover:text-accent">
                            <Phone className="mr-2 h-4 w-4 text-accent" />
                            +91 8494913111
                        </a>
                        <a href="mailto:srinandiconstruction21@gmail.com" className="flex items-center transition-colors hover:text-accent">
                            <Mail className="mr-2 h-4 w-4 text-accent" />
                            srinandiconstruction21@gmail.com
                        </a>
                    </div>
                    <a
                        href="https://www.google.com/maps/place/Shree+Nandi+Construction/@13.0458596,77.6807377,19z/data=!3m1!4b1!4m6!3m5!1s0x3bae11a373422c8b:0xeaa99269a934d60!8m2!3d13.0458596!4d77.6813814!16s%2Fg%2F11y8ty8_5x?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center transition-colors hover:text-accent"
                    >
                        <MapPin className="mr-2 h-4 w-4 text-accent" />
                        Horamavu, Bangalore - 43
                    </a>
                </div>
            </div>

            {/* Main Navbar */}
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 py-3 shadow-md backdrop-blur-sm'
                    : 'bg-white py-4 shadow-sm'
                    }`}
            >
                <div className="container mx-auto flex items-center justify-between px-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/srinandilogo.png"
                            alt="Sri Nandi Construction Logo"
                            width={160}
                            height={48}
                            className="h-12 w-auto object-contain"
                        />
                        <div className="flex flex-col font-sans">
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-600">
                                    Sri
                                </span>
                                <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-gray-600 leading-none bg-gradient-to-b from-gray-400 to-gray-700 bg-clip-text text-transparent">
                                    Nandi
                                </span>
                            </div>
                            <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.4em] text-[#d4af37] mt-0.5 ml-0.5">
                                CONSTRUCTION
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center space-x-8 md:flex">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-primary/80 transition-colors hover:text-accent"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6 text-primary" />
                        ) : (
                            <Menu className="h-6 w-6 text-primary" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div 
                    className={`absolute left-0 top-full w-full border-b bg-white p-4 shadow-lg md:hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
                    }`}
                >
                    <nav className="flex flex-col space-y-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-semibold text-primary transition-colors hover:text-accent p-2 rounded-lg hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    )
}
