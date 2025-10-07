export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  rating: number;
  comment: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Andi Wijaya',
    location: 'Mojokerto',
    project: 'Renovasi Rumah',
    rating: 5,
    comment: 'RAB jelas, progres on schedule, hasil rapi. Tim PT SAN sangat profesional dan komunikatif. Highly recommended!',
  },
  {
    id: '2',
    name: 'Rina Susanti',
    location: 'Jombang',
    project: 'Kontraktor Ruko',
    rating: 5,
    comment: 'Drafter CAD cepat & akurat, memudahkan tim lapangan. Gambar kerja detail dan mudah dipahami, sangat membantu eksekusi proyek.',
  },
  {
    id: '3',
    name: 'Budi Santoso',
    location: 'Sidoarjo',
    project: 'Pembangunan Rumah',
    rating: 5,
    comment: 'Dari konsultasi hingga serah terima, semuanya profesional. Material berkualitas dan finishing rapi. Tepat waktu sesuai kontrak!',
  },
  {
    id: '4',
    name: 'Dewi Kartika',
    location: 'Surabaya',
    project: 'Renovasi Interior',
    rating: 5,
    comment: 'Desain interior yang direkomendasikan sangat sesuai dengan kebutuhan dan budget kami. Hasilnya melebihi ekspektasi!',
  },
  {
    id: '5',
    name: 'Hendra Gunawan',
    location: 'Mojokerto',
    project: 'Perbaikan Atap & Cat',
    rating: 5,
    comment: 'Pelayanan cepat tanggap untuk perbaikan kebocoran atap. Masalah selesai tuntas dengan garansi yang jelas.',
  },
  {
    id: '6',
    name: 'Siti Aminah',
    location: 'Jombang',
    project: 'Gambar Teknik CAD',
    rating: 5,
    comment: 'Butuh gambar kerja rumah untuk IMB, PT SAN bantu proses dengan cepat dan lengkap. Terima kasih!',
  },
];
