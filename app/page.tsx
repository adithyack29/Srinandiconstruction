import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Projects } from "@/components/Projects"
import { Process } from "@/components/Process"
import { Testimonials } from "@/components/Testimonials"
import { CTA } from "@/components/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}
