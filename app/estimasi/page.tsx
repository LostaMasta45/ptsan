import { Metadata } from 'next';
import { site } from '@/config/site';
import { EstimateForm } from '@/components/forms/estimate-form';
import { CheckCircle2, Clock, FileText, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Minta Estimasi Biaya',
  description: `Dapatkan estimasi biaya proyek renovasi atau konstruksi dari ${site.brand}. Gratis, cepat, dan tanpa komitmen. RAB transparan dan detail.`,
  keywords: `estimasi biaya renovasi, RAB gratis, hitung biaya konstruksi Mojokerto, konsultasi gratis`,
};

export default function EstimasiPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Minta Estimasi Biaya Proyek
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Isi form di bawah untuk mendapatkan estimasi biaya yang akurat dan
            transparan. Tim kami akan menghubungi Anda dalam 1x24 jam.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: MessageSquare,
              title: 'Konsultasi Gratis',
              description: 'Diskusi kebutuhan tanpa biaya',
            },
            {
              icon: FileText,
              title: 'RAB Transparan',
              description: 'Rincian biaya yang detail',
            },
            {
              icon: Clock,
              title: 'Respon Cepat',
              description: 'Balasan dalam 1x24 jam',
            },
            {
              icon: CheckCircle2,
              title: 'Tanpa Komitmen',
              description: 'Tidak ada kewajiban',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 space-y-2"
            >
              <div className="p-3 rounded-full bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg border p-6 md:p-8">
          <EstimateForm />
        </div>

        <div className="bg-muted/50 rounded-lg p-6 space-y-4">
          <h2 className="font-semibold text-lg">Yang Akan Anda Terima:</h2>
          <ul className="space-y-3">
            {[
              'Konsultasi detail via WhatsApp atau kunjungan langsung',
              'Survey lokasi dan pengukuran (jika diperlukan)',
              'RAB (Rencana Anggaran Biaya) yang transparan dan rinci',
              'Rekomendasi material dan metode kerja terbaik',
              'Timeline pengerjaan yang realistis',
              'Opsi payment term yang fleksibel',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center space-y-4 pt-6">
          <p className="text-sm text-muted-foreground">
            Atau hubungi kami langsung via WhatsApp untuk konsultasi lebih cepat
          </p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-green-600 text-white px-6 py-3 text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
