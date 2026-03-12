import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-primary pt-16 text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <div className="mb-6 flex items-center gap-2">
                            <Image
                                src="/images/srinandilogo.png"
                                alt="Sri Nandi Construction Logo"
                                width={160}
                                height={64}
                                className="h-16 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="mb-6 text-sm leading-relaxed text-gray-300">
                            Building dreams and crafting realities. We are a premier construction company based in Bangalore, delivering excellence in residential and commercial projects.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>
                                <Link href="/" className="transition-colors hover:text-accent">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="transition-colors hover:text-accent">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="transition-colors hover:text-accent">Services</Link>
                            </li>
                            <li>
                                <Link href="/projects" className="transition-colors hover:text-accent">Projects</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="transition-colors hover:text-accent">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold">Our Services</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>
                                <Link href="/services#residential" className="transition-colors hover:text-accent">Residential Construction</Link>
                            </li>
                            <li>
                                <Link href="/services#commercial" className="transition-colors hover:text-accent">Commercial Construction</Link>
                            </li>
                            <li>
                                <Link href="/services#renovation" className="transition-colors hover:text-accent">Renovation & Remodeling</Link>
                            </li>
                            <li>
                                <Link href="/services#interiors" className="transition-colors hover:text-accent">Interior Designing</Link>
                            </li>
                            <li>
                                <Link href="/services#civil" className="transition-colors hover:text-accent">Civil Works</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold">Contact Info</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start">
                                <MapPin className="mr-3 h-5 w-5 shrink-0 text-accent group-hover:text-accent" />
                                <a
                                    href="https://www.google.com/maps/place/Shree+Nandi+Construction/@13.0458596,77.6807377,19z/data=!3m1!4b1!4m6!3m5!1s0x3bae11a373422c8b:0xeaa99269a934d60!8m2!3d13.0458596!4d77.6813814!16s%2Fg%2F11y8ty8_5x?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:text-accent"
                                >
                                    Lakeview Garden<br />
                                    K. Channasandra, Horamavu<br />
                                    Bangalore – 43
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 h-5 w-5 shrink-0 text-accent" />
                                <a href="tel:+918494913111" className="transition-colors hover:text-accent">+91 8494913111</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 h-5 w-5 shrink-0 text-accent" />
                                <a href="mailto:srinandiconstruction21@gmail.com" className="transition-colors hover:text-accent">
                                    srinandiconstruction21@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t border-white/10 py-6 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Sri Nandi Construction. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
