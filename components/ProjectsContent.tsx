'use client'

import { projectsData } from "@/data/projects"
import { MapPin, FileText } from "lucide-react"
import { motion } from "framer-motion"

export function ProjectsContent() {
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
                        Our Projects Portfolio
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">
                        A showcase of our commitment to excellence, quality, and architectural brilliance across Bangalore.
                    </p>
                </motion.div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Project Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20 border border-gray-100 h-full"
                            >
                                {/* Image Section */}
                                <div className="relative aspect-[3/2] w-full overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title || `Project ${project.id}`}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm shadow-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col p-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            {project.title && (
                                                <h3 className="text-xl font-extrabold text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
                                                    {project.title}
                                                </h3>
                                            )}
                                            {project.location && (
                                                <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                                                    <MapPin className="h-3.5 w-3.5 text-accent" />
                                                    <span>{project.location}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* PDF View Button */}
                                        {project.pdfUrl && (
                                            <a 
                                                href={project.pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-[11px] font-extrabold text-red-600 transition-all hover:bg-red-600 hover:text-white border border-red-100 shadow-sm ml-4 shrink-0"
                                            >
                                                <FileText className="h-3.5 w-3.5" />
                                                <span>VIEW</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
