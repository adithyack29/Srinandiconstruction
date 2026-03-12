'use client'

import { servicesData } from "@/data/services"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

// Map service IDs to specific features
const serviceFeatures: Record<string, string[]> = {
    "residential": [
        "Custom Home Layouts & Design",
        "High-Grade Material Procurement",
        "Smart Home Integration",
        "Vastu Compliant Planning",
        "End-to-end Execution & Handover"
    ],
    "commercial": [
        "Office Complexes & IT Parks",
        "Retail Chains & Showrooms",
        "Warehouse Construction",
        "Green Building Standards",
        "Scalable Infrastructure"
    ],
    "renovation": [
        "Structural Modifications",
        "Kitchen & Bathroom Remodeling",
        "Flooring & Tiling Upgrades",
        "Electrical & Plumbing Overhauls",
        "Exterior Facade Refresh"
    ],
    "interiors": [
        "Modular Kitchens & Wardrobes",
        "False Ceiling & Lighting",
        "Custom Furniture Design",
        "Space Optimization",
        "Color & Texture Consultation"
    ],
    "material-construction": [
        "A-Grade Cement & Steel",
        "Branded Electrical Fittings",
        "Premium Plumbing Fixtures",
        "Quality Sand & Aggregates",
        "Transparent Material Audits"
    ],
    "civil-works": [
        "Earthwork & Excavation",
        "RCC Structures",
        "Waterproofing Solutions",
        "Boundary Walls & Fencing",
        "Roadworks & Paving"
    ]
}

export function ServicesContent() {
    return (
        <>
            <section className="bg-primary py-20 text-primary-foreground">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 text-center"
                >
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                        Our Services
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">
                        End-to-end construction capabilities designed to bring your structural visions to reality.
                    </p>
                </motion.div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="space-y-32">
                        {servicesData.map((service, index) => {
                            const isEven = index % 2 === 0
                            const features = serviceFeatures[service.id] || []

                            return (
                                <motion.div
                                    key={service.id}
                                    id={service.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col gap-12 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                >
                                    <div className="w-full lg:w-1/2">
                                        <motion.div 
                                            animate={{ y: [0, -12, 0] }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl"
                                        >
                                            {/* Service Image */}
                                            <div
                                                className="absolute inset-0 bg-gray-200 bg-cover bg-center transition-transform hover:scale-105 duration-700"
                                                style={{ backgroundImage: `url('${service.image || '/images/service-placeholder.jpg'}')` }}
                                            />
                                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                                        </motion.div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full lg:w-1/2 lg:px-12">
                                        <div className="mb-6 inline-flex items-center rounded-full bg-accent/20 px-4 py-2 font-bold uppercase tracking-widest text-accent text-sm">
                                            {service.title}
                                        </div>

                                        <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
                                            Expert Solutions in <br /> {service.title}
                                        </h2>

                                        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                                            {service.description} We leverage industry best practices and innovative techniques to deliver outstanding results in this domain.
                                        </p>

                                        <ul className="mb-10 space-y-4">
                                            {features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center font-medium text-primary">
                                                    <CheckCircle2 className="mr-4 h-6 w-6 shrink-0 text-accent" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
