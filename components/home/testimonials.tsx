'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useLanguage } from '@/lib/i18n/context';

export function Testimonials() {
  const { t } = useLanguage();
  
  const testimonials = t.testimonials.items.map((item, index) => ({
    id: index + 1,
    name: item.name,
    location: item.location,
    text: item.comment,
    project: item.project,
    rating: 5,
  }));
  
  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
          <p className="text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="h-full">
                      <CardContent className="p-6 space-y-4">
                        <Quote className="h-8 w-8 text-primary/20" />
                        <p className="text-sm leading-relaxed">{testimonial.text}</p>
                        <div>
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
