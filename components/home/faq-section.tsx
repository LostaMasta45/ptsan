'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const topFaqs = [
  {
    question: 'Berapa lama waktu yang dibutuhkan untuk membuat RAB?',
    answer: 'Proses pembuatan RAB (Rencana Anggaran Biaya) biasanya memakan waktu 3-5 hari kerja setelah survey lokasi, tergantung kompleksitas proyek.',
  },
  {
    question: 'Apakah bisa menyesuaikan dengan budget yang saya miliki?',
    answer: 'Ya, kami dapat menyesuaikan spesifikasi dan material sesuai budget Anda tanpa mengurangi kualitas dan keamanan konstruksi.',
  },
  {
    question: 'Apakah melayani area di luar Mojokerto?',
    answer: 'Ya, kami melayani Mojokerto, Jombang, Sidoarjo, Surabaya dan sekitarnya. Untuk area lain, silakan hubungi kami untuk diskusi lebih lanjut.',
  },
  {
    question: 'Apakah layanan mencakup desain dan gambar kerja lengkap?',
    answer: 'Ya, kami menyediakan layanan desain arsitektur dan gambar kerja teknik (CAD) lengkap termasuk detail struktur, MEP dasar, dan shop drawing.',
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {topFaqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/faq">Lihat Semua Pertanyaan</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
