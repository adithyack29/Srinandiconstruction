'use client'

import { CheckCircle2, Trophy, Clock, ShieldCheck, Users, Banknote } from "lucide-react"
import { motion } from "framer-motion"

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
        <section className="bg-primary py-24 text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                        Why Choose
                        <span className="text-accent"> Sri Nandi</span>
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 bg-accent" />
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
                        We don&apos;t just build structures; we build trust. Experience the difference with our commitment to excellence.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                className="group flex gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-accent/50 hover:bg-white/10"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 px-0 transition-colors group-hover:bg-accent text-accent group-hover:text-primary">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-3 text-xl font-bold text-white group-hover:text-accent">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-200">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
