import { Metadata } from 'next';
import { MessageCircle, Search, FileText, Hammer, CheckCircle } from 'lucide-react';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Proses Kerja',
  description: `Tahapan kerja profesional ${site.brand} dari konsultasi hingga serah terima proyek`,
};

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'Konsultasi',
    description: 'Diskusi kebutuhan, ide, dan budget proyek Anda dengan tim kami.',
    details: [
      'Diskusi via WhatsApp atau tatap muka',
      'Identifikasi kebutuhan dan ekspektasi',
      'Estimasi awal budget dan timeline',
    ],
  },
  {
    number: 2,
    icon: Search,
    title: 'Survey Lokasi',
    description: 'Tim kami melakukan survey ke lokasi untuk pengukuran dan analisis kondisi.',
    details: [
      'Pengukuran detail lokasi',
      'Analisis kondisi eksisting',
      'Dokumentasi foto dan catatan teknis',
    ],
  },
  {
    number: 3,
    icon: FileText,
    title: 'RAB & Kontrak',
    description: 'Penyusunan RAB detail, gambar kerja, dan penandatanganan kontrak.',
    details: [
      'RAB lengkap dengan spesifikasi material',
      'Gambar kerja dan shop drawing (jika perlu)',
      'Kontrak kerja dengan timeline jelas',
      'Skema pembayaran termin',
    ],
  },
  {
    number: 4,
    icon: Hammer,
    title: 'Eksekusi & Quality Control',
    description: 'Pelaksanaan proyek dengan pengawasan ketat dan update progres berkala.',
    details: [
      'Pengadaan material berkualitas',
      'Pelaksanaan sesuai gambar kerja',
      'Quality control di setiap tahap',
      'Update progres mingguan via WhatsApp',
    ],
  },
  {
    number: 5,
    icon: CheckCircle,
    title: 'Serah Terima & Garansi',
    description: 'Inspeksi akhir, dokumentasi, dan aktivasi garansi pekerjaan.',
    details: [
      'Inspeksi bersama klien',
      'Dokumentasi foto hasil akhir',
      'Serah terima dengan checklist lengkap',
      'Garansi hingga 12 bulan',
    ],
  },
];

export default function ProsesKerjaPage() {
  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Proses Kerja Kami</h1>
          <p className="text-lg text-muted-foreground">
            Timeline jelas dan transparan untuk memastikan proyek Anda berjalan lancar
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.number} className="relative">
                {!isLast && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
                )}
                
                <div className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1 pb-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 ml-16">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-lg bg-primary/5 border border-primary/10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Update Progres Berkala</h2>
          <p className="text-muted-foreground mb-6">
            Kami memberikan update progres pekerjaan setiap minggu melalui WhatsApp lengkap dengan foto dokumentasi, 
            sehingga Anda selalu tahu perkembangan proyek Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
