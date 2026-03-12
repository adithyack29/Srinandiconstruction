'use client'

import { SectionHeader } from "@/components/SectionHeader"
import { CheckCircle2, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

const STATS = [
    { label: "Years Experience", value: "12+", icon: Clock },
    { label: "Projects Completed", value: "46+", icon: CheckCircle2 },
    { label: "Satisfied clients", value: "100%", icon: Users },
]

export function AboutContent() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-primary py-20 text-primary-foreground">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 text-center"
                >
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                        About Sri Nandi Construction
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">
                        Building excellence through trust, quality, and unparalleled craftsmanship.
                    </p>
                </motion.div>
            </section>

            {/* Overview Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <SectionHeader
                                title="Who We Are"
                                subtitle="We are a premier construction company based in Bangalore, dedicated to delivering state-of-the-art residential and commercial projects."
                                centered={false}
                            />
                            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                                <p>
                                    Founded with a vision to redefine the construction landscape in Bangalore, Sri Nandi Construction has grown into a trusted name synonymous with quality and reliability. We believe that every brick laid is a stepping stone towards building lasting relationships with our clients.
                                </p>
                                <p>
                                    Our comprehensive approach covers everything from initial design and planning to execution and final handover. We pride ourselves on our meticulous attention to detail, adherence to strict timelines, and unwavering commitment to safety standards.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="h-64 rounded-xl bg-gray-200 bg-cover bg-center shadow-lg" 
                                style={{ backgroundImage: `url('/images/about-who-we-are-1.png')` }} 
                            />
                            <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="mt-0 sm:mt-8 h-64 rounded-xl bg-gray-200 bg-cover bg-center shadow-lg" 
                                style={{ backgroundImage: `url('/images/about-who-we-are-2.png')` }} 
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-50 py-16 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-20">
                        {STATS.map((stat, index) => {
                            const Icon = stat.icon
                            return (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-2">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="rounded-2xl bg-primary p-12 text-white shadow-xl"
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center">
                                <span className="w-12 h-1 bg-accent mr-4"></span>
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                To deliver high-quality, cost-effective construction projects on schedule by employing and supporting motivated, flexible, and focused teams. We value the importance of our relationships and will continue to remain fair and true in our dealings with all employees, clients, vendors, and partners.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="rounded-2xl bg-white border border-gray-100 p-12 shadow-xl"
                        >
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                                <span className="w-12 h-1 bg-accent mr-4"></span>
                                Our Vision
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To be the preferred contractor of choice in Bangalore, recognized for our commitment to client satisfaction, quality of work, and unwavering integrity. A company that our clients want to work with, our customers can rely on, and our employees are proud to work for.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl"
                    >
                        <div className="grid md:grid-cols-5">
                            <div className="md:col-span-2 bg-gray-200 aspect-square sm:aspect-[4/5] md:aspect-auto bg-cover bg-[center_top]" style={{ backgroundImage: `url('/images/tharunv.jpeg')` }}>
                                {/* Founder Image */}
                            </div>
                            <div className="md:col-span-3 p-10 md:p-14 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-primary mb-2">Tharun V</h2>
                                <span className="text-accent font-bold uppercase tracking-widest text-sm mb-6 block">Proprietor & Founder</span>

                                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                                    &quot;At Sri Nandi Construction, we believe that every structure has a soul. Our goal is to breathe life into brick and mortar through structural integrity, aesthetic brilliance, and a genuine passion for building.&quot;
                                </p>

                                <div className="space-y-3 pb-6 border-b border-gray-100 mb-6">
                                    <div className="flex items-center text-sm font-medium text-primary">
                                        <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                                        10+ Years Industry Expertise
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-primary">
                                        <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                                        Visionary Leadership
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
