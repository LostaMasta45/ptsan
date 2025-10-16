PORTFOLIO KONSTRUKSI - STRUKTUR FILE
=====================================

Total: 6 Proyek Aktif dengan 89 gambar

PROYEK YANG DIGUNAKAN:
=======================

1. ⭐ RUMAH TROWULAN (Featured Project)
   Lokasi: Trowulan, Mojokerto
   Folder: Rumah Trowulan/
   Cover: Tampak Depan.jpg
   Total: 18 gambar (3 renders + 15 foto real)
   Kategori: Residential | Type: Mixed (Render + Foto)
   
   Highlights:
   - Proyek paling lengkap dengan render 3D dan implementasi nyata
   - Foto eksterior, interior lengkap (kamar, dapur, mushola, taman)
   - Menunjukkan before-after style yang powerful

2. GEDUNG SERBAGUNA BAKUNG TEMENGGUNGAN
   Lokasi: Bakung Temenggungan
   Folder: Gedung Serbaguna/
   Cover: GBR ARS - GED. SERBAGUNAN BAKUNGTEMENGGUNGAN_page-0004.jpg
   Total: 12 gambar (gambar arsitektur + struktur)
   Kategori: Commercial | Type: Technical Drawings
   
   Highlights:
   - Gambar kerja lengkap (arsitektur + struktur)
   - Detail konstruksi profesional

3. GEREJA
   Lokasi: Mojokerto
   Folder: Gereja/
   Cover: Compile gereja_page-0001.jpg
   Total: 7 gambar (gambar kerja)
   Kategori: Religious | Type: Technical Drawings

4. VILLA GRAND WHIZ TRAWAS
   Lokasi: Trawas, Mojokerto
   Folder: Villa grand/
   Cover: Denah Layout Villa Grand Whiz Trawas_page-0001.jpg
   Total: 10 gambar (layout + struktur)
   Kategori: Villa | Type: Technical Drawings

5. INTERIOR RUANG INDUCTION
   Lokasi: Mojokerto
   Folder: Render Interior Induction/
   Cover: interior R. induction.jpg
   Total: 2 gambar (render interior)
   Kategori: Interior | Type: Render 3D

6. RENOVASI POS JAGA
   Lokasi: Mojokerto
   Folder: Render Renovasi Pos Jaga/
   Cover: Pos depan 3.jpg
   Total: 2 gambar (render eksterior)
   Kategori: Security Post | Type: Render 3D


FOLDER YANG TIDAK DIGUNAKAN:
=============================

- Indocasa/ - Overlap dengan furniture portfolio, banyak technical drawings furniture
- Masjid/ - Folder kosong
- Render Rumah Malang/ - Folder kosong
- Interior Tonic/ - Folder tidak ada


CATATAN PENTING:
================

1. File paths sudah disesuaikan dengan struktur yang ada
2. Setiap gambar sudah dikategorikan: 'render', 'technical', atau 'photo'
3. Cover images dipilih yang paling representatif untuk setiap proyek
4. Data structure flexible - mudah untuk tambah proyek baru
5. Build berhasil tanpa error!


CARA MENAMBAH PROYEK BARU:
===========================

Edit file: data/construction-portfolio.ts

Tambahkan object baru ke array constructionProjects:

{
  id: 'nama-proyek',
  title: 'Judul Proyek',
  location: 'Lokasi',
  year: '2025',
  category: 'residential' | 'commercial' | 'religious' | 'villa' | 'interior' | 'security',
  type: 'render' | 'technical' | 'photo' | 'mixed',
  coverImage: '/media/portfolio/konstruksi/FolderName/cover-image.jpg',
  description: 'Deskripsi singkat proyek...',
  featured: false, // true untuk featured project
  images: [
    { 
      path: '/media/portfolio/konstruksi/FolderName/image1.jpg', 
      caption: 'Keterangan gambar', 
      type: 'render' | 'technical' | 'photo' 
    },
    // ... tambah gambar lainnya
  ]
}
