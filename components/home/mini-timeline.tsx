'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Search, FileText, Hammer, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';

export function MiniTimeline() {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: t.process.steps.consultation.title,
      description: t.process.steps.consultation.description.split('.')[0],
    },
    {
      number: 2,
      icon: Search,
      title: t.process.steps.survey.title,
      description: t.process.steps.survey.description.split('.')[0],
    },
    {
      number: 3,
      icon: FileText,
      title: t.process.steps.estimate.title,
      description: t.process.steps.estimate.description.split('.')[0],
    },
    {
      number: 4,
      icon: Hammer,
      title: t.process.steps.execution.title,
      description: t.process.steps.execution.description.split('.')[0],
    },
    {
      number: 5,
      icon: CheckCircle,
      title: t.process.steps.handover.title,
      description: t.process.steps.handover.description.split('.')[0],
    },
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.process.title}</h2>
          <p className="text-muted-foreground">
            {t.process.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                    {step.number}
                  </div>
                  
                  {/* Step Circle */}
                  <div className="relative z-10 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 border-4 border-white shadow-lg">
                    <Icon className="h-9 w-9 text-primary" />
                    
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-full w-[calc(100%+1.5rem)] h-0.5 bg-primary/20" />
                    )}
                  </div>

                  {/* Step Info */}
                  <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/proses-kerja">{t.common.learnMore}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
