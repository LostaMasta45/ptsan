'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { site } from '@/config/site';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]" />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Siap Mulai Proyek di Mojokerto & Sekitarnya?
          </h2>
          <p className="text-lg opacity-90">
            Klik untuk konsultasi cepat bersama tim PT SAN.
          </p>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Button size="lg" variant="secondary" asChild className="text-base shadow-xl hover:scale-105 transition-transform">
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
