'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/config/site';

export function FloatingCTA() {
  return (
    <a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">WhatsApp</span>
      </Button>
    </a>
  );
}
