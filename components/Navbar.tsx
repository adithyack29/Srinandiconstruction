'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
                        <span className="flex items-center">
                            <Phone className="mr-2 h-4 w-4 text-accent" />
                            +91 8494913111
                        </span>
                        <span className="flex items-center">
                            <Mail className="mr-2 h-4 w-4 text-accent" />
                            srinandiconstruction21@gmail.com
                        </span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-accent" />
                        Horamavu, Bangalore - 43
                    </div>
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
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-10 w-10 flex-col items-center justify-center rounded bg-accent font-bold text-primary shadow-sm">
                            <span className="text-xl leading-none">SN</span>
                            <span className="text-[10px] leading-none uppercase tracking-wider">Const</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold uppercase tracking-tight text-primary">
                                Sri Nandi
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
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
