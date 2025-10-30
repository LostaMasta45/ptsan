export interface FurnitureItem {
  id: string;
  code: string;
  name: string;
  category: 'chair' | 'bench' | 'table' | 'stool' | 'lounge' | 'storage' | 'outdoor' | 'vanity' | 'bed' | 'wardrobe' | 'ottoman';
  renderImage: string;
  constructionImages: string[];
  description?: string;
  date: string;
}

export const furnitureItems: FurnitureItem[] = [
  {
    id: '1',
    code: '158-120',
    name: 'Coffee Table LV',
    category: 'table',
    renderImage: '/media/portfolio/furniture/BARU/158-120-COFFE-TABLE-LV_08-02-2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/158-120-COFFE-TABLE-LV_08-02-2025/Slide 2.jpg'
    ],
    description: 'Coffee table dengan desain LV yang elegan dan mewah',
    date: '08-02-2025'
  },
  {
    id: '2',
    code: '158-121',
    name: 'Coffee Table',
    category: 'table',
    renderImage: '/media/portfolio/furniture/BARU/158-121-COFFE-TABLE_20-02-2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/158-121-COFFE-TABLE_20-02-2025/Slide 2.jpg'
    ],
    description: 'Coffee table modern dengan finishing premium',
    date: '20-02-2025'
  },
  {
    id: '3',
    code: '158-130',
    name: 'Outdoor Table',
    category: 'outdoor',
    renderImage: '/media/portfolio/furniture/BARU/158-130-OUTDOOR-TABLE_05-02-2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/158-130-OUTDOOR-TABLE_05-02-2025/Slide 2.jpg'
    ],
    description: 'Meja outdoor tahan cuaca untuk taman dan teras',
    date: '05-02-2025'
  },
  {
    id: '4',
    code: '158-210',
    name: 'King Size Bed',
    category: 'bed',
    renderImage: '/media/portfolio/furniture/BARU/158-210-KING-SIZE-BED_15-02-2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/158-210-KING-SIZE-BED_15-02-2025/Slide 2.jpg'
    ],
    description: 'Tempat tidur king size dengan desain modern dan nyaman',
    date: '15-02-2025'
  },
  {
    id: '5',
    code: '158-710',
    name: 'Wastafel Table',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/158-710-WASTAFEL-TABLE_12-02-2025/158-710 WASTAFEL TABLE_Slide_1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/158-710-WASTAFEL-TABLE_12-02-2025/158-710 WASTAFEL TABLE_Slide_2.jpg'
    ],
    description: 'Meja wastafel custom dengan storage optimal',
    date: '12-02-2025'
  },
  {
    id: '6',
    code: '159-190',
    name: 'Sun Bed',
    category: 'bed',
    renderImage: '/media/portfolio/furniture/BARU/159-190-SUN-BED_18-02-2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/159-190-SUN-BED_18-02-2025/Slide 2.jpg'
    ],
    description: 'Sun bed untuk bersantai di outdoor dengan kenyamanan maksimal',
    date: '18-02-2025'
  },
  {
    id: '7',
    code: 'AD-WAVE-24-RS00',
    name: 'Wave Wardrobe 24"',
    category: 'wardrobe',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-24-RS00---02.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-24-RS00---02.09.2025/Slide 2.jpg'
    ],
    description: 'Lemari Wave 24 inch dengan desain gelombang modern',
    date: '02-09-2025'
  },
  {
    id: '8',
    code: 'AD-WAVE-30-RS00',
    name: 'Wave Wardrobe 30"',
    category: 'wardrobe',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-30-RS00---04.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-30-RS00---04.09.2025/Slide 2.jpg'
    ],
    description: 'Lemari Wave 30 inch dengan storage lebih luas',
    date: '04-09-2025'
  },
  {
    id: '9',
    code: 'AD-WAVE-36-RS00',
    name: 'Wave Wardrobe 36"',
    category: 'wardrobe',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-36-RS00---01.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-36-RS00---01.09.2025/Slide 2.jpg'
    ],
    description: 'Lemari Wave 36 inch dengan kapasitas optimal',
    date: '01-09-2025'
  },
  {
    id: '10',
    code: 'AD-WAVE-48D-RS00',
    name: 'Wave Wardrobe 48" Double',
    category: 'wardrobe',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-48D-RS00---05.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-48D-RS00---05.09.2025/Slide 2.jpg'
    ],
    description: 'Lemari Wave 48 inch double door dengan ruang penyimpanan maksimal',
    date: '05-09-2025'
  },
  {
    id: '11',
    code: 'AD-WAVE-48S-RS00',
    name: 'Wave Wardrobe 48" Single',
    category: 'wardrobe',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-48S-RS00---08.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-48S-RS00---08.09.2025/Slide 2.jpg'
    ],
    description: 'Lemari Wave 48 inch single door yang praktis',
    date: '08-09-2025'
  },
  {
    id: '12',
    code: 'AD-WAVE-60D-RS00',
    name: 'Wave Wardrobe 60" Double',
    category: 'wardrobe',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-60D-RS00---05.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-60D-RS00---05.09.2025/Slide 2.jpg'
    ],
    description: 'Lemari Wave 60 inch double door ukuran besar',
    date: '05-09-2025'
  },
  {
    id: '13',
    code: 'AD-WAVE-60S-RS00',
    name: 'Wave Wardrobe 60" Single',
    category: 'wardrobe',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-60S-RS00---11.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-60S-RS00---11.09.2025/Slide 2.jpg'
    ],
    description: 'Lemari Wave 60 inch single door untuk kamar luas',
    date: '11-09-2025'
  },
  {
    id: '14',
    code: 'AD-WAVE-72D-RS00',
    name: 'Wave Wardrobe 72" Double',
    category: 'wardrobe',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-72D-RS00---11.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-72D-RS00---11.09.2025/Slide 2.jpg'
    ],
    description: 'Lemari Wave 72 inch double door extra large',
    date: '11-09-2025'
  },
  {
    id: '15',
    code: 'AD-WAVE-72S-RS00',
    name: 'Wave Wardrobe 72" Single',
    category: 'wardrobe',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-72S-RS00---13.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-72S-RS00---13.09.2025/Slide 2.jpg'
    ],
    description: 'Lemari Wave 72 inch single door kapasitas besar',
    date: '13-09-2025'
  },
  {
    id: '16',
    code: 'AD-WAVE-80-RS00',
    name: 'Wave Wardrobe 80"',
    category: 'wardrobe',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-80-RS00---13.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-80-RS00---13.09.2025/Slide 2.jpg'
    ],
    description: 'Lemari Wave 80 inch terbesar dalam seri Wave',
    date: '13-09-2025'
  },
  {
    id: '17',
    code: 'CUPBOARD-01',
    name: 'Cupboard Classic',
    category: 'storage',
    renderImage: '/media/portfolio/furniture/BARU/Cupboard/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/Cupboard/Slide 2.jpg'
    ],
    description: 'Lemari penyimpanan klasik dengan desain timeless',
    date: '15-08-2025'
  },
  {
    id: '18',
    code: 'CUPBOARD-02',
    name: 'Cupboard Modern',
    category: 'storage',
    renderImage: '/media/portfolio/furniture/BARU/Cupboard-2/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/Cupboard-2/Slide 2.jpg'
    ],
    description: 'Lemari penyimpanan modern dengan finishing premium',
    date: '16-08-2025'
  },
  {
    id: '19',
    code: 'OTTOMAN-01',
    name: 'Ottoman',
    category: 'ottoman',
    renderImage: '/media/portfolio/furniture/BARU/Otoman/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/Otoman/Slide 2.jpg'
    ],
    description: 'Ottoman nyaman untuk ruang tamu atau kamar tidur',
    date: '20-08-2025'
  },
  {
    id: '20',
    code: 'SOFA-BED-01',
    name: 'Sofa Front Bed',
    category: 'bed',
    renderImage: '/media/portfolio/furniture/BARU/Sofa-front-bed/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/Sofa-front-bed/Slide 2.jpg'
    ],
    description: 'Sofa bed multifungsi dengan mekanisme front bed',
    date: '22-08-2025'
  },
  {
    id: '21',
    code: 'TV-TABLE-01',
    name: 'TV Table',
    category: 'table',
    renderImage: '/media/portfolio/furniture/BARU/TV Table/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/TV Table/Slide 2.jpg'
    ],
    description: 'Meja TV modern dengan storage untuk perangkat elektronik',
    date: '25-08-2025'
  },
  {
    id: '22',
    code: 'WARDROBE-01',
    name: 'Classic Wardrobe',
    category: 'wardrobe',
    renderImage: '/media/portfolio/furniture/BARU/Wardrobe/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/Wardrobe/Slide 2.jpg'
    ],
    description: 'Lemari pakaian klasik dengan desain elegant',
    date: '28-08-2025'
  }
];

export const furnitureCategories = [
  { value: 'all', label: 'Semua Kategori' },
  { value: 'table', label: 'Meja' },
  { value: 'bed', label: 'Tempat Tidur' },
  { value: 'wardrobe', label: 'Lemari Pakaian' },
  { value: 'storage', label: 'Storage' },
  { value: 'ottoman', label: 'Ottoman' },
  { value: 'outdoor', label: 'Outdoor' },
  { value: 'vanity', label: 'Vanity' },
  { value: 'chair', label: 'Kursi' },
  { value: 'bench', label: 'Bench' },
  { value: 'stool', label: 'Stool' },
  { value: 'lounge', label: 'Lounge' },
] as const;
