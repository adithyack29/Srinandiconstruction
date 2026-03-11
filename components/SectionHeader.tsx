'use client'

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    centered?: boolean
    className?: string
    lightText?: boolean
}

export function SectionHeader({
    title,
    subtitle,
    centered = true,
    className,
    lightText = false,
}: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "mb-12 flex flex-col gap-4",
                centered ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            <h2
                className={cn(
                    "text-3xl font-bold tracking-tight md:text-5xl",
                    lightText ? "text-white" : "text-primary"
                )}
            >
                {title}
                <div
                    className={cn(
                        "mt-4 h-1 w-20 bg-accent",
                        centered ? "mx-auto" : "ml-0"
                    )}
                />
            </h2>

            {subtitle && (
                <p
                    className={cn(
                        "max-w-2xl text-lg",
                        lightText ? "text-gray-300" : "text-muted-foreground"
                    )}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    )
}
