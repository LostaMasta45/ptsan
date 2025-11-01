'use client';

import { MessageCircle, Search, FileText, Hammer, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export default function ProsesKerjaPage() {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: t.process.steps.consultation.title,
      description: t.process.steps.consultation.description,
      details: t.process.steps.consultation.details,
    },
    {
      number: 2,
      icon: Search,
      title: t.process.steps.survey.title,
      description: t.process.steps.survey.description,
      details: t.process.steps.survey.details,
    },
    {
      number: 3,
      icon: FileText,
      title: t.process.steps.estimate.title,
      description: t.process.steps.estimate.description,
      details: t.process.steps.estimate.details,
    },
    {
      number: 4,
      icon: Hammer,
      title: t.process.steps.execution.title,
      description: t.process.steps.execution.description,
      details: t.process.steps.execution.details,
    },
    {
      number: 5,
      icon: CheckCircle,
      title: t.process.steps.handover.title,
      description: t.process.steps.handover.description,
      details: t.process.steps.handover.details,
    },
  ];

  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.processPage.title}</h1>
          <p className="text-lg text-muted-foreground">
            {t.processPage.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.number} className="relative">
                {!isLast && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
                )}
                
                <div className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1 pb-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 ml-16">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-lg bg-primary/5 border border-primary/10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{t.processPage.updateTitle}</h2>
          <p className="text-muted-foreground mb-6">
            {t.processPage.updateDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
