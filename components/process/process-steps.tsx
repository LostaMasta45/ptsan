import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Step {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const defaultSteps: Step[] = [
  {
    number: 1,
    title: 'Konsultasi Awal',
    description: 'Diskusi kebutuhan, survey lokasi, dan analisis kondisi eksisting. Gratis tanpa biaya.',
  },
  {
    number: 2,
    title: 'Survey & Pengukuran',
    description: 'Tim kami melakukan survey detail, pengukuran akurat, dan dokumentasi kondisi lapangan.',
  },
  {
    number: 3,
    title: 'RAB & Kontrak',
    description: 'Penyusunan RAB transparan, desain/gambar kerja, dan penandatanganan kontrak kerja.',
  },
  {
    number: 4,
    title: 'Eksekusi & Quality Control',
    description: 'Pelaksanaan proyek dengan update berkala, kontrol kualitas ketat, dan supervisi ahli.',
  },
  {
    number: 5,
    title: 'Serah Terima & Garansi',
    description: 'Inspeksi akhir, checklist serah terima, dokumentasi lengkap, dan aktivasi garansi.',
  },
];

interface ProcessStepsProps {
  steps?: Step[];
  variant?: 'vertical' | 'horizontal';
}

export function ProcessSteps({ steps = defaultSteps, variant = 'vertical' }: ProcessStepsProps) {
  return (
    <div
      className={cn(
        'space-y-8',
        variant === 'horizontal' && 'grid gap-6 md:grid-cols-2 lg:grid-cols-5 space-y-0'
      )}
    >
      {steps.map((step, index) => (
        <div
          key={step.number}
          className={cn(
            'relative',
            variant === 'vertical' && 'flex gap-6',
            variant === 'horizontal' && 'flex flex-col'
          )}
        >
          {variant === 'vertical' && index < steps.length - 1 && (
            <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-border" />
          )}

          <div className="relative z-10 flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
              {step.number}
            </div>
          </div>

          <div className={cn('space-y-2', variant === 'horizontal' && 'mt-4')}>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProcessChecklist() {
  const checklistItems = [
    'Dokumentasi foto before & after',
    'Daftar material yang digunakan',
    'Sertifikat garansi tertulis',
    'Panduan perawatan & maintenance',
    'Kontak layanan purna jual',
  ];

  return (
    <div className="bg-muted/50 rounded-lg p-6 space-y-4">
      <h3 className="font-semibold text-lg">Checklist Serah Terima:</h3>
      <ul className="space-y-3">
        {checklistItems.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
