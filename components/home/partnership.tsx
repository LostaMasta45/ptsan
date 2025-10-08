'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import assetsManifest from '@/src/assets.manifest.json';

const partnerNames = [
  "Charter.png",
  "INDOCASA-LOGO-BLACK-WITH-TAGLINE.png",
  "Indocasa.jpeg",
  "Inkase.jpg",
  "Interior Tonic.jpg",
  "Logo Putera Teknik.png",
  "Mortar Utama.png",
  "Renova.jpg",
  "Tata Bersama.png"
];

const partners = partnerNames.map(fileName => ({
  name: fileName.replace(/\.(png|jpg|jpeg)$/i, '').replace(/-/g, ' '),
  logoSrc: `/media/logos/${fileName}`
}));

export function Partnership() {
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
            Dipercayai oleh Brand & Supplier
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Kerja sama pemasok & mitra memastikan material tepat dan hasil konsisten.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative flex items-center justify-center w-full h-20"
              aria-label={`Partner: ${partner.name}`}
              title={partner.name}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.logoSrc}
                  alt={partner.name}
                  width={120}
                  height={48}
                  className="h-10 w-auto max-w-full object-contain opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground mt-8">
          Logo di atas adalah milik masing-masing pemilik merek.
        </p>
      </div>
    </section>
  );
}
