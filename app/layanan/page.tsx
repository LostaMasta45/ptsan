import Link from 'next/link';
import { Hammer, Building2, Paintbrush, Ruler, Wrench, FileText, Download } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { site } from '@/config/site';
import assetsManifest from '@/src/assets.manifest.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan',
  description: `Layanan renovasi, konstruksi, interior, drafter CAD, dan maintenance oleh ${site.brand}`,
};

// ---- Fix 2: beri tipe eksplisit untuk item katalog ----
type CatalogItem = { title: string; file: string };
const catalogs: CatalogItem[] = (assetsManifest?.catalogs ?? []) as CatalogItem[];

const services = [
  {
    id: 'renovasi',
    icon: Hammer,
    title: 'Renovasi Rumah & Ruko',
    description: 'Upgrade fungsi & estetika dengan minim gangguan, hasil presisi.',
    details: [
      'Renovasi struktur dan fondasi',
      'Perluasan bangunan',
      'Modernisasi tampilan fasad',
      'Perbaikan atap dan rangka',
    ],
  },
  {
    id: 'konstruksi',
    icon: Building2,
    title: 'Konstruksi Bangunan',
    description: 'Fondasi kuat, struktur terukur, sesuai standar keselamatan.',
    details: [
      'Pembangunan rumah tinggal',
      'Konstruksi ruko dan bangunan komersial',
      'Struktur beton bertulang',
      'Pengawasan kualitas material',
    ],
  },
  {
    id: 'interior',
    icon: Paintbrush,
    title: 'Interior & Finishing',
    description: 'Plafon, lantai, cat, custom furniture—detail rapi, nyaman ditempati.',
    details: [
      'Desain dan eksekusi interior',
      'Pemasangan plafon dan partisi',
      'Furniture custom dan built-in',
      'Finishing cat dan wallpaper',
    ],
  },
  {
    id: 'drafter',
    icon: Ruler,
    title: 'Drafter & Gambar Teknik (CAD)',
    description: 'Gambar kerja 2D/3D, as-built, shop drawing, detail joinery & MEP dasar.',
    details: [
      'Gambar kerja arsitektur lengkap',
      'Shop drawing furniture dan joinery',
      'As-built drawing',
      'Detail struktur dan MEP',
      'Modeling 3D untuk presentasi',
    ],
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Perbaikan & Maintenance',
    description: 'Atap, dinding, kebocoran, instalasi—perbaikan cepat & rapi.',
    details: [
      'Perbaikan kebocoran atap',
      'Renovasi kecil dan perbaikan',
      'Maintenance rutin bangunan',
      'Perbaikan instalasi listrik dan plambing',
    ],
  },
];

export default function LayananPage() {
  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Kami</h1>
          <p className="text-lg text-muted-foreground">
            Solusi lengkap untuk kebutuhan renovasi, konstruksi, dan drafter teknik Anda
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} id={service.id} className="scroll-mt-20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      {/* ---- Fix 1: pakai service.title, bukan catalog.title ---- */}
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {catalogs.length > 0 && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Download Katalog</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {catalogs.map((catalog, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-primary" />
                      <CardTitle className="text-lg">{catalog.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href={`/media/${catalog.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Tertarik dengan layanan kami?
          </p>
          <Button size="lg" asChild>
            <Link href="/estimasi">Minta Estimasi Sekarang</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
