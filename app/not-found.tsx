import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold">Halaman Tidak Ditemukan</h2>
          <p className="text-muted-foreground">
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau mungkin telah
            dipindahkan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button asChild variant="default" size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
            <button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Halaman Sebelumnya
            </button>
          </Button>
        </div>

        <div className="pt-8 space-y-2">
          <p className="text-sm text-muted-foreground">Halaman populer:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/layanan"
              className="text-sm text-primary hover:underline"
            >
              Layanan
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/portofolio"
              className="text-sm text-primary hover:underline"
            >
              Portofolio
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/estimasi"
              className="text-sm text-primary hover:underline"
            >
              Minta Estimasi
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/kontak"
              className="text-sm text-primary hover:underline"
            >
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
