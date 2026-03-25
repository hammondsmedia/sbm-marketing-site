import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import ClientLogos from '@/components/ClientLogos'
import Differentiators from '@/components/Differentiators'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <ClientLogos />
      <Differentiators />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  )
}
