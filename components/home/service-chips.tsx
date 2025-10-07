'use client';

import { Hammer, Building2, Paintbrush, Ruler, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { id: 'renovasi', label: 'Renovasi', icon: Hammer },
  { id: 'konstruksi', label: 'Konstruksi', icon: Building2 },
  { id: 'interior', label: 'Interior', icon: Paintbrush },
  { id: 'drafter', label: 'Drafter', icon: Ruler },
  { id: 'maintenance', label: 'Maintenance', icon: Wrench },
];

export function ServiceChips() {
  const scrollToServices = () => {
    const element = document.getElementById('layanan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 bg-white border-b">
      <div className="container px-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                <Icon className="h-4 w-4" />
                {service.label}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
