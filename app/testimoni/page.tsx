import { Metadata } from 'next';
import { site } from '@/config/site';
import { TestimonialsCarousel } from '@/components/testimonials/testimonials-carousel';
import { Star, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Testimoni Klien',
  description: `Apa kata klien tentang layanan ${site.brand}. Baca pengalaman nyata dari ratusan klien yang puas dengan kualitas pekerjaan dan pelayanan kami.`,
  keywords: `testimoni ${site.brand}, review kontraktor Mojokerto, ulasan jasa renovasi, kepuasan klien`,
};

export default function TestimoniPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Testimoni Klien</h1>
        <p className="text-lg text-muted-foreground">
          Kepercayaan dan kepuasan klien adalah prioritas kami. Inilah cerita
          nyata dari mereka yang telah mempercayakan proyeknya kepada {site.brand}.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center max-w-4xl mx-auto">
        <div className="p-6 space-y-2">
          <div className="text-4xl font-bold text-primary">{site.projectsDone}</div>
          <p className="text-muted-foreground">Proyek Selesai</p>
        </div>
        <div className="p-6 space-y-2">
          <div className="text-4xl font-bold text-primary">4.9/5.0</div>
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-muted-foreground">Rating Rata-rata</p>
        </div>
        <div className="p-6 space-y-2">
          <div className="text-4xl font-bold text-primary">98%</div>
          <p className="text-muted-foreground">Tingkat Kepuasan</p>
        </div>
      </div>

      <TestimonialsCarousel />

      <section className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Kenapa Klien Memilih Kami?</h2>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {[
            {
              title: 'Komunikasi Transparan',
              description: 'Update progres berkala dan RAB detail tanpa biaya tersembunyi',
            },
            {
              title: 'Tim Berpengalaman',
              description: 'Drafter CAD, arsitek, dan tukang ahli dengan pengalaman 10+ tahun',
            },
            {
              title: 'Tepat Waktu',
              description: 'Komitmen timeline jelas dan konsisten dalam setiap proyek',
            },
            {
              title: 'Garansi Tertulis',
              description: 'Garansi hingga 12 bulan dengan layanan purna jual responsif',
            },
          ].map((item, index) => (
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
        <h2 className="text-2xl font-bold">Ingin Menjadi Klien Berikutnya?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Bergabunglah dengan ratusan klien yang puas dan rasakan pengalaman
          kerja sama yang profesional, transparan, dan berkualitas.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Konsultasi Gratis
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
