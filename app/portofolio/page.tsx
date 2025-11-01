'use client';

import { site } from '@/config/site';
import { BeforeAfterSlider } from '@/components/portfolio/before-after-slider';
import { useLanguage } from '@/lib/i18n/context';

const beforeAfterPairs = Array.from({ length: 20 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    before: `/before-after/${num}_before.png`,
    after: `/before-after/${num}_after.png`,
  };
});

export default function PortofolioPage() {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">{t.portfolioPage.title}</h1>
        <p className="text-lg text-muted-foreground">
          {t.portfolioPage.subtitle} {language === 'id' ? 'di' : 'in'} {site.serviceAreas.join(', ')} {language === 'id' ? 'dan sekitarnya' : 'and surrounding areas'}.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {beforeAfterPairs.map((pair) => (
          <BeforeAfterSlider
            key={pair.id}
            beforeImage={pair.before}
            afterImage={pair.after}
            title={`${t.portfolio.project} ${pair.id}`}
          />
        ))}
      </div>

      <section className="bg-muted/50 rounded-lg p-8 text-center space-y-6">
        <h2 className="text-2xl font-bold">{t.portfolioPage.ctaTitle}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t.portfolioPage.ctaSubtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {t.portfolioPage.ctaWhatsapp}
          </a>
          <a
            href="/estimasi"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {t.portfolioPage.ctaEstimate}
          </a>
        </div>
      </section>
    </div>
  );
}
