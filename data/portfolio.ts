export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  category: 'rumah' | 'ruko' | 'renovasi' | 'interior' | 'drafter';
  scope: string;
  duration: string;
  image: string;
  description?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Renovasi Rumah Minimalis Modern',
    location: 'Mojokerto',
    category: 'renovasi',
    scope: 'Renovasi total eksterior & interior',
    duration: '3 bulan',
    image: '/media/placeholder/portfolio-1.jpg',
    description: 'Transformasi rumah tipe 45 menjadi hunian modern minimalis dengan penambahan 1 kamar dan carport.'
  },
  {
    id: '2',
    title: 'Pembangunan Ruko 3 Lantai',
    location: 'Jombang',
    category: 'ruko',
    scope: 'Konstruksi dari pondasi hingga finishing',
    duration: '6 bulan',
    image: '/media/placeholder/portfolio-2.jpg',
    description: 'Ruko strategis di pinggir jalan utama dengan desain modern dan struktur yang kuat.'
  },
  {
    id: '3',
    title: 'Desain Interior Ruang Tamu Klasik',
    location: 'Sidoarjo',
    category: 'interior',
    scope: 'Desain & eksekusi interior full furnish',
    duration: '1.5 bulan',
    image: '/media/placeholder/portfolio-3.jpg',
    description: 'Interior klasik elegan dengan custom furniture dan detail ornamen berkualitas tinggi.'
  },
  {
    id: '4',
    title: 'Gambar Kerja Rumah 2 Lantai',
    location: 'Surabaya',
    category: 'drafter',
    scope: 'Gambar arsitektur, struktur & MEP',
    duration: '2 minggu',
    image: '/media/placeholder/portfolio-4.jpg',
    description: 'Set lengkap gambar kerja CAD untuk rumah 2 lantai termasuk detail konstruksi dan shop drawing.'
  },
  {
    id: '5',
    title: 'Renovasi Kamar Mandi Premium',
    location: 'Mojokerto',
    category: 'renovasi',
    scope: 'Renovasi total 2 kamar mandi',
    duration: '3 minggu',
    image: '/media/placeholder/portfolio-5.jpg',
    description: 'Upgrade kamar mandi dengan sanitary berkualitas dan waterproofing profesional.'
  },
  {
    id: '6',
    title: 'Konstruksi Rumah Tinggal Type 70',
    location: 'Mojokerto',
    category: 'rumah',
    scope: 'Pembangunan dari pondasi hingga siap huni',
    duration: '5 bulan',
    image: '/media/placeholder/portfolio-6.jpg',
    description: 'Rumah modern dengan 3 kamar tidur, struktur kuat dan finishing berkualitas.'
  },
];

export const categories = [
  { value: 'all', label: 'Semua Proyek' },
  { value: 'rumah', label: 'Rumah' },
  { value: 'ruko', label: 'Ruko/Komersial' },
  { value: 'renovasi', label: 'Renovasi' },
  { value: 'interior', label: 'Interior' },
  { value: 'drafter', label: 'Drafter/CAD' },
] as const;
