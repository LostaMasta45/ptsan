export interface ConstructionProject {
  id: string;
  title: string;
  location: string;
  year: string;
  category: 'residential' | 'commercial' | 'religious' | 'interior' | 'villa' | 'security';
  type: 'render' | 'technical' | 'photo' | 'mixed';
  coverImage: string;
  description: string;
  client?: string;
  images: {
    path: string;
    caption?: string;
    type: 'render' | 'technical' | 'photo';
  }[];
  featured?: boolean;
}

export const constructionProjects: ConstructionProject[] = [
  {
    id: 'rumah-trowulan',
    title: 'Rumah Trowulan',
    location: 'Trowulan, Mojokerto',
    year: '2025',
    category: 'residential',
    type: 'mixed',
    coverImage: '/media/portfolio/konstruksi/Rumah Trowulan/Tampak Depan.jpg',
    description: 'Proyek pembangunan rumah modern dengan konsep tropis. Menampilkan render 3D dan hasil implementasi nyata dengan berbagai sudut pandang interior dan eksterior.',
    featured: true,
    images: [
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/rumah trowulan render_page-0015.jpg', caption: 'Render Perspektif 1', type: 'render' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/rumah trowulan render_page-0017.jpg', caption: 'Render Perspektif 2', type: 'render' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/rumah trowulan render_page-0019.jpg', caption: 'Render Perspektif 3', type: 'render' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/Tampak Depan.jpg', caption: 'Tampak Depan', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/depan miring petang.jpg', caption: 'Tampak Depan Petang', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/Depan Miring.jpg', caption: 'Perspektif Depan', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/tampak depan petang.jpg', caption: 'View Petang', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/Ruang Tamu.jpg', caption: 'Ruang Tamu', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/Dapur.jpg', caption: 'Dapur', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/Kamar 1.jpg', caption: 'Kamar Tidur 1', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/Kamar 2.jpg', caption: 'Kamar Tidur 2', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/Mushola.jpg', caption: 'Mushola', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/Lorong.jpg', caption: 'Lorong', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/Parkiran.jpg', caption: 'Area Parkir', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/parkiran 2.jpg', caption: 'Carport', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/Taman Depan.jpg', caption: 'Taman Depan', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/taman blkng.jpg', caption: 'Taman Belakang', type: 'photo' },
      { path: '/media/portfolio/konstruksi/Rumah Trowulan/Belakang.jpg', caption: 'Tampak Belakang', type: 'photo' },
    ]
  },
  {
    id: 'gedung-serbaguna',
    title: 'Gedung Serbaguna Bakung Temenggungan',
    location: 'Bakung Temenggungan',
    year: '2024',
    category: 'commercial',
    type: 'technical',
    coverImage: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR ARS - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0004.jpg',
    description: 'Desain arsitektur dan struktur gedung serbaguna. Mencakup gambar kerja lengkap dari denah, tampak, potongan hingga detail struktur.',
    images: [
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR ARS - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0004.jpg', caption: 'Perspektif Eksterior', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR ARS - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0005.jpg', caption: 'Denah & Tampak', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR ARS - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0009.jpg', caption: 'Detail Arsitektur', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR STR - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0001.jpg', caption: 'Gambar Struktur 1', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR STR - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0002.jpg', caption: 'Gambar Struktur 2', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR STR - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0003.jpg', caption: 'Detail Struktur 1', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR STR - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0004.jpg', caption: 'Detail Struktur 2', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR STR - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0005.jpg', caption: 'Detail Pondasi', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR STR - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0006.jpg', caption: 'Detail Balok & Kolom 1', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR STR - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0007.jpg', caption: 'Detail Balok & Kolom 2', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR STR - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0008.jpg', caption: 'Detail Atap 1', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gedung Serbaguna/GBR STR - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0009-2.jpg', caption: 'Detail Atap 2', type: 'technical' },
    ]
  },
  {
    id: 'gereja',
    title: 'Gereja',
    location: 'Mojokerto',
    year: '2024',
    category: 'religious',
    type: 'technical',
    coverImage: '/media/portfolio/konstruksi/Gereja/Compile gereja_page-0001.jpg',
    description: 'Desain dan perencanaan bangunan gereja dengan konsep modern klasik. Meliputi gambar kerja arsitektur lengkap.',
    images: [
      { path: '/media/portfolio/konstruksi/Gereja/Compile gereja_page-0001.jpg', caption: 'Cover & Perspektif', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gereja/Compile gereja_page-0004.jpg', caption: 'Denah Lantai', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gereja/Compile gereja_page-0016.jpg', caption: 'Tampak Depan', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gereja/Compile gereja_page-0017.jpg', caption: 'Tampak Samping', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gereja/Compile gereja_page-0018.jpg', caption: 'Potongan A-A', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gereja/Compile gereja_page-0019.jpg', caption: 'Potongan B-B', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Gereja/Compile gereja_page-0020.jpg', caption: 'Detail Arsitektur', type: 'technical' },
    ]
  },
  {
    id: 'villa-grand-trawas',
    title: 'Villa Grand Whiz Trawas',
    location: 'Trawas, Mojokerto',
    year: '2025',
    category: 'villa',
    type: 'technical',
    coverImage: '/media/portfolio/konstruksi/Villa grand/Denah Layout Villa Grand Whiz Trawas_page-0001.jpg',
    description: 'Perencanaan villa resort dengan desain mewah di kawasan sejuk Trawas. Mencakup denah layout dan gambar kerja struktur lengkap.',
    images: [
      { path: '/media/portfolio/konstruksi/Villa grand/Denah Layout Villa Grand Whiz Trawas_page-0001.jpg', caption: 'Layout Master Plan', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Villa grand/Denah Layout Villa Grand Whiz Trawas_page-0003.jpg', caption: 'Denah Lantai 1', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Villa grand/Denah Layout Villa Grand Whiz Trawas_page-0004.jpg', caption: 'Denah Lantai 2', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Villa grand/Denah Layout Villa Grand Whiz Trawas_page-0005.jpg', caption: 'Tampak', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Villa grand/Denah Layout Villa Grand Whiz Trawas_page-0006.jpg', caption: 'Potongan', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Villa grand/G._KERJA_STRUKTUR_VILLA_GRAND_TRAWAS new_page-0001.jpg', caption: 'Gambar Struktur Pondasi', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Villa grand/G._KERJA_STRUKTUR_VILLA_GRAND_TRAWAS new_page-0002.jpg', caption: 'Struktur Lantai 1', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Villa grand/G._KERJA_STRUKTUR_VILLA_GRAND_TRAWAS new_page-0003.jpg', caption: 'Struktur Lantai 2', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Villa grand/G._KERJA_STRUKTUR_VILLA_GRAND_TRAWAS new_page-0004.jpg', caption: 'Detail Struktur 1', type: 'technical' },
      { path: '/media/portfolio/konstruksi/Villa grand/G._KERJA_STRUKTUR_VILLA_GRAND_TRAWAS new_page-0005.jpg', caption: 'Detail Struktur 2', type: 'technical' },
    ]
  },
  {
    id: 'interior-induction',
    title: 'Interior Ruang Induction',
    location: 'Mojokerto',
    year: '2024',
    category: 'interior',
    type: 'render',
    coverImage: '/media/portfolio/konstruksi/Render Interior Induction/interior R. induction.jpg',
    description: 'Desain interior ruang induction dengan konsep modern industrial. Render 3D menampilkan suasana workspace yang fungsional dan estetik.',
    images: [
      { path: '/media/portfolio/konstruksi/Render Interior Induction/interior R. induction.jpg', caption: 'Interior Ruang Induction', type: 'render' },
      { path: '/media/portfolio/konstruksi/Render Interior Induction/Pos tata bersama.jpg', caption: 'Area Pos Security', type: 'render' },
    ]
  },
  {
    id: 'renovasi-pos-jaga',
    title: 'Renovasi Pos Jaga',
    location: 'Mojokerto',
    year: '2024',
    category: 'security',
    type: 'render',
    coverImage: '/media/portfolio/konstruksi/Render Renovasi Pos Jaga/Pos depan 3.jpg',
    description: 'Konsep renovasi pos jaga dengan desain modern minimalis. Memperhatikan aspek fungsional dan estetika untuk security post.',
    images: [
      { path: '/media/portfolio/konstruksi/Render Renovasi Pos Jaga/Pos depan 3.jpg', caption: 'Perspektif Depan', type: 'render' },
      { path: '/media/portfolio/konstruksi/Render Renovasi Pos Jaga/pos view 4.jpg', caption: 'Alternatif View', type: 'render' },
    ]
  },
];

export const constructionCategories = [
  { value: 'all', labelId: 'Semua Proyek', labelEn: 'All Projects', icon: '🏗️' },
  { value: 'residential', labelId: 'Rumah Tinggal', labelEn: 'Residential', icon: '🏠' },
  { value: 'commercial', labelId: 'Komersial', labelEn: 'Commercial', icon: '🏢' },
  { value: 'religious', labelId: 'Tempat Ibadah', labelEn: 'Religious', icon: '⛪' },
  { value: 'villa', labelId: 'Villa & Resort', labelEn: 'Villa & Resort', icon: '🏖️' },
  { value: 'interior', labelId: 'Interior', labelEn: 'Interior', icon: '🛋️' },
  { value: 'security', labelId: 'Security Post', labelEn: 'Security Post', icon: '🛡️' },
] as const;

export const constructionTypes = [
  { value: 'all', labelId: 'Semua Tipe', labelEn: 'All Types' },
  { value: 'render', labelId: 'Render 3D', labelEn: '3D Render' },
  { value: 'technical', labelId: 'Gambar Kerja', labelEn: 'Technical Drawings' },
  { value: 'photo', labelId: 'Foto Implementasi', labelEn: 'Implementation Photos' },
  { value: 'mixed', labelId: 'Render + Foto', labelEn: 'Render + Photos' },
] as const;
