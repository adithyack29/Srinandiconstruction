'use client'

import { projectsData } from "@/data/projects"
import { MapPin } from "lucide-react"
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
                                {/* Image Area */}
                                <div className={`relative w-full overflow-hidden ${!(project.title || project.location || project.description) ? 'flex-1' : 'aspect-[4/3]'}`}>
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                                        style={{ backgroundImage: `url('${project.image}')` }}
                                    />

                                    {/* Category Badge */}
                                    <span className="absolute left-4 top-4 rounded bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Content Area */}
                                {(project.title || project.location || project.description) && (
                                    <div className="flex flex-1 flex-col p-6">
                                        {project.title && (
                                            <h3 className="mb-3 text-xl font-bold text-primary transition-colors group-hover:text-accent">
                                                {project.title}
                                            </h3>
                                        )}

                                        {project.location && (
                                            <div className="mb-4 flex items-center text-muted-foreground text-sm font-medium">
                                                <MapPin className="mr-2 h-4 w-4 text-accent" />
                                                {project.location}
                                            </div>
                                        )}

                                        {project.description && (
                                            <p className="text-gray-600 leading-relaxed text-sm flex-1">
                                                {project.description}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
