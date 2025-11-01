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
      className="relative gap-2 hover:bg-primary/10 transition-all duration-200"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4 text-primary" />
      <div className="flex items-center gap-1">
        <motion.span
          className={`text-xs font-bold transition-all duration-200 ${
            language === 'id' 
              ? 'text-primary scale-110' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          animate={{ scale: language === 'id' ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          ID
        </motion.span>
        <span className="text-xs text-muted-foreground font-medium">|</span>
        <motion.span
          className={`text-xs font-bold transition-all duration-200 ${
            language === 'en' 
              ? 'text-primary scale-110' 
              : 'text-muted-foreground hover:text-foreground'
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
