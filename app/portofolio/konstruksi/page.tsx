'use client';

import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/config/site';

export default function KonstruksiPortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-primary/10 rounded-full">
              <Construction className="w-16 h-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Portfolio Konstruksi
          </h1>
          <p className="text-lg text-muted-foreground">
            Halaman portfolio konstruksi sedang dalam pengembangan.
            Segera hadir dengan showcase proyek-proyek konstruksi terbaik kami.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Tertarik dengan Proyek Konstruksi?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tim kami siap membantu proyek renovasi, pembangunan rumah, ruko, dan berbagai
            kebutuhan konstruksi Anda di {site.serviceAreas.join(', ')} dan sekitarnya.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                Konsultasi WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/portofolio">
                Lihat Before & After
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground">
            Sementara itu, Anda dapat melihat hasil Before & After proyek konstruksi kami
          </p>
        </motion.div>
      </div>
    </div>
  );
}
