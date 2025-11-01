'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';
import { site } from '@/config/site';
import assetsManifest from '@/src/assets.manifest.json';
import { mediaSrc } from '@/lib/media';
import { useLanguage } from '@/lib/i18n/context';

type LogoItem = { file: string; title?: string };

export function SiteFooter() {
  const { t } = useLanguage();
  const mainLogo = (assetsManifest.logos as LogoItem[])[0];

  return (
    <footer className="border-t bg-slate-50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/media/logos/logo-san-colored.jpg"
              alt={site.brand}
              width={160}
              height={60}
              className="h-12 w-auto"
              priority
            />
            <p className="text-sm text-muted-foreground">
              {t.footer.aboutDescription}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tentang-kami" className="text-muted-foreground hover:text-primary">{t.nav.aboutUs}</Link></li>
              <li><Link href="/layanan" className="text-muted-foreground hover:text-primary">{t.nav.services}</Link></li>
              <li><Link href="/portofolio" className="text-muted-foreground hover:text-primary">{t.nav.portfolio}</Link></li>
              <li><Link href="/proses-kerja" className="text-muted-foreground hover:text-primary">{t.nav.process}</Link></li>
              <li><Link href="/testimoni" className="text-muted-foreground hover:text-primary">{t.nav.testimonials}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/layanan#renovasi" className="text-muted-foreground hover:text-primary">{t.serviceChips.renovation}</Link></li>
              <li><Link href="/layanan#konstruksi" className="text-muted-foreground hover:text-primary">{t.serviceChips.construction}</Link></li>
              <li><Link href="/layanan#interior" className="text-muted-foreground hover:text-primary">{t.serviceChips.interior}</Link></li>
              <li><Link href="/layanan#drafter" className="text-muted-foreground hover:text-primary">{t.serviceChips.drafter}</Link></li>
              <li><Link href="/layanan#maintenance" className="text-muted-foreground hover:text-primary">{t.serviceChips.maintenance}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span className="text-muted-foreground">{site.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-primary break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a 
                  href={site.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {site.brand}. {t.footer.allRightsReserved}.</p>
          <div className="flex gap-4">
            <Link href="/kebijakan-privasi" className="hover:text-primary">{t.footer.privacyPolicy}</Link>
            <Link href="/syarat-ketentuan" className="hover:text-primary">{t.footer.termsConditions}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
