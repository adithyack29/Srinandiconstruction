'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
    const images = [
        "/images/hero-bg.png",
        "/images/hero-bg1.png",
        "/images/hero-bg2.png"
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [images.length])

    return (
        <section className="relative h-[90vh] min-h-[600px] w-full bg-primary overflow-hidden">
            {/* Background Image Slideshow */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url("${images[currentIndex]}")` }}
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="mb-4 text-accent font-bold tracking-widest flex items-center gap-4">
                            <span className="h-px w-12 bg-accent"></span>
                            Welcome to Sri Nandi Construction
                        </span>
                        <h1 className="mb-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white md:text-7xl">
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
                            <Link href="/services">View Our Services</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>


        </section>
    )
}
