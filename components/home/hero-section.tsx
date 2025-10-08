'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calculator, CheckCircle2, MapPin, Shield } from 'lucide-react';
import { site } from '@/config/site';
import { motion } from 'framer-motion';
import { BeforeAfterSlider } from '@/components/portfolio/before-after-slider';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/70 to-accent/80 opacity-5 pointer-events-none" />
      
      {/* Top Info Strip */}
      <div className="relative bg-primary text-primary-foreground py-2">
        <div className="container px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Gratis Survey</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Area Jawa Timur & Seluruh Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Garansi s/d 12 bln</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Renovasi & Kontruksi Tanpa Drama, <span className="text-accent">Hasil Berkualitas , Kuat & Terpercaya</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Desain, gambar kerja (CAD), hingga eksekusi—tepat waktu, transparan, profesional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" asChild className="text-base">
                <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Konsultasi WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/estimasi">
                  <Calculator className="mr-2 h-5 w-5" />
                  Minta Estimasi
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <BeforeAfterSlider
              beforeImage="/before-after/3_before.png"
              afterImage="/before-after/3_after.png"
              title="Contoh Transformasi Proyek Kami"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
