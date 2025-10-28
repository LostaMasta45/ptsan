export interface FurnitureItem {
  id: string;
  code: string;
  name: string;
  category: 'chair' | 'bench' | 'table' | 'stool' | 'lounge' | 'storage' | 'outdoor' | 'vanity';
  renderImage: string;
  constructionImages: string[];
  description?: string;
  date: string;
}

export const furnitureItems: FurnitureItem[] = [
  {
    id: '1',
    code: '0308-40',
    name: 'Vanity',
    category: 'vanity',
    renderImage: '/media/portfolio/furniture/0308-40-vanity_14-07-2025/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/0308-40-vanity_14-07-2025/construction-1.jpg',
      '/media/portfolio/furniture/0308-40-vanity_14-07-2025/construction-2.jpg',
      '/media/portfolio/furniture/0308-40-vanity_14-07-2025/construction-3.jpg'
    ],
    description: 'Modern vanity dengan desain minimalis dan elegan',
    date: '14-07-2025'
  },
  {
    id: '2',
    code: 'NEO 01-0103-260',
    name: 'Langford Lounge Chair',
    category: 'lounge',
    renderImage: '/media/portfolio/furniture/NEO 01-0103-260 - Langford Lounge Chair/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO 01-0103-260 - Langford Lounge Chair/construction-1.jpg',
      '/media/portfolio/furniture/NEO 01-0103-260 - Langford Lounge Chair/construction-2.jpg',
      '/media/portfolio/furniture/NEO 01-0103-260 - Langford Lounge Chair/construction-3.jpg'
    ],
    description: 'Kursi lounge dengan kenyamanan maksimal dan desain kontemporer',
    date: '25-07-2025'
  },
  {
    id: '3',
    code: 'NEO 01-0105-77',
    name: 'Bed Boucle Bench',
    category: 'bench',
    renderImage: '/media/portfolio/furniture/NEO 01-0105-77 - BED BOUCLE BENCH/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO 01-0105-77 - BED BOUCLE BENCH/construction-1.jpg',
      '/media/portfolio/furniture/NEO 01-0105-77 - BED BOUCLE BENCH/construction-2.jpg',
      '/media/portfolio/furniture/NEO 01-0105-77 - BED BOUCLE BENCH/construction-3.jpg'
    ],
    description: 'Bench dengan material boucle premium untuk kenyamanan ekstra',
    date: '20-07-2025'
  },
  {
    id: '4',
    code: 'NEO 01-01-01-232',
    name: 'Alberto Dining Chair',
    category: 'chair',
    renderImage: '/media/portfolio/furniture/NEO-01-01-01-232-ALBERTO-DINING-CHAIR_25-07-2025/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-01-01-01-232-ALBERTO-DINING-CHAIR_25-07-2025/construction-1.jpg',
      '/media/portfolio/furniture/NEO-01-01-01-232-ALBERTO-DINING-CHAIR_25-07-2025/construction-2.jpg',
      '/media/portfolio/furniture/NEO-01-01-01-232-ALBERTO-DINING-CHAIR_25-07-2025/construction-3.jpg'
    ],
    description: 'Kursi makan Alberto dengan desain klasik modern',
    date: '25-07-2025'
  },
  {
    id: '5',
    code: 'NEO 01-0101-236',
    name: 'The Roadie Rustic Teak Dining Chair',
    category: 'chair',
    renderImage: '/media/portfolio/furniture/NEO-01-0101-236---The-Roadie-Rustic-Teak-Dining-Chair---29-07-2025/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-01-0101-236---The-Roadie-Rustic-Teak-Dining-Chair---29-07-2025/construction-1.jpg',
      '/media/portfolio/furniture/NEO-01-0101-236---The-Roadie-Rustic-Teak-Dining-Chair---29-07-2025/construction-2.jpg',
      '/media/portfolio/furniture/NEO-01-0101-236---The-Roadie-Rustic-Teak-Dining-Chair---29-07-2025/construction-3.jpg'
    ],
    description: 'Kursi makan dari kayu jati dengan gaya rustic yang kuat',
    date: '29-07-2025'
  },
  {
    id: '6',
    code: 'NEO 01-0101-237',
    name: 'Boderie Amish',
    category: 'chair',
    renderImage: '/media/portfolio/furniture/NEO-01-0101-237-BODERIE-AMISH_26-07-2025/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-01-0101-237-BODERIE-AMISH_26-07-2025/construction-1.jpg',
      '/media/portfolio/furniture/NEO-01-0101-237-BODERIE-AMISH_26-07-2025/construction-2.jpg'
    ],
    description: 'Kursi dengan sentuhan klasik Amish yang timeless',
    date: '26-07-2025'
  },
  {
    id: '7',
    code: 'NEO 01-0102-42',
    name: 'Jean Luc Teak Al Aire Libre',
    category: 'outdoor',
    renderImage: '/media/portfolio/furniture/NEO-01-0102-42-JEAN-LUC-TEAK-AL-AIRE-LIBRE_15-07-2025/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-01-0102-42-JEAN-LUC-TEAK-AL-AIRE-LIBRE_15-07-2025/construction-1.jpg',
      '/media/portfolio/furniture/NEO-01-0102-42-JEAN-LUC-TEAK-AL-AIRE-LIBRE_15-07-2025/construction-2.jpg',
      '/media/portfolio/furniture/NEO-01-0102-42-JEAN-LUC-TEAK-AL-AIRE-LIBRE_15-07-2025/construction-3.jpg'
    ],
    description: 'Furniture outdoor dari kayu jati berkualitas tinggi',
    date: '15-07-2025'
  },
  {
    id: '8',
    code: 'NEO 01-0103-245',
    name: 'Honfleur Seagrass Swivel Lounge Chair',
    category: 'lounge',
    renderImage: '/media/portfolio/furniture/NEO-01-0103-245---Honfleur-Seagrass-Swivel-Lounge-Chair---28-07-2025/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-01-0103-245---Honfleur-Seagrass-Swivel-Lounge-Chair---28-07-2025/construction-1.jpg',
      '/media/portfolio/furniture/NEO-01-0103-245---Honfleur-Seagrass-Swivel-Lounge-Chair---28-07-2025/construction-2.jpg',
      '/media/portfolio/furniture/NEO-01-0103-245---Honfleur-Seagrass-Swivel-Lounge-Chair---28-07-2025/construction-3.jpg'
    ],
    description: 'Kursi lounge swivel dengan material seagrass alami',
    date: '28-07-2025'
  },
  {
    id: '9',
    code: 'NEO 01-0103-246',
    name: 'Chevron Arm Chair',
    category: 'chair',
    renderImage: '/media/portfolio/furniture/NEO-01-0103-246---CHEVRON-ARM-CHAIR_Revision-1/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-01-0103-246---CHEVRON-ARM-CHAIR_Revision-1/construction-1.jpg',
      '/media/portfolio/furniture/NEO-01-0103-246---CHEVRON-ARM-CHAIR_Revision-1/construction-2.jpg',
      '/media/portfolio/furniture/NEO-01-0103-246---CHEVRON-ARM-CHAIR_Revision-1/construction-3.jpg'
    ],
    description: 'Arm chair dengan pola chevron yang eye-catching',
    date: '22-07-2025'
  },
  {
    id: '10',
    code: 'NEO 01-0105-81',
    name: 'Long Bench with Storage',
    category: 'storage',
    renderImage: '/media/portfolio/furniture/NEO-01-0105-81---LONG-BENCH-WITH-STORAGE-Revision-2/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-01-0105-81---LONG-BENCH-WITH-STORAGE-Revision-2/construction-1.jpg',
      '/media/portfolio/furniture/NEO-01-0105-81---LONG-BENCH-WITH-STORAGE-Revision-2/construction-2.jpg',
      '/media/portfolio/furniture/NEO-01-0105-81---LONG-BENCH-WITH-STORAGE-Revision-2/construction-3.jpg'
    ],
    description: 'Bench panjang multifungsi dengan storage tersembunyi',
    date: '18-07-2025'
  },
  {
    id: '11',
    code: 'NEO 01-0117-111',
    name: 'Bar Stool',
    category: 'stool',
    renderImage: '/media/portfolio/furniture/NEO-01-0117-111---BAR-STOOL/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-01-0117-111---BAR-STOOL/construction-1.jpg',
      '/media/portfolio/furniture/NEO-01-0117-111---BAR-STOOL/construction-2.jpg'
    ],
    description: 'Bar stool modern untuk area kitchen atau bar',
    date: '24-07-2025'
  },
  {
    id: '12',
    code: 'NEO 01-0118-13',
    name: 'Arm Chair',
    category: 'chair',
    renderImage: '/media/portfolio/furniture/NEO-01-0118-13 ARM CHAIR REV_29-07-2025/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-01-0118-13 ARM CHAIR REV_29-07-2025/construction-1.jpg',
      '/media/portfolio/furniture/NEO-01-0118-13 ARM CHAIR REV_29-07-2025/construction-2.jpg',
      '/media/portfolio/furniture/NEO-01-0118-13 ARM CHAIR REV_29-07-2025/construction-3.jpg'
    ],
    description: 'Arm chair dengan desain ergonomis dan nyaman',
    date: '29-07-2025'
  },
  {
    id: '13',
    code: 'NEO 01-0202-183',
    name: 'Patio Set Table',
    category: 'table',
    renderImage: '/media/portfolio/furniture/NEO-01-0202-183---PATIO-SET-TABLE-Revision-1/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-01-0202-183---PATIO-SET-TABLE-Revision-1/construction-1.jpg',
      '/media/portfolio/furniture/NEO-01-0202-183---PATIO-SET-TABLE-Revision-1/construction-2.jpg',
      '/media/portfolio/furniture/NEO-01-0202-183---PATIO-SET-TABLE-Revision-1/construction-3.jpg'
    ],
    description: 'Meja patio set untuk outdoor living yang stylish',
    date: '27-07-2025'
  },
  {
    id: '14',
    code: 'NEO 01-0204-163',
    name: 'Custom Samara Coffee Table in Smoked Black',
    category: 'table',
    renderImage: '/media/portfolio/furniture/NEO-01-0204-163---Custom-Samara-Coffee-Table-in-Smoked-Black/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-01-0204-163---Custom-Samara-Coffee-Table-in-Smoked-Black/construction-1.jpg',
      '/media/portfolio/furniture/NEO-01-0204-163---Custom-Samara-Coffee-Table-in-Smoked-Black/construction-2.jpg',
      '/media/portfolio/furniture/NEO-01-0204-163---Custom-Samara-Coffee-Table-in-Smoked-Black/construction-3.jpg'
    ],
    description: 'Coffee table custom dengan finishing smoked black premium',
    date: '21-07-2025'
  },
  {
    id: '15',
    code: 'NEO 02-0109-04',
    name: 'Patio Set Parasol',
    category: 'outdoor',
    renderImage: '/media/portfolio/furniture/NEO-02-0109-04---PATIO-SET-PARASOL-31-07-2025/render.jpg',
    constructionImages: [
      '/media/portfolio/furniture/NEO-02-0109-04---PATIO-SET-PARASOL-31-07-2025/construction-1.jpg',
      '/media/portfolio/furniture/NEO-02-0109-04---PATIO-SET-PARASOL-31-07-2025/construction-2.jpg',
      '/media/portfolio/furniture/NEO-02-0109-04---PATIO-SET-PARASOL-31-07-2025/construction-3.jpg'
    ],
    description: 'Set patio dengan parasol untuk kenyamanan outdoor maksimal',
    date: '31-07-2025'
  }
];

export const furnitureCategories = [
  { value: 'all', label: 'Semua Kategori' },
  { value: 'chair', label: 'Kursi' },
  { value: 'bench', label: 'Bench' },
  { value: 'table', label: 'Meja' },
  { value: 'stool', label: 'Stool' },
  { value: 'lounge', label: 'Lounge' },
  { value: 'storage', label: 'Storage' },
  { value: 'outdoor', label: 'Outdoor' },
  { value: 'vanity', label: 'Vanity' },
] as const;
