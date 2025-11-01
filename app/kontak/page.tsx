'use client';

import { site } from '@/config/site';
import { ContactForm } from '@/components/forms/contact-form';
import { MapPin, Phone, Mail, Clock, Briefcase } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export default function KontakPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{t.contactPage.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contactPage.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-6">{t.contactPage.sendMessage}</h2>
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg border p-6 space-y-6">
              <h2 className="text-xl font-semibold">{t.contactPage.contactInfo}</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">{t.contactPage.officeAddress}</p>
                    <p className="text-sm text-muted-foreground">
                      {site.address}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.contactPage.servingAreas}: {site.serviceAreas.join(', ')} {t.contactPage.andSurrounding}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">{t.contactPage.whatsapp}</p>
                    <a
                      href={site.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {t.contactPage.clickToChat}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">{t.contactPage.email}</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-green-600/10 flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">{t.contactPage.fiverr}</p>
                    <a
                      href={site.fiverrLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:underline inline-flex items-center gap-1"
                    >
                      {t.contactPage.clickToOrderFiverr}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">{t.contactPage.operatingHours}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.contactPage.monday}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.contactPage.saturday}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.contactPage.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294.0153853818094!2d112.41549789992071!3d-7.489114900071238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7813e388b91e65%3A0xca0f0ce4a7d54d05!2sJl.%20Suromulang%20Selatan%20X%20No.4!5e0!3m2!1sid!2sid!4v1761634561021!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PT SAN"
              />
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">{t.contactPage.fasterResponse}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contactPage.fasterResponseDesc}
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
