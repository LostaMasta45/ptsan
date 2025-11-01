'use client';

import Link from 'next/link';
import { Hammer, Building2, Paintbrush, Ruler, Wrench, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/context';

export function ServiceGrid() {
  const { t } = useLanguage();
  
  const services = [
    {
      id: 'renovasi',
      icon: Hammer,
      title: t.services.renovation.title,
      problem: t.services.renovation.problem,
      solution: t.services.renovation.solution,
      result: t.services.renovation.result,
    },
    {
      id: 'konstruksi',
      icon: Building2,
      title: t.services.construction.title,
      problem: t.services.construction.problem,
      solution: t.services.construction.solution,
      result: t.services.construction.result,
    },
    {
      id: 'interior',
      icon: Paintbrush,
      title: t.services.interior.title,
      problem: t.services.interior.problem,
      solution: t.services.interior.solution,
      result: t.services.interior.result,
    },
    {
      id: 'drafter',
      icon: Ruler,
      title: t.services.drafter.title,
      problem: t.services.drafter.problem,
      solution: t.services.drafter.solution,
      result: t.services.drafter.result,
    },
    {
      id: 'maintenance',
      icon: Wrench,
      title: t.services.maintenance.title,
      problem: t.services.maintenance.problem,
      solution: t.services.maintenance.solution,
      result: t.services.maintenance.result,
    },
  ];
  return (
    <section id="layanan" className="py-20 bg-slate-50">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-red-600 mb-1">❌ {t.services.problemLabel}</div>
                      <p className="text-sm text-muted-foreground">{service.problem}</p>
                    </div>
                    <div className="flex items-center justify-center py-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-accent mb-1">🔧 {t.services.solutionLabel}</div>
                      <p className="text-sm text-muted-foreground">{service.solution}</p>
                    </div>
                    <div className="flex items-center justify-center py-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-green-600 mb-1">✅ {t.services.resultLabel}</div>
                      <p className="text-sm font-medium">{service.result}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/layanan">{t.services.viewDetails}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
