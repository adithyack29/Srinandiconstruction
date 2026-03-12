'use client'

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"

const CONTACT_INFO = [
    {
        icon: Phone,
        title: "Phone",
        details: "+91 8494913111",
        action: "tel:+918494913111"
    },
    {
        icon: Mail,
        title: "Email",
        details: "srinandiconstruction21@gmail.com",
        action: "mailto:srinandiconstruction21@gmail.com"
    },
    {
        icon: MapPin,
        title: "Office Location",
        details: "Lakeview Garden, K. Channasandra, Horamavu, Bangalore – 43",
        action: "#map"
    },
    {
        icon: Clock,
        title: "Working Hours",
        details: "Monday - Saturday: 9:00 AM - 6:00 PM",
        action: null
    }
]

export function ContactContent() {
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
                        Contact Us
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">
                        Let&apos;s discuss how we can bring your next construction project to life. Connect with our experts today.
                    </p>
                </motion.div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <div className="grid gap-12 lg:grid-cols-5">
                            {/* Contact Information */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-2 space-y-8"
                            >
                                <div>
                                    <h2 className="mb-8 text-3xl font-bold text-primary">Get In Touch</h2>
                                    <p className="mb-10 text-muted-foreground leading-relaxed">
                                        We are here to help you with all your construction needs. Reach out to us through any of the following channels or visit our office.
                                    </p>
                                </div>

                                <div className="grid gap-6">
                                    {CONTACT_INFO.map((item, index) => {
                                        const Icon = item.icon
                                        return (
                                            <motion.div 
                                                key={index} 
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="flex items-start gap-5 rounded-xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md"
                                            >
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h3 className="mb-1 text-lg font-bold text-primary">{item.title}</h3>
                                                    {item.action ? (
                                                        <a href={item.action} className="text-muted-foreground hover:text-accent transition-colors text-sm break-all font-medium">
                                                            {item.details}
                                                        </a>
                                                    ) : (
                                                        <p className="text-muted-foreground text-sm font-medium">{item.details}</p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </motion.div>

                            {/* Google Maps */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-3"
                            >
                                <a 
                                    href="https://www.google.com/maps/place/Shree+Nandi+Construction/@13.0458596,77.6807377,19z/data=!3m1!4b1!4m6!3m5!1s0x3bae11a373422c8b:0xeaa99269a934d60!8m2!3d13.0458596!4d77.6813814!16s%2Fg%2F11y8ty8_5x?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group block h-[400px] md:h-[600px] w-full overflow-hidden rounded-2xl bg-gray-200 border border-gray-100 relative shadow-lg"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('/images/map-location.png')` }}
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-xl transition-all duration-300 group-hover:bg-accent/40" />
                                            <MapPin className="relative h-16 w-16 text-primary transition-transform duration-300 group-hover:scale-125" />
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
