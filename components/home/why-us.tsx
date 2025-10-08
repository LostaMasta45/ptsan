import { Clock, FileText, Shield, Star, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Tepat Waktu',
    description: 'Timeline jelas & update berkala.',
  },
  {
    icon: FileText,
    title: 'RAB Transparan',
    description: 'Rinci, tanpa biaya tersembunyi.',
  },
  {
    icon: Shield,
    title: 'Garansi Pekerjaan',
    description: 'Hingga 12 bulan (S&K berlaku).',
  },
  {
    icon: Star,
    title: 'Material Berkualitas',
    description: 'Rekomendasi sesuai kebutuhan & iklim lokal.',
  },
  {
    icon: Users,
    title: 'Tim Berpengalaman',
    description: 'Drafter CAD, arsitek, dan tukang teruji.',
  },
];

export function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Pilih PT SAN?</h2>
          <p className="text-muted-foreground">
            Komitmen kami untuk memberikan layanan terbaik dengan standar profesional
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
