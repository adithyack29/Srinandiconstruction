'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
                        href="https://www.google.com/maps/search/?api=1&query=Shree+Nandi+Construction,+Lake+View+Garden+Rd,+Horamavu,+K+Channasandra,+Bengaluru,+Huvinane,+Karnataka+560113"
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
                        <div className="flex flex-col hidden sm:flex">
                            <span className="text-xl font-bold tracking-tight text-primary leading-none">
                                Sri Nandi
                            </span>
                            <span className="text-[11px] font-bold tracking-widest text-primary/80 mt-1">
                                Construction
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
                        <Button className="bg-accent font-semibold text-primary hover:bg-accent/90">
                            <Link href="/contact">Get a Quote</Link>
                        </Button>
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
                {isMobileMenuOpen && (
                    <div className="absolute left-0 top-full w-full border-b bg-white p-4 shadow-lg md:hidden">
                        <nav className="flex flex-col space-y-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-semibold text-primary transition-colors hover:text-accent"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full bg-accent text-primary hover:bg-accent/90">
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    Get a Quote
                                </Link>
                            </Button>
                        </nav>
                    </div>
                )}
            </header>
        </>
    )
}
