'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Format message untuk WhatsApp
      const message = `*Pesan dari Website PT SAN*\n\n` +
        `*Nama:* ${data.name}\n` +
        `*WhatsApp:* ${data.phone}\n` +
        `*Email:* ${data.email || '-'}\n\n` +
        `*Pesan:*\n${data.message}`;
      
      // Encode message untuk URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/6282210400051?text=${encodedMessage}`;
      
      // Redirect ke WhatsApp
      window.open(whatsappURL, '_blank');
      
      // Reset form dan tampilkan success message
      toast.success(t.contactForm.success);
      reset();
    } catch (error) {
      toast.error(t.contactForm.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">{t.contactForm.name} *</Label>
        <Input
          id="name"
          placeholder={t.contactForm.namePlaceholder}
          {...register('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">{t.contactForm.phone} *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder={t.contactForm.phonePlaceholder}
          {...register('phone')}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t.contactForm.email}</Label>
        <Input
          id="email"
          type="email"
          placeholder={t.contactForm.emailPlaceholder}
          {...register('email')}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.contactForm.message} *</Label>
        <Textarea
          id="message"
          placeholder={t.contactForm.messagePlaceholder}
          rows={5}
          {...register('message')}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t.contactForm.sending}
          </>
        ) : (
          t.contactForm.submit
        )}
      </Button>
    </form>
  );
}
