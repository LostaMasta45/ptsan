'use client'
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/home/hero-section';
import { ServiceChips } from '@/components/home/service-chips';
import { TrustBar } from '@/components/home/trust-bar';
import { ServiceGrid } from '@/components/home/service-grid';

const BeforeAfterPortfolio = dynamic(() => import('@/components/home/before-after-portfolio').then(mod => ({ default: mod.BeforeAfterPortfolio })), {
  loading: () => <div className="py-16 md:py-24 animate-pulse"><div className="container px-4 md:px-6"><div className="h-96 bg-muted rounded-lg"></div></div></div>
});

const MiniTimeline = dynamic(() => import('@/components/home/mini-timeline').then(mod => ({ default: mod.MiniTimeline })));

const Testimonials = dynamic(() => import('@/components/home/testimonials').then(mod => ({ default: mod.Testimonials })));

const CTASection = dynamic(() => import('@/components/home/cta-section').then(mod => ({ default: mod.CTASection })));

const Partnership = dynamic(() => import('@/components/home/partnership').then(mod => ({ default: mod.Partnership })));

const FAQSection = dynamic(() => import('@/components/home/faq-section').then(mod => ({ default: mod.FAQSection })));

const MobileStickyCTA = dynamic(() => import('@/components/home/mobile-sticky-cta').then(mod => ({ default: mod.MobileStickyCTA })));

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
