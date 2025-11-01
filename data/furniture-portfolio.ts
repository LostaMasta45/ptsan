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
  // NEW Folder Items - Latest Projects (Renderan di awal)
  {
    id: 'new-1',
    code: '0308-40',
    name: 'Vanity',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/NEW/0308-40-vanity_14-07-2025/0308-40 vanity_14-07-2025_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/0308-40-vanity_14-07-2025/0308-40 vanity_14-07-2025_page-0002.jpg',
      '/media/portfolio/furniture/NEW/0308-40-vanity_14-07-2025/0308-40 vanity_14-07-2025_page-0003.jpg',
      '/media/portfolio/furniture/NEW/0308-40-vanity_14-07-2025/0308-40 vanity_14-07-2025_page-0004.jpg',
    ],
    description: 'Custom vanity dengan desain modern dan fungsional',
    date: '14-07-2025'
  },
  {
    id: 'new-2',
    code: 'NEO 01-0103-260',
    name: 'Langford Lounge Chair',
    category: 'lounge',
    renderImage: '/media/portfolio/furniture/NEW/NEO 01-0103-260 - Langford Lounge Chair/NEO 01-0103-260 - Langford Lounge Chair_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO 01-0103-260 - Langford Lounge Chair/NEO 01-0103-260 - Langford Lounge Chair_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO 01-0103-260 - Langford Lounge Chair/NEO 01-0103-260 - Langford Lounge Chair_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO 01-0103-260 - Langford Lounge Chair/NEO 01-0103-260 - Langford Lounge Chair_page-0004.jpg',
    ],
    description: 'Langford lounge chair dengan kenyamanan maksimal',
    date: '28-07-2025'
  },
  {
    id: 'new-3',
    code: 'NEO 01-0105-77',
    name: 'Bed Boucle Bench',
    category: 'bench',
    renderImage: '/media/portfolio/furniture/NEW/NEO 01-0105-77 - BED BOUCLE BENCH/NEO 01-0105-77 - BED BOUCLE BENCH_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO 01-0105-77 - BED BOUCLE BENCH/NEO 01-0105-77 - BED BOUCLE BENCH_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO 01-0105-77 - BED BOUCLE BENCH/NEO 01-0105-77 - BED BOUCLE BENCH_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO 01-0105-77 - BED BOUCLE BENCH/NEO 01-0105-77 - BED BOUCLE BENCH_page-0004.jpg',
      '/media/portfolio/furniture/NEW/NEO 01-0105-77 - BED BOUCLE BENCH/NEO 01-0105-77 - BED BOUCLE BENCH_page-0005.jpg',
    ],
    description: 'Bed bench dengan fabric boucle yang mewah',
    date: '25-07-2025'
  },
  {
    id: 'new-4',
    code: 'NEO-01-01-01-232',
    name: 'Alberto Dining Chair',
    category: 'chair',
    renderImage: '/media/portfolio/furniture/NEW/NEO-01-01-01-232-ALBERTO-DINING-CHAIR_25-07-2025/NEO-01-01-01-232 ALBERTO DINING CHAIR_25-07-2025_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-01-01-01-232-ALBERTO-DINING-CHAIR_25-07-2025/NEO-01-01-01-232 ALBERTO DINING CHAIR_25-07-2025_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-01-01-232-ALBERTO-DINING-CHAIR_25-07-2025/NEO-01-01-01-232 ALBERTO DINING CHAIR_25-07-2025_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-01-01-232-ALBERTO-DINING-CHAIR_25-07-2025/NEO-01-01-01-232 ALBERTO DINING CHAIR_25-07-2025_page-0004.jpg',
    ],
    description: 'Alberto dining chair dengan desain elegan',
    date: '25-07-2025'
  },
  {
    id: 'new-5',
    code: 'NEO 01-0101-236',
    name: 'The Roadie Rustic Teak Dining Chair',
    category: 'chair',
    renderImage: '/media/portfolio/furniture/NEW/NEO-01-0101-236---The-Roadie-Rustic-Teak-Dining-Chair---29-07-2025/NEO 01-0101-236 - The Roadie Rustic Teak Dining Chair - 29-07-2025_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-01-0101-236---The-Roadie-Rustic-Teak-Dining-Chair---29-07-2025/NEO 01-0101-236 - The Roadie Rustic Teak Dining Chair - 29-07-2025_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0101-236---The-Roadie-Rustic-Teak-Dining-Chair---29-07-2025/NEO 01-0101-236 - The Roadie Rustic Teak Dining Chair - 29-07-2025_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0101-236---The-Roadie-Rustic-Teak-Dining-Chair---29-07-2025/NEO 01-0101-236 - The Roadie Rustic Teak Dining Chair - 29-07-2025_page-0004.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0101-236---The-Roadie-Rustic-Teak-Dining-Chair---29-07-2025/NEO 01-0101-236 - The Roadie Rustic Teak Dining Chair - 29-07-2025_page-0005.jpg',
    ],
    description: 'Rustic teak dining chair dengan gaya natural',
    date: '29-07-2025'
  },
  {
    id: 'new-6',
    code: 'NEO-01-0101-237',
    name: 'Boderie Amish Chair',
    category: 'chair',
    renderImage: '/media/portfolio/furniture/NEW/NEO-01-0101-237-BODERIE-AMISH_26-07-2025/NEO-01-0101-237 BODERIE AMISH_26-07-2025_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-01-0101-237-BODERIE-AMISH_26-07-2025/NEO-01-0101-237 BODERIE AMISH_26-07-2025_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0101-237-BODERIE-AMISH_26-07-2025/NEO-01-0101-237 BODERIE AMISH_26-07-2025_page-0003.jpg',
    ],
    description: 'Boderie Amish chair dengan detail embroidery',
    date: '26-07-2025'
  },
  {
    id: 'new-7',
    code: 'NEO-01-0102-42',
    name: 'Jean-Luc Teak Al Aire Libre',
    category: 'outdoor',
    renderImage: '/media/portfolio/furniture/NEW/NEO-01-0102-42-JEAN-LUC-TEAK-AL-AIRE-LIBRE_15-07-2025/NEO-01-0102-42 JEAN-LUC TEAK AL AIRE LIBRE_15-07-2025_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-01-0102-42-JEAN-LUC-TEAK-AL-AIRE-LIBRE_15-07-2025/NEO-01-0102-42 JEAN-LUC TEAK AL AIRE LIBRE_15-07-2025_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0102-42-JEAN-LUC-TEAK-AL-AIRE-LIBRE_15-07-2025/NEO-01-0102-42 JEAN-LUC TEAK AL AIRE LIBRE_15-07-2025_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0102-42-JEAN-LUC-TEAK-AL-AIRE-LIBRE_15-07-2025/NEO-01-0102-42 JEAN-LUC TEAK AL AIRE LIBRE_15-07-2025_page-0004.jpg',
    ],
    description: 'Outdoor furniture teak untuk area terbuka',
    date: '15-07-2025'
  },
  {
    id: 'new-8',
    code: 'NEO 01-0103-245',
    name: 'Honfleur Seagrass Swivel Lounge Chair',
    category: 'lounge',
    renderImage: '/media/portfolio/furniture/NEW/NEO-01-0103-245---Honfleur-Seagrass-Swivel-Lounge-Chair---28-07-2025/NEO 01-0103-245 - Honfleur Seagrass Swivel Lounge Chair - 28-07-2025_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-01-0103-245---Honfleur-Seagrass-Swivel-Lounge-Chair---28-07-2025/NEO 01-0103-245 - Honfleur Seagrass Swivel Lounge Chair - 28-07-2025_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0103-245---Honfleur-Seagrass-Swivel-Lounge-Chair---28-07-2025/NEO 01-0103-245 - Honfleur Seagrass Swivel Lounge Chair - 28-07-2025_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0103-245---Honfleur-Seagrass-Swivel-Lounge-Chair---28-07-2025/NEO 01-0103-245 - Honfleur Seagrass Swivel Lounge Chair - 28-07-2025_page-0004.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0103-245---Honfleur-Seagrass-Swivel-Lounge-Chair---28-07-2025/NEO 01-0103-245 - Honfleur Seagrass Swivel Lounge Chair - 28-07-2025_page-0005.jpg',
    ],
    description: 'Swivel lounge chair dengan material seagrass natural',
    date: '28-07-2025'
  },
  {
    id: 'new-9',
    code: 'NEO 01-0103-246',
    name: 'Chevron Arm Chair',
    category: 'chair',
    renderImage: '/media/portfolio/furniture/NEW/NEO-01-0103-246---CHEVRON-ARM-CHAIR_Revision-1/NEO 01-0103-246 - CHEVRON ARM CHAIR_Revision 1_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-01-0103-246---CHEVRON-ARM-CHAIR_Revision-1/NEO 01-0103-246 - CHEVRON ARM CHAIR_Revision 1_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0103-246---CHEVRON-ARM-CHAIR_Revision-1/NEO 01-0103-246 - CHEVRON ARM CHAIR_Revision 1_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0103-246---CHEVRON-ARM-CHAIR_Revision-1/NEO 01-0103-246 - CHEVRON ARM CHAIR_Revision 1_page-0004.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0103-246---CHEVRON-ARM-CHAIR_Revision-1/NEO 01-0103-246 - CHEVRON ARM CHAIR_Revision 1_page-0005.jpg',
    ],
    description: 'Arm chair dengan pattern chevron yang stylish',
    date: '30-07-2025'
  },
  {
    id: 'new-10',
    code: 'NEO 01-0105-81',
    name: 'Long Bench with Storage',
    category: 'bench',
    renderImage: '/media/portfolio/furniture/NEW/NEO-01-0105-81---LONG-BENCH-WITH-STORAGE-Revision-2/NEO 01-0105-81 - LONG BENCH WITH STORAGE (Revision 2)_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-01-0105-81---LONG-BENCH-WITH-STORAGE-Revision-2/NEO 01-0105-81 - LONG BENCH WITH STORAGE (Revision 2)_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0105-81---LONG-BENCH-WITH-STORAGE-Revision-2/NEO 01-0105-81 - LONG BENCH WITH STORAGE (Revision 2)_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0105-81---LONG-BENCH-WITH-STORAGE-Revision-2/NEO 01-0105-81 - LONG BENCH WITH STORAGE (Revision 2)_page-0004.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0105-81---LONG-BENCH-WITH-STORAGE-Revision-2/NEO 01-0105-81 - LONG BENCH WITH STORAGE (Revision 2)_page-0005.jpg',
    ],
    description: 'Long bench dengan storage multifungsi',
    date: '01-08-2025'
  },
  {
    id: 'new-11',
    code: 'NEO 01-0117-111',
    name: 'Bar Stool',
    category: 'stool',
    renderImage: '/media/portfolio/furniture/NEW/NEO-01-0117-111---BAR-STOOL/NEO 01-0117-111 - BAR STOOL_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-01-0117-111---BAR-STOOL/NEO 01-0117-111 - BAR STOOL_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0117-111---BAR-STOOL/NEO 01-0117-111 - BAR STOOL_page-0003.jpg',
    ],
    description: 'Modern bar stool untuk kitchen atau bar area',
    date: '05-08-2025'
  },
  {
    id: 'new-12',
    code: 'NEO-01-0118-13',
    name: 'Arm Chair Rev',
    category: 'chair',
    renderImage: '/media/portfolio/furniture/NEW/NEO-01-0118-13 ARM CHAIR REV_29-07-2025/NEO-01-0118-13 ARM CHAIR REV_29-07-2025_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-01-0118-13 ARM CHAIR REV_29-07-2025/NEO-01-0118-13 ARM CHAIR REV_29-07-2025_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0118-13 ARM CHAIR REV_29-07-2025/NEO-01-0118-13 ARM CHAIR REV_29-07-2025_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0118-13 ARM CHAIR REV_29-07-2025/NEO-01-0118-13 ARM CHAIR REV_29-07-2025_page-0004.jpg',
    ],
    description: 'Arm chair revised dengan improvement design',
    date: '29-07-2025'
  },
  {
    id: 'new-13',
    code: 'NEO 01-0202-183',
    name: 'Patio Set Table',
    category: 'outdoor',
    renderImage: '/media/portfolio/furniture/NEW/NEO-01-0202-183---PATIO-SET-TABLE-Revision-1/NEO 01-0202-183 - PATIO SET (TABLE) Revision-1_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-01-0202-183---PATIO-SET-TABLE-Revision-1/NEO 01-0202-183 - PATIO SET (TABLE) Revision-1_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0202-183---PATIO-SET-TABLE-Revision-1/NEO 01-0202-183 - PATIO SET (TABLE) Revision-1_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0202-183---PATIO-SET-TABLE-Revision-1/NEO 01-0202-183 - PATIO SET (TABLE) Revision-1_page-0004.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0202-183---PATIO-SET-TABLE-Revision-1/NEO 01-0202-183 - PATIO SET (TABLE) Revision-1_page-0005.jpg',
    ],
    description: 'Patio set table untuk outdoor dining',
    date: '10-08-2025'
  },
  {
    id: 'new-14',
    code: 'NEO 01-0204-163',
    name: 'Custom Samara Coffee Table in Smoked Black',
    category: 'table',
    renderImage: '/media/portfolio/furniture/NEW/NEO-01-0204-163---Custom-Samara-Coffee-Table-in-Smoked-Black/NEO 01-0204-163 - Custom Samara Coffee Table in Smoked Black_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-01-0204-163---Custom-Samara-Coffee-Table-in-Smoked-Black/NEO 01-0204-163 - Custom Samara Coffee Table in Smoked Black_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0204-163---Custom-Samara-Coffee-Table-in-Smoked-Black/NEO 01-0204-163 - Custom Samara Coffee Table in Smoked Black_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO-01-0204-163---Custom-Samara-Coffee-Table-in-Smoked-Black/NEO 01-0204-163 - Custom Samara Coffee Table in Smoked Black_page-0004.jpg',
    ],
    description: 'Custom Samara coffee table dengan finishing smoked black',
    date: '15-08-2025'
  },
  {
    id: 'new-15',
    code: 'NEO 02-0109-04',
    name: 'Patio Set Parasol',
    category: 'outdoor',
    renderImage: '/media/portfolio/furniture/NEW/NEO-02-0109-04---PATIO-SET-PARASOL-31-07-2025/NEO 02-0109-04 - PATIO SET (PARASOL) 31-07-2025_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEW/NEO-02-0109-04---PATIO-SET-PARASOL-31-07-2025/NEO 02-0109-04 - PATIO SET (PARASOL) 31-07-2025_page-0002.jpg',
      '/media/portfolio/furniture/NEW/NEO-02-0109-04---PATIO-SET-PARASOL-31-07-2025/NEO 02-0109-04 - PATIO SET (PARASOL) 31-07-2025_page-0003.jpg',
      '/media/portfolio/furniture/NEW/NEO-02-0109-04---PATIO-SET-PARASOL-31-07-2025/NEO 02-0109-04 - PATIO SET (PARASOL) 31-07-2025_page-0004.jpg',
    ],
    description: 'Patio parasol untuk pelindung outdoor area',
    date: '31-07-2025'
  },
  
  // BARU Folder Items - Previous Projects
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
    renderImage: '/media/portfolio/furniture/BARU/158-710-WASTAFEL-TABLE_12-02-2025/158-710 WASTAFEL TABLE_12-02-2025_page-0001.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/158-710-WASTAFEL-TABLE_12-02-2025/158-710 WASTAFEL TABLE_12-02-2025_page-0002.jpg'
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
    name: 'Wave Vanity 24"',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-24-RS00---02.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-24-RS00---02.09.2025/Slide 2.jpg'
    ],
    description: 'Wave vanity 24 inch dengan desain gelombang modern',
    date: '02-09-2025'
  },
  {
    id: '8',
    code: 'AD-WAVE-30-RS00',
    name: 'Wave Vanity 30"',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-30-RS00---04.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-30-RS00---04.09.2025/Slide 2.jpg'
    ],
    description: 'Wave vanity 30 inch dengan storage lebih luas',
    date: '04-09-2025'
  },
  {
    id: '9',
    code: 'AD-WAVE-36-RS00',
    name: 'Wave Vanity 36"',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-36-RS00---01.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-36-RS00---01.09.2025/Slide 2.jpg'
    ],
    description: 'Wave vanity 36 inch dengan kapasitas optimal',
    date: '01-09-2025'
  },
  {
    id: '10',
    code: 'AD-WAVE-48D-RS00',
    name: 'Wave Vanity 48" Double',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-48D-RS00---05.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-48D-RS00---05.09.2025/Slide 2.jpg'
    ],
    description: 'Wave vanity 48 inch double door dengan ruang penyimpanan maksimal',
    date: '05-09-2025'
  },
  {
    id: '11',
    code: 'AD-WAVE-48S-RS00',
    name: 'Wave Vanity 48" Single',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-48S-RS00---08.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-48S-RS00---08.09.2025/Slide 2.jpg'
    ],
    description: 'Wave vanity 48 inch single door yang praktis',
    date: '08-09-2025'
  },
  {
    id: '12',
    code: 'AD-WAVE-60D-RS00',
    name: 'Wave Vanity 60" Double',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-60D-RS00---05.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-60D-RS00---05.09.2025/Slide 2.jpg'
    ],
    description: 'Wave vanity 60 inch double door ukuran besar',
    date: '05-09-2025'
  },
  {
    id: '13',
    code: 'AD-WAVE-60S-RS00',
    name: 'Wave Vanity 60" Single',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-60S-RS00---11.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-60S-RS00---11.09.2025/Slide 2.jpg'
    ],
    description: 'Wave vanity 60 inch single door untuk kamar luas',
    date: '11-09-2025'
  },
  {
    id: '14',
    code: 'AD-WAVE-72D-RS00',
    name: 'Wave Vanity 72" Double',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-72D-RS00---11.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-72D-RS00---11.09.2025/Slide 2.jpg'
    ],
    description: 'Wave vanity 72 inch double door extra large',
    date: '11-09-2025'
  },
  {
    id: '15',
    code: 'AD-WAVE-72S-RS00',
    name: 'Wave Vanity 72" Single',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-72S-RS00---13.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-72S-RS00---13.09.2025/Slide 2.jpg'
    ],
    description: 'Wave vanity 72 inch single door kapasitas besar',
    date: '13-09-2025'
  },
  {
    id: '16',
    code: 'AD-WAVE-80-RS00',
    name: 'Wave Vanity 80"',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/AD-WAVE-80-RS00---13.09.2025/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/AD-WAVE-80-RS00---13.09.2025/Slide 2.jpg'
    ],
    description: 'Wave vanity 80 inch terbesar dalam seri Wave',
    date: '13-09-2025'
  },
  {
    id: '17',
    code: 'CUPBOARD-01',
    name: 'Cupboard Classic',
    category: 'wardrobe',
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
    name: 'Classic Vanity',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/BARU/Wardrobe/Slide 1.jpg',
    constructionImages: [
      '/media/portfolio/furniture/BARU/Wardrobe/Slide 2.jpg'
    ],
    description: 'Classic vanity dengan desain elegant',
    date: '28-08-2025'
  }
];

export const furnitureCategories = [
  { value: 'all', labelId: 'Semua Kategori', labelEn: 'All Categories' },
  { value: 'chair', labelId: 'Kursi', labelEn: 'Chairs' },
  { value: 'lounge', labelId: 'Lounge', labelEn: 'Lounge' },
  { value: 'bench', labelId: 'Bench', labelEn: 'Benches' },
  { value: 'table', labelId: 'Meja', labelEn: 'Tables' },
  { value: 'stool', labelId: 'Stool', labelEn: 'Stools' },
  { value: 'bed', labelId: 'Tempat Tidur', labelEn: 'Beds' },
  { value: 'storage', labelId: 'Storage', labelEn: 'Storage' },
  { value: 'vanity', labelId: 'Vanity', labelEn: 'Vanity' },
  { value: 'wardrobe', labelId: 'Lemari Pakaian', labelEn: 'Wardrobes' },
  { value: 'outdoor', labelId: 'Outdoor', labelEn: 'Outdoor' },
  { value: 'ottoman', labelId: 'Ottoman', labelEn: 'Ottoman' },
] as const;
