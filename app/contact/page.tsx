import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata = {
    title: "Contact Us | Sri Nandi Construction",
    description: "Get in touch with Sri Nandi Construction for your residential and commercial building needs in Bangalore.",
}

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

export default function ContactPage() {
    return (
        <>
            <section className="bg-primary py-20 text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                        Contact Us
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">
                        Let&apos;s discuss how we can bring your next construction project to life. Connect with our experts today.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 lg:grid-cols-2">

                        {/* Contact Information & Map */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold text-primary">Get In Touch</h2>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    {CONTACT_INFO.map((item, index) => {
                                        const Icon = item.icon
                                        return (
                                            <div key={index} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent">
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                <h3 className="mb-2 text-lg font-bold text-primary">{item.title}</h3>
                                                {item.action ? (
                                                    <a href={item.action} className="text-muted-foreground hover:text-accent transition-colors text-sm leading-relaxed">
                                                        {item.details}
                                                    </a>
                                                ) : (
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.details}</p>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Google Maps Placeholder */}
                            <div id="map" className="h-[400px] w-full overflow-hidden rounded-xl bg-gray-200 border border-gray-100 relative items-center justify-center flex flex-col">
                                {/* In a real app, replace with actual Google Maps iframe */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-50"
                                    style={{ backgroundImage: `url('/images/project-placeholder.jpg')` }}
                                />
                                <div className="absolute inset-0 bg-gray-900/10 mix-blend-overlay" />
                                <MapPin className="h-16 w-16 text-primary z-10 mb-4" />
                                <p className="z-10 text-primary font-bold bg-white/80 px-4 py-2 rounded shadow-sm">
                                    Google Maps Integration Here
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-2xl bg-white p-8 shadow-xl lg:p-12 border border-gray-100">
                            <h2 className="mb-2 text-3xl font-bold text-primary">Send a Message</h2>
                            <p className="mb-8 text-muted-foreground">Fill out the form below and our team will get back to you within 24 hours.</p>

                            <form className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-primary font-semibold">First Name</Label>
                                        <Input id="firstName" placeholder="John" className="h-12 bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-primary font-semibold">Last Name</Label>
                                        <Input id="lastName" placeholder="Doe" className="h-12 bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent" />
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-primary font-semibold">Email Address</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-primary font-semibold">Phone Number</Label>
                                        <Input id="phone" type="tel" placeholder="+91 98765 43210" className="h-12 bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="projectType" className="text-primary font-semibold">Project Type</Label>
                                    <select
                                        id="projectType"
                                        className="flex h-12 w-full items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                                    >
                                        <option value="" disabled selected>Select a project type...</option>
                                        <option value="residential">Residential Construction</option>
                                        <option value="commercial">Commercial Construction</option>
                                        <option value="renovation">Renovation & Remodeling</option>
                                        <option value="interior">Interior Designing</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-primary font-semibold">Project Details & Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project requirements, timeline, and budget..."
                                        className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent"
                                    />
                                </div>

                                <Button type="button" size="lg" className="w-full h-14 bg-accent font-bold text-primary hover:bg-accent/90 shadow-md">
                                    Submit Enquiry
                                </Button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
