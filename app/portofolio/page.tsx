import { Metadata } from 'next';
import { site } from '@/config/site';
import { BeforeAfterSlider } from '@/components/portfolio/before-after-slider';

export const metadata: Metadata = {
  title: 'Portofolio Before & After',
  description: `Lihat transformasi nyata dari berbagai proyek renovasi dan konstruksi yang telah dikerjakan ${site.brand} di ${site.serviceAreas.join(', ')}. Bukti kualitas dan kepercayaan klien kami.`,
  keywords: `portofolio ${site.brand}, before after renovasi, proyek renovasi Mojokerto, hasil konstruksi, transformasi rumah`,
};

const beforeAfterPairs = Array.from({ length: 20 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    before: `/before-after/${num}_before.png`,
    after: `/before-after/${num}_after.png`,
  };
});

export default function PortofolioPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Portofolio Before & After</h1>
        <p className="text-lg text-muted-foreground">
          Lihat transformasi nyata dari setiap proyek yang kami kerjakan.
          Geser untuk melihat perubahan sebelum dan sesudah renovasi di {site.serviceAreas.join(', ')} dan sekitarnya.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {beforeAfterPairs.map((pair) => (
          <BeforeAfterSlider
            key={pair.id}
            beforeImage={pair.before}
            afterImage={pair.after}
            title={`Proyek ${pair.id}`}
          />
        ))}
      </div>

      <section className="bg-muted/50 rounded-lg p-8 text-center space-y-6">
        <h2 className="text-2xl font-bold">Siap Memulai Proyek Anda?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Konsultasikan kebutuhan proyek Anda dengan tim kami. Gratis, tanpa
          komitmen.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Chat WhatsApp
          </a>
          <a
            href="/estimasi"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Minta Estimasi
          </a>
        </div>
      </section>
    </div>
  );
}
