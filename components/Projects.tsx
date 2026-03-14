'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
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
                            className="group relative flex flex-col overflow-hidden rounded-xl bg-gray-100 shadow-md h-full"
                        >
                            {/* Project Image */}
                            <div className={`relative w-full overflow-hidden ${!(project.title || project.location || project.description) ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    style={{ backgroundImage: `url('${project.image}')` }}
                                />

                                {/* Overlay gradient */}
                                {(project.title || project.location || project.description) && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80" />
                                )}

                                {/* Category Badge */}
                                <span className="absolute left-6 top-6 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                                    {project.category}
                                </span>

                                {/* Content Overlay */}
                                {(project.title || project.location || project.description) && (
                                    <div className="absolute bottom-0 left-0 w-full p-6 text-white sm:p-8">
                                        {project.title && (
                                            <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                                                {project.title}
                                            </h3>
                                        )}
                                        {project.location && (
                                            <div className="mb-4 flex items-center text-gray-300">
                                                <MapPin className="mr-2 h-4 w-4 text-accent" />
                                                <span className="text-sm font-medium">{project.location}</span>
                                            </div>
                                        )}
                                        {project.description && (
                                            <p className="line-clamp-2 text-sm text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                {project.description}
                                            </p>
                                        )}
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
