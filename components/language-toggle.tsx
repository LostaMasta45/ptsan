'use client';

import { useLanguage } from '@/lib/i18n/context';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="relative gap-2"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <div className="flex items-center gap-1">
        <motion.span
          className={`text-xs font-medium transition-colors ${
            language === 'id' ? 'text-primary' : 'text-muted-foreground'
          }`}
          animate={{ scale: language === 'id' ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          ID
        </motion.span>
        <span className="text-xs text-muted-foreground">|</span>
        <motion.span
          className={`text-xs font-medium transition-colors ${
            language === 'en' ? 'text-primary' : 'text-muted-foreground'
          }`}
          animate={{ scale: language === 'en' ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          EN
        </motion.span>
      </div>
    </Button>
  );
}
