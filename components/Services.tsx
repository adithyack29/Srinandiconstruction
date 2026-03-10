import { Building2, Home, Wrench, Sofa, Hammer, HardHat, ArrowRight } from "lucide-react"
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
                    {servicesData.map((service) => {
                        const Icon = iconMap[service.icon]
                        return (
                            <Card
                                key={service.id}
                                className="group relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20 border-accent/20 border-2"
                            >
                                {/* Image Placeholder */}
                                <div className="relative h-48 w-full overflow-hidden bg-primary/10">
                                    {/* Replace with actual image: <Image src={service.image} alt={service.title} fill className="object-cover" /> */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('/images/service-placeholder.jpg')` }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                                    {/* Icon Circle */}
                                    <div className="absolute -bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary shadow-lg ring-4 ring-white transition-transform group-hover:scale-110 group-hover:rotate-12">
                                        {Icon && <Icon className="h-8 w-8" />}
                                    </div>
                                </div>

                                <CardContent className="p-8 pt-10 relative bg-white">
                                    <h3 className="mb-4 text-2xl font-bold text-primary transition-colors group-hover:text-accent">
                                        {service.title}
                                    </h3>
                                    <p className="mb-8 text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    <Link
                                        href={`/services#${service.id}`}
                                        className="inline-flex items-center font-bold text-primary group-hover:text-amber-600 uppercase tracking-widest text-sm"
                                    >
                                        Read More
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                                    </Link>
                                </CardContent>

                                {/* Bottom Border Accent */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                            </Card>
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
