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

const services = [
  { value: 'renovasi', label: 'Renovasi Rumah & Ruko' },
  { value: 'konstruksi', label: 'Konstruksi Bangunan' },
  { value: 'interior', label: 'Interior & Finishing' },
  { value: 'drafter', label: 'Drafter & Gambar Teknik (CAD)' },
  { value: 'perbaikan', label: 'Perbaikan & Maintenance' },
];

const budgetRanges = [
  { value: 'under-50', label: 'Di bawah 50 juta' },
  { value: '50-100', label: '50 - 100 juta' },
  { value: '100-250', label: '100 - 250 juta' },
  { value: '250-500', label: '250 - 500 juta' },
  { value: 'above-500', label: 'Di atas 500 juta' },
  { value: 'flexible', label: 'Fleksibel (diskusi)' },
];

export function EstimateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.message || 'Terjadi kesalahan. Silakan coba lagi.');
      }
    } catch (error) {
      toast.error('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap *</Label>
          <Input
            id="name"
            placeholder="Nama Anda"
            {...register('name')}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Nomor WhatsApp *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="08xxxxxxxxxx"
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
          <Label htmlFor="email">Email (Opsional)</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@example.com"
            {...register('email')}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Lokasi Proyek *</Label>
          <Input
            id="location"
            placeholder="Contoh: Mojokerto, Jawa Timur"
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
          <Label htmlFor="service">Jenis Layanan *</Label>
          <Select onValueChange={(value) => setValue('service', value)}>
            <SelectTrigger id="service" aria-invalid={!!errors.service}>
              <SelectValue placeholder="Pilih layanan" />
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
          <Label htmlFor="budget">Estimasi Budget *</Label>
          <Select onValueChange={(value) => setValue('budget', value)}>
            <SelectTrigger id="budget" aria-invalid={!!errors.budget}>
              <SelectValue placeholder="Pilih range budget" />
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
        <Label htmlFor="description">Deskripsi Proyek *</Label>
        <Textarea
          id="description"
          placeholder="Jelaskan detail proyek Anda: luas bangunan, kondisi saat ini, harapan hasil, timeline yang diinginkan, dll."
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
            Mengirim...
          </>
        ) : (
          'Kirim Permintaan Estimasi'
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        Tim kami akan menghubungi Anda dalam 1x24 jam
      </p>
    </form>
  );
}
