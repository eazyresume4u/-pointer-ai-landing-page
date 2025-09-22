import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SocialProof } from "@/components/social-proof"
import { AnimatedSection } from "@/components/animated-section"
import { lazy, Suspense } from "react"

// Lazy load sections that are below the fold
const BentoSection = lazy(() => import("@/components/bento-section").then(mod => ({ default: mod.BentoSection })))
const LargeTestimonial = lazy(() => import("@/components/large-testimonial").then(mod => ({ default: mod.LargeTestimonial })))
const PricingSection = lazy(() => import("@/components/pricing-section").then(mod => ({ default: mod.PricingSection })))
const TestimonialGridSection = lazy(() => import("@/components/testimonial-grid-section").then(mod => ({ default: mod.TestimonialGridSection })))
const FAQSection = lazy(() => import("@/components/faq-section").then(mod => ({ default: mod.FAQSection })))
const CTASection = lazy(() => import("@/components/cta-section").then(mod => ({ default: mod.CTASection })))
const FooterSection = lazy(() => import("@/components/footer-section").then(mod => ({ default: mod.FooterSection })))

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute bottom-[-150px] md:bottom-[-400px] left-1/2 transform -translate-x-1/2 z-30">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 mt-[411px] md:mt-[400px]" delay={0.1}>
          <SocialProof />
        </AnimatedSection>
        <AnimatedSection id="features-section" className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <Suspense fallback={<div className="w-full h-96 bg-muted/20 animate-pulse rounded-lg" />}>
            <BentoSection />
          </Suspense>
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <Suspense fallback={<div className="w-full h-64 bg-muted/20 animate-pulse rounded-lg" />}>
            <LargeTestimonial />
          </Suspense>
        </AnimatedSection>
        <AnimatedSection
          id="pricing-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <Suspense fallback={<div className="w-full h-96 bg-muted/20 animate-pulse rounded-lg" />}>
            <PricingSection />
          </Suspense>
        </AnimatedSection>
        <AnimatedSection
          id="testimonials-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <Suspense fallback={<div className="w-full h-96 bg-muted/20 animate-pulse rounded-lg" />}>
            <TestimonialGridSection />
          </Suspense>
        </AnimatedSection>
        <AnimatedSection id="faq-section" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <Suspense fallback={<div className="w-full h-96 bg-muted/20 animate-pulse rounded-lg" />}>
            <FAQSection />
          </Suspense>
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <Suspense fallback={<div className="w-full h-64 bg-muted/20 animate-pulse rounded-lg" />}>
            <CTASection />
          </Suspense>
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <Suspense fallback={<div className="w-full h-32 bg-muted/20 animate-pulse rounded-lg" />}>
            <FooterSection />
          </Suspense>
        </AnimatedSection>
      </div>
    </div>
  )
}
