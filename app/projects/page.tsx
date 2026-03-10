import { projectsData } from "@/data/projects"
import { MapPin } from "lucide-react"

export const metadata = {
    title: "Our Portfolio | Sri Nandi Construction",
    description: "Browse our gallery of completed residential, commercial, and renovation projects in Bangalore.",
}

export default function ProjectsPage() {
    return (
        <>
            <section className="bg-primary py-20 text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                        Our Projects Portfolio
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">
                        A showcase of our commitment to excellence, quality, and architectural brilliance across Bangalore.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Project Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projectsData.map((project) => (
                            <div
                                key={project.id}
                                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20 border border-gray-100"
                            >
                                {/* Image Area */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                                        style={{ backgroundImage: `url('/images/project-placeholder.jpg')` }}
                                    />

                                    {/* Category Badge */}
                                    <span className="absolute left-4 top-4 rounded bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Content Area */}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-3 text-xl font-bold text-primary transition-colors group-hover:text-accent">
                                        {project.title}
                                    </h3>

                                    <div className="mb-4 flex items-center text-muted-foreground text-sm font-medium">
                                        <MapPin className="mr-2 h-4 w-4 text-accent" />
                                        {project.location}
                                    </div>

                                    <p className="text-gray-600 leading-relaxed text-sm flex-1">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <span className="text-sm font-bold text-primary uppercase tracking-widest group-hover:text-accent transition-colors cursor-pointer flex items-center">
                                            View Details
                                            <div className="ml-2 w-0 h-px bg-accent transition-all group-hover:w-8" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
