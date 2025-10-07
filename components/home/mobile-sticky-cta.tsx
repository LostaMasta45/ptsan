'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Calculator } from 'lucide-react';
import { site } from '@/config/site';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function MobileStickyCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg md:hidden"
    >
      <div className="container px-4 py-3">
        <div className="flex gap-2">
          <Button variant="default" asChild className="flex-1">
            <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link href="/estimasi">
              <Calculator className="mr-2 h-4 w-4" />
              Estimasi
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
