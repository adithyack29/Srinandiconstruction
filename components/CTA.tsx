'use client'

import { PhoneCall } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function CTA() {
    return (
        <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
            {/* Background Graphic Elements */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
                <div className="absolute -bottom-40 right-10 h-80 w-80 rounded-full bg-accent blur-3xl" />
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container relative z-10 mx-auto px-4 text-center"
            >
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                    Ready to Build Your <span className="text-accent">Dream Space?</span>
                </h2>

                <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                    Whether it&apos;s a luxury residential villa or a sprawling commercial complex, Sri Nandi Construction turns your vision into reality. Let&apos;s discuss your project today.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="h-14 bg-accent px-10 font-bold text-primary hover:bg-accent/90 shadow-lg">
                        <a href="tel:+918494913111" className="flex items-center">
                            <PhoneCall className="mr-3 h-6 w-6" />
                            Call Us: +91 8494913111
                        </a>
                    </Button>
                </div>
            </motion.div>
        </section>
    )
}
