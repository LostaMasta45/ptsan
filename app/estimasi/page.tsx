'use client';

import { site } from '@/config/site';
import { EstimateForm } from '@/components/forms/estimate-form';
import { CheckCircle2, Clock, FileText, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export default function EstimasiPage() {
  const { t } = useLanguage();

  const icons = [MessageSquare, FileText, Clock, CheckCircle2];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            {t.estimatePage.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.estimatePage.subtitle}
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {t.estimatePage.features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 space-y-2"
            >
              <div className="p-3 rounded-full bg-primary/10">
                {(() => {
                  const Icon = icons[index];
                  return <Icon className="h-6 w-6 text-primary" />;
                })()}
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
          <h2 className="font-semibold text-lg">{t.estimatePage.whatYouGet}</h2>
          <ul className="space-y-3">
            {t.estimatePage.benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center space-y-4 pt-6">
          <p className="text-sm text-muted-foreground">
            {t.estimatePage.orContact}
          </p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-green-600 text-white px-6 py-3 text-sm font-medium hover:bg-green-700 transition-colors"
          >
            {t.contactPage.chatWhatsappNow}
          </a>
        </div>
      </div>
    </div>
  );
}
