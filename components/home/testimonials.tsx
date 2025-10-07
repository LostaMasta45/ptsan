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

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    location: 'Mojokerto',
    text: 'Renovasi rumah selesai tepat waktu, hasilnya melebihi ekspektasi!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ani Wijaya',
    location: 'Sidoarjo',
    text: 'Tim profesional, harga transparan, komunikasi lancar sepanjang proyek.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dedi Kurniawan',
    location: 'Surabaya',
    text: 'Gambar CAD-nya detail, membantu kami dapat izin dengan mudah.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Siti Rahayu',
    location: 'Jombang',
    text: 'Interior rumah jadi cantik dan nyaman, sesuai budget kami.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ahmad Fauzi',
    location: 'Mojokerto',
    text: 'Perbaikan atap bocor cepat dan rapi, garansinya juga jelas.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimoni Klien</h2>
          <p className="text-muted-foreground">
            Kepercayaan dan kepuasan klien adalah prioritas kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-1"
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
