'use client';

import Link from 'next/link';
import { Hammer, Building2, Paintbrush, Ruler, Wrench, FileText, Download } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { site } from '@/config/site';
import assetsManifest from '@/src/assets.manifest.json';
import { useLanguage } from '@/lib/i18n/context';

type CatalogItem = { title: string; file: string };
const catalogs: CatalogItem[] = (assetsManifest?.catalogs ?? []) as CatalogItem[];

export default function LayananPage() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'renovasi',
      icon: Hammer,
      title: t.services.renovation.title,
      description: t.services.renovation.description,
      details: t.servicesPage.details.renovation,
    },
    {
      id: 'konstruksi',
      icon: Building2,
      title: t.services.construction.title,
      description: t.services.construction.description,
      details: t.servicesPage.details.construction,
    },
    {
      id: 'interior',
      icon: Paintbrush,
      title: t.services.interior.title,
      description: t.services.interior.problem,
      details: t.servicesPage.details.interior,
    },
    {
      id: 'drafter',
      icon: Ruler,
      title: t.services.drafter.title,
      description: t.services.drafter.description,
      details: t.servicesPage.details.drafter,
    },
    {
      id: 'maintenance',
      icon: Wrench,
      title: t.services.maintenance.title,
      description: t.services.maintenance.problem,
      details: t.servicesPage.details.maintenance,
    },
  ];

  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.servicesPage.title}</h1>
          <p className="text-lg text-muted-foreground">
            {t.servicesPage.subtitle}
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
            <h2 className="text-2xl font-bold mb-6 text-center">{t.servicesPage.downloadCatalog}</h2>
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
                        {t.servicesPage.downloadPDF}
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
            {t.servicesPage.interested}
          </p>
          <Button size="lg" asChild>
            <Link href="/estimasi">{t.servicesPage.requestEstimate}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
