import {
    ClipboardCheck,
    PenTool,
    HardHat,
    SearchCheck,
    KeyRound
} from "lucide-react"

const PROCESS_STEPS = [
    {
        title: "Consultation",
        description: "We discuss your requirements, budget, and vision.",
        icon: ClipboardCheck,
    },
    {
        title: "Planning & Design",
        description: "Our architects create detailed 2D/3D layouts and plans.",
        icon: PenTool,
    },
    {
        title: "Construction",
        description: "Execution begins with our expert team and quality materials.",
        icon: HardHat,
    },
    {
        title: "Quality Check",
        description: "Rigorous inspections at every stage of construction.",
        icon: SearchCheck,
    },
    {
        title: "Handover",
        description: "Final walkthrough and handing over the keys to your new space.",
        icon: KeyRound,
    },
]

export function Process() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Our Construction Process
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 bg-accent" />
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        A transparent, step-by-step approach ensuring your project is delivered on time, within budget, and to the highest standards.
                    </p>
                </div>

                {/* Process Steps container */}
                <div className="relative mx-auto max-w-5xl">
                    {/* Connecting Line - hidden on mobile */}
                    <div className="absolute left-1/2 top-24 hidden h-full w-1 origin-top -translate-x-1/2 bg-gray-200 lg:block lg:h-1 lg:w-full lg:-translate-y-1/2 lg:translate-x-0 lg:left-0" />

                    <div className="grid gap-12 lg:grid-cols-5 lg:gap-6">
                        {PROCESS_STEPS.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <div key={index} className="relative flex flex-col items-center text-center">

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-3 right-1/2 z-10 flex h-8 w-8 translate-x-1/2 items-center justify-center rounded-full bg-primary font-bold text-white shadow-md lg:-right-3 lg:-top-3 lg:translate-x-0">
                                        {index + 1}
                                    </div>

                                    {/* Icon Circle */}
                                    <div className="relative z-0 mb-6 flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-white bg-accent text-primary shadow-xl transition-transform hover:scale-110">
                                        <Icon className="h-10 w-10" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="mb-3 text-xl font-bold text-primary">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
