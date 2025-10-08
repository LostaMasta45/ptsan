'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Award, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 2000;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, isInView]);

  return (
    <div ref={ref} className="font-bold text-3xl md:text-4xl">
      {count}
      {suffix}
    </div>
  );
}

export function TrustBar() {
  const placeholderLogos = [
    { name: 'Partner 1', width: 100 },
    { name: 'Partner 2', width: 100 },
    { name: 'Partner 3', width: 100 },
    { name: 'Partner 4', width: 100 },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <CountUp end={10} suffix="+" />
            <div className="text-sm text-muted-foreground mt-2">Tahun Pengalaman</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <CountUp end={300} suffix="+" />
            <div className="text-sm text-muted-foreground mt-2">Proyek Selesai</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="font-bold text-3xl md:text-4xl">Garansi</div>
            <div className="text-sm text-muted-foreground mt-2">12 Bulan</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
