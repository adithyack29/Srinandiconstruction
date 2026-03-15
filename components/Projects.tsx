'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, FileText } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { projectsData } from "@/data/projects"
import { Button } from "./ui/button"

export function Projects() {
    // Take only the first 4 projects for the home page
    const featuredProjects = projectsData.slice(0, 4)

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
                    <SectionHeader
                        title="Our Latest Projects"
                        subtitle="Explore our portfolio of successfully delivered residential and commercial projects across Bangalore."
                        centered={false}
                        className="mb-0"
                    />
                    <Button size="lg" variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-white">
                        <Link href="/projects">View All Portfolio</Link>
                    </Button>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md"
                        >
                            {/* Project Image */}
                            <div className="relative aspect-[3/2] w-full overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    style={{ backgroundImage: `url('${project.image}')` }}
                                />

                                {/* Overlay gradient */}
                                {(project.title || project.location) && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-90" />
                                )}

                                {/* Category Badge */}
                                <span className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                                    {project.category}
                                </span>

                                {/* Content Overlay */}
                                {(project.title || project.location) && (
                                    <div className="absolute bottom-0 left-0 w-full p-6 text-white sm:p-7">
                                        <div className="flex items-end justify-between">
                                            <div className="flex-1">
                                                {project.title && (
                                                    <h3 className="mb-1 text-2xl font-extrabold md:text-3xl leading-tight">
                                                        {project.title}
                                                    </h3>
                                                )}
                                                {project.location && (
                                                    <div className="flex items-center text-gray-300">
                                                        <MapPin className="mr-2 h-4 w-4 text-accent" />
                                                        <span className="text-sm font-semibold">{project.location}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {project.pdfUrl && (
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    className="bg-accent text-primary hover:bg-accent/90 border-none transition-all duration-300 ml-4 shrink-0"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        window.open(project.pdfUrl, '_blank');
                                                    }}
                                                >
                                                    <FileText className="mr-2 h-4 w-4" />
                                                    View
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        <Link href="/projects">View All Portfolio</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
