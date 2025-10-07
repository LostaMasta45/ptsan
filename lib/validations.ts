import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  phone: z.string().min(10, 'Nomor telepon tidak valid').regex(/^[0-9+\-() ]+$/, 'Nomor telepon tidak valid'),
  email: z.string().email('Email tidak valid').optional().or(z.literal('')),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
});

export const estimateFormSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  phone: z.string().min(10, 'Nomor telepon tidak valid').regex(/^[0-9+\-() ]+$/, 'Nomor telepon tidak valid'),
  email: z.string().email('Email tidak valid').optional().or(z.literal('')),
  location: z.string().min(3, 'Lokasi proyek harus diisi'),
  service: z.string().min(1, 'Pilih jenis layanan'),
  budget: z.string().min(1, 'Pilih estimasi budget'),
  description: z.string().min(20, 'Deskripsi minimal 20 karakter'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type EstimateFormData = z.infer<typeof estimateFormSchema>;
