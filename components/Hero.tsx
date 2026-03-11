'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[600px] w-full bg-primary overflow-hidden">
            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                style={{ backgroundImage: 'url("/images/hero-placeholder.jpg")' }}
            >
                {/* Replace with actual construction project image */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="mb-4 text-accent font-bold tracking-widest uppercase flex items-center gap-4">
                            <span className="h-px w-12 bg-accent"></span>
                            Welcome to Sri Nandi Construction
                        </span>
                        <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
                            Building Dreams,<br />
                            <span className="text-gray-300">Crafting Realities</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mb-10 text-lg leading-relaxed text-gray-300 md:text-xl max-w-2xl"
                    >
                        Your trusted partner in Bangalore for premium residential and commercial construction, delivering excellence with zero compromise on quality and timelines.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 h-14 px-8 text-base font-bold">
                            <Link href="/contact">Get Free Quote</Link>
                        </Button>
                        <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-base font-bold shadow-lg">
                            <Link href="/services">View Services</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-white/70">Scroll Down</span>
                <div className="h-12 w-px bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 w-full h-1/2 bg-accent"
                    />
                </div>
            </motion.div>
        </section>
    )
}
