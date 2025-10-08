import { Metadata } from 'next';
import Image from 'next/image';
import { site } from '@/config/site';
import { Building2, Users, Award, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: site.description,
};

export default function TentangKami() {

  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Image
              src="/media/logos/logoutama.png"
              alt={site.brand}
              width={200}
              height={80}
              className="h-20 w-auto mx-auto mb-6"
              priority
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{site.brand}</h1>
            <p className="text-xl text-muted-foreground">{site.tagline}</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-lg">
              <strong>PT Semangat Anak Negeri (PT SAN)</strong> adalah penyedia jasa <strong>renovasi bangunan, konstruksi, dan layanan gambar teknik (drafter)</strong>. Kami memberi solusi menyeluruh dari <strong>perencanaan desain</strong>, <strong>pembuatan gambar kerja profesional (CAD)</strong>, hingga <strong>pelaksanaan proyek</strong> dengan hasil <strong>rapi, kuat, dan sesuai kebutuhan</strong>.
            </p>

            <p>
              Berawal dari pengalaman di desain teknik & drafting furniture untuk pasar lokal maupun internasional, kami berkembang ke konstruksi & renovasi demi menghadirkan layanan yang <strong>terpercaya, transparan, dan profesional</strong>. Dengan tim berpengalaman, peralatan lengkap, serta penguasaan software CAD, kami membantu mewujudkan hunian & bangunan yang fungsional, estetis, dan bernilai tinggi.
            </p>

            <p>
              Fokus kami: <strong>tepat waktu</strong>, <strong>sesuai anggaran</strong>, dan <strong>kepuasan klien</strong> untuk rumah tinggal, ruko/komersial, dan proyek desain teknik.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-12">
            <div className="flex gap-4 p-6 rounded-lg bg-slate-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Layanan Menyeluruh</h3>
                <p className="text-sm text-muted-foreground">
                  Dari desain CAD, gambar kerja, hingga pelaksanaan konstruksi dalam satu atap.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-slate-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tim Berpengalaman</h3>
                <p className="text-sm text-muted-foreground">
                  Drafter CAD, arsitek, dan tukang yang teruji di berbagai proyek lokal & internasional.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-slate-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Kualitas Terjamin</h3>
                <p className="text-sm text-muted-foreground">
                  Material berkualitas dan garansi hingga 12 bulan untuk kepuasan Anda.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-slate-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Komitmen Transparan</h3>
                <p className="text-sm text-muted-foreground">
                  RAB detail, timeline jelas, dan update progres berkala untuk kepercayaan penuh.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/10">
            <h2 className="text-2xl font-bold mb-4">Area Layanan</h2>
            <p className="mb-4">
              Kami melayani proyek di <strong>{site.serviceAreas.join(', ')}</strong> dan sekitarnya.
            </p>
            <p className="text-sm text-muted-foreground">
              Kantor pusat kami berlokasi di <strong>{site.baseCity}</strong>, memudahkan koordinasi dan respons cepat untuk proyek Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
