import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';
import { site } from '@/config/site';
import assetsManifest from '@/src/assets.manifest.json';

export function SiteFooter() {
  const mainLogo = assetsManifest.logos[0];

  return (
    <footer className="border-t bg-slate-50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            {mainLogo && (
              <Image
                src={`/media/${mainLogo}`}
                alt={site.short}
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            )}
            <p className="text-sm text-muted-foreground">
              {site.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {assetsManifest.partners.slice(0, 6).map((logo, idx) => (
                <Image
                  key={idx}
                  src={`/media/${logo}`}
                  alt="Partner"
                  width={60}
                  height={30}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tentang-kami" className="text-muted-foreground hover:text-primary">Tentang Kami</Link></li>
              <li><Link href="/layanan" className="text-muted-foreground hover:text-primary">Layanan</Link></li>
              <li><Link href="/portofolio" className="text-muted-foreground hover:text-primary">Portofolio</Link></li>
              <li><Link href="/proses-kerja" className="text-muted-foreground hover:text-primary">Proses Kerja</Link></li>
              <li><Link href="/testimoni" className="text-muted-foreground hover:text-primary">Testimoni</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/layanan#renovasi" className="text-muted-foreground hover:text-primary">Renovasi</Link></li>
              <li><Link href="/layanan#konstruksi" className="text-muted-foreground hover:text-primary">Konstruksi</Link></li>
              <li><Link href="/layanan#interior" className="text-muted-foreground hover:text-primary">Interior</Link></li>
              <li><Link href="/layanan#drafter" className="text-muted-foreground hover:text-primary">Drafter CAD</Link></li>
              <li><Link href="/layanan#maintenance" className="text-muted-foreground hover:text-primary">Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span className="text-muted-foreground">{site.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/kebijakan-privasi" className="hover:text-primary">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:text-primary">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
