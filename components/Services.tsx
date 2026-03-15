'use client'

import { Building2, Home, Wrench, Sofa, Hammer, HardHat } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { SectionHeader } from "./SectionHeader"
import { servicesData } from "@/data/services"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const iconMap: Record<string, React.ElementType> = {
    Home,
    Building2,
    Wrench,
    Sofa,
    Hammer,
    HardHat,
}

export function Services() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Our Services"
                    subtitle="Comprehensive construction solutions tailored to meet your unique requirements in Bangalore."
                />

                <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
                    {servicesData.map((service, index) => {
                        const Icon = iconMap[service.icon]
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            >
                                <Card
                                    className="group relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20 border-accent/20 border-2 h-full"
                                >
                                    <div className="relative h-64 w-full overflow-hidden bg-primary/10">
                                        <motion.div
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${service.image || '/images/service-placeholder.jpg'}')` }}
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                    </div>

                                    {/* Icon Circle */}
                                    <div className="absolute top-56 right-6 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary shadow-lg ring-4 ring-white transition-transform group-hover:scale-110 group-hover:rotate-12">
                                        {Icon && <Icon className="h-8 w-8" />}
                                    </div>

                                    <CardContent className="p-6 pt-10 relative bg-white h-[calc(100%-16rem)] flex flex-col justify-between">
                                        <div>
                                            <h3 className="mb-4 text-2xl font-bold text-primary transition-colors group-hover:text-accent">
                                                {service.title}
                                            </h3>
                                            <p className="mb-8 text-muted-foreground leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>


                                    </CardContent>

                                    {/* Bottom Border Accent */}
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="mt-16 text-center">
                    <Button size="lg" className="bg-primary px-8 hover:bg-primary/90">
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
