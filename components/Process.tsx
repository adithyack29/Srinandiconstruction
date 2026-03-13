'use client'

import {
    ClipboardCheck,
    PenTool,
    HardHat,
    SearchCheck,
    KeyRound,
    Info
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const PROCESS_STEPS = [
    {
        title: "Consultation",
        description: "We discuss your requirements, budget, and vision.",
        icon: ClipboardCheck,
    },
    {
        title: "Planning & Design",
        description: "Our architects create detailed 2D/3D layouts and plans.",
        icon: PenTool,
    },
    {
        title: "Construction",
        description: "Execution begins with our expert team and quality materials.",
        icon: HardHat,
    },
    {
        title: "Quality Check",
        description: "Rigorous inspections at every stage of construction.",
        icon: SearchCheck,
    },
    {
        title: "Handover",
        description: "Final walkthrough and handing over the keys to your new space.",
        icon: KeyRound,
    },
]

const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
    }
}

export function Process() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Our Construction Process
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 bg-accent" />
                    <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground px-4">
                        A transparent, step-by-step approach ensuring your project is delivered on time, within budget, and to the highest standards.
                    </p>
                </div>

                {/* Mobile Circular Layout */}
                <div className="relative mx-auto h-[450px] w-full max-w-[350px] mt-8 block lg:hidden">
                    {PROCESS_STEPS.map((step, index) => {
                        const Icon = step.icon
                        // Calculate positions for a pentagon
                        const angle = (index * (360 / 5)) - 90 // Start from top
                        const radius = 130 // px
                        const x = radius * Math.cos((angle * Math.PI) / 180)
                        const y = radius * Math.sin((angle * Math.PI) / 180)

                        return (
                            <div
                                key={index}
                                className="absolute left-1/2 top-1/2"
                                style={{
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                                }}
                            >
                                <motion.div
                                    animate={floatingAnimation}
                                    className="flex flex-col items-center"
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className={`relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-accent text-primary shadow-lg transition-all active:scale-95 ${activeIndex === index ? 'ring-4 ring-primary/20 scale-110' : ''}`}
                                    >
                                        <Icon className="h-7 w-7" />
                                        <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                                            {index + 1}
                                        </div>
                                    </button>
                                    <span className="mt-2 text-center text-[11px] font-bold leading-tight text-primary max-w-[70px]">
                                        {step.title}
                                    </span>
                                </motion.div>
                            </div>
                        )
                    })}

                    {/* Center area for instructions/descriptions */}
                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-inner flex items-center justify-center p-4 text-center">
                        <AnimatePresence mode="wait">
                            {activeIndex !== null ? (
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="text-center"
                                >
                                    <p className="text-[10px] leading-tight text-muted-foreground">
                                        {PROCESS_STEPS[activeIndex].description}
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center gap-1"
                                >
                                    <Info className="h-5 w-5 text-accent animate-pulse" />
                                    <p className="text-[10px] text-muted-foreground font-medium">Click on any step to see details</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Desktop Layout - Unchanged horizontal grid with floating effect */}
                <div className="relative mx-auto max-w-5xl hidden lg:block">
                    <div className="absolute top-12 h-0.5 w-[80%] left-[10%] -translate-y-1/2 bg-gray-200 z-[-1]" />

                    <div className="relative grid grid-cols-5 gap-6">
                        {PROCESS_STEPS.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                    className="relative flex flex-col items-center text-center"
                                >
                                    <div className="absolute -top-3 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white shadow-md">
                                        {index + 1}
                                    </div>

                                    <motion.div
                                        animate={floatingAnimation}
                                        className="relative z-0 mb-6 flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-white bg-accent text-primary shadow-xl transition-transform hover:scale-110"
                                    >
                                        <Icon className="h-10 w-10" />
                                    </motion.div>

                                    <h3 className="mb-3 text-xl font-bold text-primary">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {step.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

