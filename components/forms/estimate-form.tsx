'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { estimateFormSchema, type EstimateFormData } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export function EstimateForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { value: 'renovasi', label: t.estimateForm.services.renovasi },
    { value: 'konstruksi', label: t.estimateForm.services.konstruksi },
    { value: 'interior', label: t.estimateForm.services.interior },
    { value: 'drafter', label: t.estimateForm.services.drafter },
    { value: 'perbaikan', label: t.estimateForm.services.perbaikan },
  ];

  const budgetRanges = [
    { value: 'under-50', label: t.estimateForm.budgetRanges['under-50'] },
    { value: '50-100', label: t.estimateForm.budgetRanges['50-100'] },
    { value: '100-250', label: t.estimateForm.budgetRanges['100-250'] },
    { value: '250-500', label: t.estimateForm.budgetRanges['250-500'] },
    { value: 'above-500', label: t.estimateForm.budgetRanges['above-500'] },
    { value: 'flexible', label: t.estimateForm.budgetRanges['flexible'] },
  ];
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<EstimateFormData>({
    resolver: zodResolver(estimateFormSchema),
  });

  const onSubmit = async (data: EstimateFormData) => {
    setIsSubmitting(true);
    
    try {
      // Cari label untuk service dan budget
      const serviceLabel = services.find(s => s.value === data.service)?.label || data.service;
      const budgetLabel = budgetRanges.find(b => b.value === data.budget)?.label || data.budget;
      
      // Format message untuk WhatsApp
      const message = `*Permintaan Estimasi dari Website PT SAN*\n\n` +
        `*Nama:* ${data.name}\n` +
        `*WhatsApp:* ${data.phone}\n` +
        `*Email:* ${data.email || '-'}\n` +
        `*Lokasi Proyek:* ${data.location}\n` +
        `*Jenis Layanan:* ${serviceLabel}\n` +
        `*Estimasi Budget:* ${budgetLabel}\n\n` +
        `*Deskripsi Proyek:*\n${data.description}`;
      
      // Encode message untuk URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/6282210400051?text=${encodedMessage}`;
      
      // Redirect ke WhatsApp
      window.open(whatsappURL, '_blank');
      
      // Reset form dan tampilkan success message
      toast.success(t.estimateForm.success);
      reset();
    } catch (error) {
      toast.error(t.estimateForm.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t.estimateForm.name} *</Label>
          <Input
            id="name"
            placeholder={t.estimateForm.namePlaceholder}
            {...register('name')}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{t.estimateForm.phone} *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder={t.estimateForm.phonePlaceholder}
            {...register('phone')}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">{t.estimateForm.email}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t.estimateForm.emailPlaceholder}
            {...register('email')}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">{t.estimateForm.location} *</Label>
          <Input
            id="location"
            placeholder={t.estimateForm.locationPlaceholder}
            {...register('location')}
            aria-invalid={!!errors.location}
          />
          {errors.location && (
            <p className="text-sm text-destructive">{errors.location.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="service">{t.estimateForm.projectType} *</Label>
          <Select onValueChange={(value) => setValue('service', value)}>
            <SelectTrigger id="service" aria-invalid={!!errors.service}>
              <SelectValue placeholder={t.estimateForm.projectTypePlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-sm text-destructive">{errors.service.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">{t.estimateForm.budget} *</Label>
          <Select onValueChange={(value) => setValue('budget', value)}>
            <SelectTrigger id="budget" aria-invalid={!!errors.budget}>
              <SelectValue placeholder={t.estimateForm.budgetPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.budget && (
            <p className="text-sm text-destructive">{errors.budget.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">{t.estimateForm.description} *</Label>
        <Textarea
          id="description"
          placeholder={t.estimateForm.descriptionPlaceholder}
          rows={6}
          {...register('description')}
          aria-invalid={!!errors.description}
        />
        {errors.description && (
          <p className="text-sm text-destructive">{errors.description.message}</p>
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
            {t.estimateForm.sending}
          </>
        ) : (
          t.estimateForm.submit
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        {t.estimateForm.responseTime}
      </p>
    </form>
  );
}
