'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import assetsManifest from '@/src/assets.manifest.json';
import { useLanguage } from '@/lib/i18n/context';

const partnerNames = [
  "Interior Tonic.png",
  "PT. Cipta Mortar Utama.png",
  "PT. Indocasa Furniture.png",
  "PT. Inkase.png",
  "PT. Integra Indocabinet.png",
  "PT. JSR Jaya Indonesia.png",
  "PT. Putera Teknik Solusi.png",
  "PT. Sepatu Pratama Indonesia.png",
  "PT. Tata Bersama.png",
  "Renova.png"
];

const partners = partnerNames.map(fileName => ({
  name: fileName.replace(/\.(png|jpg|jpeg)$/i, '').replace(/-/g, ' '),
  logoSrc: `/media/logos/partners/${fileName}`
}));

export function Partnership() {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.partnership.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {t.partnership.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 items-center justify-items-center max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative flex items-center justify-center w-full h-24"
              aria-label={`Partner: ${partner.name}`}
              title={partner.name}
            >
              <div className="relative w-full h-full flex items-center justify-center px-2">
                <Image
                  src={partner.logoSrc}
                  alt={partner.name}
                  width={280}
                  height={112}
                  className="h-28 w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground mt-8">
          {language === 'id' 
            ? 'Logo di atas adalah milik masing-masing pemilik merek.'
            : 'The logos above are the property of their respective owners.'}
        </p>
      </div>
    </section>
  );
}
