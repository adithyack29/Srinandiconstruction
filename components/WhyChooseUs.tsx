'use client'

import { CheckCircle2, Trophy, Clock, ShieldCheck, Users, Banknote, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const FEATURES = [
    {
        title: "Quality Construction",
        description: "We use premium materials and follow rigorous quality control protocols on every site.",
        icon: Trophy,
    },
    {
        title: "Experienced Team",
        description: "Our engineers and architects bring decades of industry experience to your project.",
        icon: Users,
    },
    {
        title: "Transparent Pricing",
        description: "No hidden costs. We provide detailed estimates and cost tracking throughout.",
        icon: Banknote,
    },
    {
        title: "On-time Delivery",
        description: "We respect your time. Our proven project management ensures strict adherence to schedules.",
        icon: Clock,
    },
    {
        title: "100% Safety Compliance",
        description: "Safety is our priority. We maintain accident-free environments across all our work sites.",
        icon: ShieldCheck,
    },
    {
        title: "Professional Management",
        description: "A dedicated project manager will be your single point of contact from start to handover.",
        icon: CheckCircle2,
    },
]

export function WhyChooseUs() {
    return (
        <section className="bg-primary py-16 md:py-24 text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-5xl">
                        Why Choose
                        <span className="text-accent"> Sri Nandi</span>
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-16 md:w-20 bg-accent" />
                    <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-gray-300">
                        We don&apos;t just build structures; we build trust. Experience the difference with our commitment to excellence.
                    </p>
                </div>

                <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0], index: number }) {
    const [isOpen, setIsOpen] = useState(false)
    const Icon = feature.icon

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group flex flex-col gap-3 md:gap-4 rounded-xl border border-white/10 bg-white/5 p-4 md:p-6 transition-all hover:border-accent/50 hover:bg-white/10 cursor-pointer md:cursor-default"
            onClick={() => {
                if (window.innerWidth < 768) {
                    setIsOpen(!isOpen)
                }
            }}
        >
            <div className="flex items-center gap-3 md:gap-4">
                <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent text-accent group-hover:text-primary">
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="flex flex-1 items-center justify-between">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent">
                        {feature.title}
                    </h3>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="text-accent md:hidden"
                    >
                        <ChevronDown className="h-4 w-4" />
                    </motion.div>
                </div>
            </div>

            {/* Mobile/Tablet Accordion Description */}
            <div className="md:hidden">
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 group-hover:text-gray-200">
                                {feature.description}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop Full Description (Always visible) */}
            <div className="hidden md:block">
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-200">
                    {feature.description}
                </p>
            </div>
        </motion.div>
    )
}


