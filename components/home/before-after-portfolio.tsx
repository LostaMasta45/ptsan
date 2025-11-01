'use client';

import { BeforeAfterSlider } from '@/components/portfolio/before-after-slider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';

const beforeAfterPairs = Array.from({ length: 20 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    before: `/before-after/${num}_before.png`,
    after: `/before-after/${num}_after.png`,
  };
});

export function BeforeAfterPortfolio() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {beforeAfterPairs.slice(0, 6).map((pair) => (
            <BeforeAfterSlider
              key={pair.id}
              beforeImage={pair.before}
              afterImage={pair.after}
              title={`${t.portfolio.project} ${pair.id}`}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/portofolio">
              {t.portfolio.viewAll}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
