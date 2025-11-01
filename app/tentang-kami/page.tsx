'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import { site } from '@/config/site';
import { Building2, Users, Award, Target } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export default function TentangKami() {
  const { t, language } = useLanguage();

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.site.brand}</h1>
            <p className="text-xl text-muted-foreground">{t.site.tagline}</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-lg">
              {t.about.intro}
            </p>

            <p>
              {t.about.origin}
            </p>

            <p>
              {t.about.focus}
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-12">
            <div className="flex gap-4 p-6 rounded-lg bg-slate-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.about.features.comprehensive.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.about.features.comprehensive.desc}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-slate-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.about.features.experienced.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.about.features.experienced.desc}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-slate-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.about.features.quality.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.about.features.quality.desc}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-slate-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.about.features.transparent.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.about.features.transparent.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/10">
            <h2 className="text-2xl font-bold mb-4">{t.about.serviceAreaTitle}</h2>
            <p className="mb-4">
              {language === 'id' ? 'Kami melayani proyek di' : 'We serve projects in'} <strong>{site.serviceAreas.join(', ')}</strong> {language === 'id' ? 'dan sekitarnya' : 'and surrounding areas'}.
            </p>
            <p className="text-sm text-muted-foreground">
              {t.about.serviceAreaDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
