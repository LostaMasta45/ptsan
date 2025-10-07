'use client'
import { HeroSection } from '@/components/home/hero-section';
import { ServiceChips } from '@/components/home/service-chips';
import { TrustBar } from '@/components/home/trust-bar';
import { ServiceGrid } from '@/components/home/service-grid';
import { BeforeAfterPortfolio } from '@/components/home/before-after-portfolio';
import { MiniTimeline } from '@/components/home/mini-timeline';
import { Testimonials } from '@/components/home/testimonials';
import { CTASection } from '@/components/home/cta-section';
import { Partnership } from '@/components/home/partnership';
import { FAQSection } from '@/components/home/faq-section';
import { MobileStickyCTA } from '@/components/home/mobile-sticky-cta';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceChips />
      <TrustBar />
      <ServiceGrid />
      <BeforeAfterPortfolio />
      <MiniTimeline />
      <Testimonials />
      <CTASection />
      <Partnership />
      <FAQSection />
      <MobileStickyCTA />
    </>
  );
}
