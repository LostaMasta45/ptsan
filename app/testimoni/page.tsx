'use client';

import { site } from '@/config/site';
import { TestimonialsCarousel } from '@/components/testimonials/testimonials-carousel';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export default function TestimoniPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">{t.testimonialsPage.title}</h1>
        <p className="text-lg text-muted-foreground">
          {t.testimonialsPage.subtitle}
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center max-w-4xl mx-auto">
        <div className="p-6 space-y-2">
          <div className="text-4xl font-bold text-primary">{site.projectsDone}</div>
          <p className="text-muted-foreground">{t.testimonialsPage.stats.projectsCompleted}</p>
        </div>
        <div className="p-6 space-y-2">
          <div className="text-4xl font-bold text-primary">4.9/5.0</div>
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-muted-foreground">{t.testimonialsPage.stats.averageRating}</p>
        </div>
        <div className="p-6 space-y-2">
          <div className="text-4xl font-bold text-primary">98%</div>
          <p className="text-muted-foreground">{t.testimonialsPage.stats.satisfactionRate}</p>
        </div>
      </div>

      <TestimonialsCarousel />

      <section className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">{t.testimonialsPage.whyChooseTitle}</h2>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {t.testimonialsPage.reasons.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card space-y-2"
            >
              <Quote className="h-6 w-6 text-muted-foreground opacity-50" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 rounded-lg p-8 text-center space-y-6">
        <h2 className="text-2xl font-bold">{t.testimonialsPage.ctaTitle}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t.testimonialsPage.ctaSubtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {t.testimonialsPage.ctaConsult}
          </a>
          <a
            href="/estimasi"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {t.testimonialsPage.ctaEstimate}
          </a>
        </div>
      </section>
    </div>
  );
}
