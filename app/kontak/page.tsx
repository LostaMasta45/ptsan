import { Metadata } from 'next';
import { site } from '@/config/site';
import { ContactForm } from '@/components/forms/contact-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: `Hubungi ${site.brand} untuk konsultasi proyek renovasi, konstruksi, dan jasa drafter. Kantor di ${site.baseCity}, melayani ${site.serviceAreas.join(', ')}.`,
  keywords: `kontak ${site.brand}, alamat kantor Mojokerto, nomor telepon kontraktor, konsultasi renovasi`,
};

export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Hubungi Kami</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Punya pertanyaan atau ingin memulai proyek? Kami siap membantu Anda.
            Hubungi kami melalui form atau kontak langsung di bawah.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-6">Kirim Pesan</h2>
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg border p-6 space-y-6">
              <h2 className="text-xl font-semibold">Informasi Kontak</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">Alamat Kantor</p>
                    <p className="text-sm text-muted-foreground">
                      {site.address}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Melayani: {site.serviceAreas.join(', ')} dan sekitarnya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href={site.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Klik untuk chat via WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">Jam Operasional</p>
                    <p className="text-sm text-muted-foreground">
                      Senin - Jumat: 08:00 - 17:00 WIB
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sabtu: 08:00 - 14:00 WIB
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Minggu & Libur: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.24455315494!2d112.36806494863278!3d-7.554726199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1ee4b8e6c1b%3A0x401e8f1fc28b4b0!2sMojokerto%2C%20Mojokerto%20City%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
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
          <h2 className="text-2xl font-bold">Butuh Respon Lebih Cepat?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chat langsung via WhatsApp untuk konsultasi instan dan jadwalkan
            survey lokasi gratis.
          </p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-green-600 text-white px-6 py-3 text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
