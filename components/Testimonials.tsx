import { Star, Quote } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { testimonialsData } from "@/data/testimonials"
import { Card, CardContent } from "./ui/card"

export function Testimonials() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="What Our Clients Say"
                    subtitle="Don't just take our word for it. Here's what our satisfied customers have to say about working with Sri Nandi Construction."
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonialsData.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="relative border-gray-100 bg-gray-50 pt-8 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary shadow-lg">
                                <Quote className="h-5 w-5 fill-current" />
                            </div>

                            <CardContent className="px-8 pb-8 pt-4">
                                <div className="mb-4 flex text-accent">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>

                                <p className="mb-6 italic text-muted-foreground leading-relaxed">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                <div>
                                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                                    <span className="text-sm font-medium text-gray-500">{testimonial.role}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
