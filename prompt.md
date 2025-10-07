**Peranmu:** Senior Frontend Engineer + UX Writer.
**Target:** Bangun website company profile **PT Semangat Anak Negeri (PT SAN)** yang production‑ready menggunakan **Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui + lucide-react**. Semua copywriting **Bahasa Indonesia** yang persuasif, SEO‑siap, dan langsung terisi. **Sumber aset wajib dibaca otomatis dari `/src/assets/**`**.

---

## 0) Aturan Aset (WAJIB)

**Semua bahan akan ku‑upload ke** `./src/assets/` dengan struktur:

* `src/assets/logos/` → logo utama & logo partners (png/svg/webp). Nama logo utama: gunakan file yang mengandung kata **`san`** atau **`logo-san`** jika ada; sisanya jadi **LogoWall/partners**.
* `src/assets/before-after/` → foto sebelum/sesudah. **Perpasangkan via nama file**: `namaunik_before.ext` & `namaunik_after.ext`. Boleh ada subfolder.
* `src/assets/catalogs/` → PDF katalog: **`Katalog Jasa SAN.pdf`**, **`Katalog Konstruksi SAN.pdf`**, dll.

**Tugasmu:**

1. Buat script **`scripts/build-assets-manifest.ts`** yang membaca seluruh isi `/src/assets/**` dengan `fs` lalu menulis **`/src/assets.manifest.json`** berisi:

```ts
{
  logos: string[],
  partners: string[],
  beforeAfter: Array<{ id: string; title?: string; location?: string; before: string; after: string }>,
  catalogs: Array<{ title: string; file: string }>
}
```

* `logos`: deteksi file logo utama (contains: `san`/`logo-san`) → taruh paling depan. Sisanya masuk `partners`.
* `beforeAfter`: pairing otomatis berdasarkan suffix `_before` & `_after`. `id` = namaunik (kebab-case).
* `catalogs`: ambil semua PDF di `src/assets/catalogs`, `title` = nama file tanpa ekstensi.

2. Tambahkan ke `package.json`:

* `"postinstall": "tsx scripts/build-assets-manifest.ts"`
* `"build": "npm run postinstall && next build"`

3. Buat route handler **file server internal**: `app/media/[...path]/route.ts` yang **membaca file dari `/src/assets`** dan mengembalikannya sebagai stream dengan `Content-Type` yang tepat (png/jpeg/webp/svg/pdf). Setelah ini, seluruh aset bisa diakses via URL mis.: `/media/logos/namafile.png`, `/media/catalogs/Katalog%20Jasa%20SAN.pdf`.

4. Semua komponen **mengkonsumsi data dari `src/assets.manifest.json`** (Server Component). **Jangan hard‑code nama file**. Jika folder kosong, tampilkan *empty state* yang ramah.

---

## 1) Konteks Brand (gunakan langsung)

* **Brand Resmi:** PT Semangat Anak Negeri (**PT SAN**)
* **Lokasi Basis:** Mojokerto, Indonesia. **Area Layanan:** Mojokerto, Jombang, Sidoarjo, Surabaya (boleh diubah).
* **Tagline:** *“Bangun Aman, Tepat Waktu, Hasil Berkualitas.”*
* **Narasi Singkat (pakai di About & meta):**
  "PT SAN adalah penyedia jasa **renovasi bangunan, konstruksi, dan layanan gambar teknik (drafter)**. Kami memberi solusi menyeluruh dari **perencanaan desain**, **pembuatan gambar kerja profesional (CAD)**, hingga **pelaksanaan proyek** dengan hasil **rapi, kuat, dan sesuai kebutuhan**. Berawal dari pengalaman di desain teknik & drafting furniture untuk pasar lokal maupun internasional, kami berkembang ke konstruksi & renovasi demi menghadirkan layanan yang **terpercaya, transparan, dan profesional**. Dengan tim berpengalaman, peralatan lengkap, serta penguasaan software CAD, kami membantu mewujudkan hunian & bangunan yang fungsional, estetis, dan bernilai tinggi. Fokus kami: **tepat waktu**, **sesuai anggaran**, dan **kepuasan klien** untuk rumah tinggal, ruko/komersial, dan proyek desain teknik."
* **Kontak Placeholder (buat `config/site.ts`):**

  ```ts
  export const site = {
    brand: 'PT Semangat Anak Negeri',
    short: 'PT SAN',
    tagline: 'Bangun Aman, Tepat Waktu, Hasil Berkualitas.',
    baseCity: 'Mojokerto',
    serviceAreas: ['Mojokerto','Jombang','Sidoarjo','Surabaya'],
    whatsappLink: 'https://wa.me/62XXXXXXXXXX?text=Halo%20PT%20SAN,%20saya%20butuh%20konsultasi%20proyek',
    email: 'halo@ptsan.co.id',
    address: 'Jl. [Nama Jalan], Mojokerto, Indonesia',
    experienceYears: '10+',
    projectsDone: '300+',
    warranty: 'Hingga 12 bulan (S&K berlaku)'
  }
  ```

---

## 2) Arsitektur & Stack

* **Next.js 14+ App Router**, **TypeScript**, **Tailwind**, **shadcn/ui**, **lucide-react**.
* **Form:** `react-hook-form + zod`, API Route `POST /api/submit-lead` (demo: `console.log` + TODO untuk email/CRM).
* **Gambar:** `next/image` + lazy loading; optimasi start render; gunakan Server Components bila memungkinkan.
* **Aksesibilitas:** gunakan komponen shadcn; fokus ring; kontras teks WCAG.
* **Kualitas:** Lighthouse target Perf ≥90, A11y ≥95, BP ≥95, SEO ≥95.

---

## 3) Struktur Halaman (App Router)

* `/` **Beranda**
* `/tentang-kami`
* `/layanan` (grid + anchor)
* `/portofolio` (gallery + filter kategori: **Rumah**, **Ruko/Komersial**, **Renovasi**, **Interior**, **Drafter/CAD**)
* `/proses-kerja` (timeline 5–8 langkah)
* `/testimoni`
* `/estimasi` (form lead)
* `/kontak`
* `/kebijakan-privasi`, `/syarat-ketentuan`
* 404 page ramah + CTA balik ke beranda

---

## 4) Komponen Wajib (shadcn/ui)

* `SiteHeader` (logo utama dari manifest + nav + tombol **Konsultasi WA**; sticky).
* `HeroSection` (headline, subheadline, **CTA ganda**: WhatsApp & Estimasi).
* `TrustBar` (badge pengalaman, proyek, garansi + **LogoWall** dari `partners`).
* `ServiceGrid` (kartu layanan dengan ikon lucide: Hammer, Building, Ruler, Paintbrush, Wrench).
* `WhyUs` (USP 5 poin: Tepat Waktu, RAB Transparan, Garansi, Material Berkualitas, Tim Berpengalaman).
* `ProcessSteps` (timeline 5 langkah inti: Konsultasi → Survey → RAB & Kontrak → Eksekusi → Serah Terima & Garansi; sediakan opsi 8 langkah bila diambil dari katalog).
* `PortfolioGallery` (grid; kartu berisi foto, judul, lokasi, lingkup kerja, durasi). **Tambahkan** `BeforeAfterSlider` (pakai `react-compare-slider`) yang otomatis mengambil pasangan dari `beforeAfter` pada manifest.
* `TestimonialsCarousel` (kumpulan testimoni; data dummy oke).
* `FAQAccordion` (10 Q&A umum).
* `CatalogSection` (render kartu untuk setiap PDF di `catalogs` → tombol **Lihat** (embed `<object>`/`<iframe>`) & **Unduh** (`/media/catalogs/...`)).
* `ContactForm` & `EstimateForm` (validasi zod; toast sukses/gagal).
* `FloatingCTA` (tombol WA melayang di kanan bawah).
* `MapEmbed` (iframe Google Maps alamat kantor Mojokerto).
* `Footer` (alamat, jam kerja, kontak, CTA, logo utama + LogoWall kecil).

**Fallback/Empty State:** jika manifest tidak menemukan aset, tampilkan placeholder yang ramah (ikon + teks cara menambahkan file ke `/src/assets/...` dan rebuild).

---

## 5) Copywriting (ISI SEKARANG)

> Semua teks Bahasa Indonesia, nada profesional dan meyakinkan. Gunakan narasi brand di §1. Ringkas namun kuat; fokus manfaat & transparansi.

### Beranda – Hero

* **Headline:** *“Renovasi & Konstruksi Tanpa Drama, Hasil Kuat & Rapi”*
* **Subheadline:** *“PT SAN menangani desain, gambar kerja (CAD), hingga eksekusi proyek—tepat waktu, transparan, dan profesional.”*
* **CTA Primary:** “Konsultasi Gratis via WhatsApp”
* **CTA Secondary:** “Minta Estimasi Biaya”

### Layanan (kartu & halaman detail)

1. **Renovasi Rumah & Ruko** — *Upgrade fungsi & estetika dengan minim gangguan, hasil presisi.*
2. **Konstruksi Bangunan** — *Fondasi kuat, struktur terukur, sesuai standar keselamatan.*
3. **Interior & Finishing** — *Plafon, lantai, cat, custom furniture—detail rapi, nyaman ditempati.*
4. **Drafter & Gambar Teknik (CAD)** — *Gambar kerja 2D/3D, as‑built, shop drawing, detail joinery & MEP dasar.*
5. **Perbaikan & Maintenance** — *Atap, dinding, kebocoran, instalasi—perbaikan cepat & rapi.*

### Why Us (USP)

* **Tepat Waktu:** Timeline jelas & update berkala.
* **RAB Transparan:** Rinci, tanpa biaya tersembunyi.
* **Garansi Pekerjaan:** Hingga 12 bulan (S&K berlaku).
* **Material Berkualitas:** Rekomendasi sesuai kebutuhan & iklim lokal.
* **Tim Berpengalaman:** Drafter CAD, arsitek, dan tukang teruji.

### Proses Kerja (ringkas 5 langkah)

**Konsultasi → Survey → RAB & Kontrak → Eksekusi & QC → Serah Terima & Garansi**.
Tambahkan *checklist* serah terima & dokumentasi foto.

### CTA Section

* **Judul:** “Siap Mulai Proyek di Mojokerto & Sekitarnya?”
* **Teks:** “Klik untuk konsultasi cepat dengan tim PT SAN.”
* **Tombol:** “Chat WhatsApp Sekarang”

### Tentang Kami (gunakan narasi brand §1)

Paragraf 2–3 yang menegaskan asal‑usul dari drafting furniture (lokal & internasional), perluasan ke konstruksi/renovasi, dan komitmen **tepat waktu, sesuai anggaran, kepuasan klien**.

### Testimoni (contoh gaya)

* “RAB jelas, progres on schedule, hasil rapi.” — **Andi, Mojokerto**
* “Drafter CAD cepat & akurat, memudahkan tim lapangan.” — **Rina, Kontraktor**

### FAQ (10 contoh)

Estimasi waktu RAB? • Bisa sesuaikan budget? • Area layanan di luar Mojokerto? • Desain + gambar kerja lengkap? • Skema pembayaran/termin? • Garansi detail? • Material rekomendasi? • Prosedur perubahan scope (VO)? • Terima proyek interior & furniture custom? • Mekanisme update progres?

---

## 6) SEO & Schema

* **Metadata** per halaman (title/description/og).
* **JSON‑LD**:

  * `LocalBusiness` (name: PT Semangat Anak Negeri; address Mojokerto; telephone/WA; `areaServed` Jatim; `openingHours`).
  * `Service` (Renovasi, Konstruksi, Drafter/CAD).
  * `AggregateRating` placeholder (nanti diganti setelah ada ulasan).
* **sitemap.xml** & **robots.txt**.
* **Keyword contoh:** jasa renovasi Mojokerto; kontraktor Mojokerto; jasa drafter CAD Mojokerto; gambar kerja rumah; renovasi ruko Mojokerto.

---

## 7) Form & API

* Halaman **/estimasi** & **/kontak**: field **nama, telepon/WA, email, lokasi proyek, jenis layanan, estimasi budget (range), deskripsi**.
* Validasi `zod` (wajib: nama, WA, layanan, lokasi, deskripsi).
* **API**: `POST /api/submit-lead` (demo: `console.log` isi form). Siapkan tempat integrasi ke email/CRM (komentar `TODO`).
* **UX**: toast sukses/gagal; opsi redirect lembut `/estimasi?success=1`.

---

## 8) UI/UX & Desain

* Warna dasar netral (slate/stone) + aksen hijau/teal profesional.
* Navbar sticky; CTA kontras; **Floating WA** selalu terlihat di mobile/desktop.
* Grid responsif: mobile 1, tablet 2, desktop 3–4 kolom.
* `PortfolioGallery` mendukung filter Tabs/Pills; `BeforeAfterSlider` untuk item yang punya pasangan.
* State kosong ramah & instruktif (cara menaruh file di `/src/assets/...`).

---

## 9) Deliverables (yang harus kamu hasilkan)

* Proyek Next.js lengkap:

  * Halaman di `app/`, komponen di `components/`, util di `lib/`.
  * `components/ui/` dari shadcn telah di‑generate sesuai kebutuhan.
  * `app/api/submit-lead/route.ts`.
  * `scripts/build-assets-manifest.ts` + `src/assets.manifest.json` (auto build via `postinstall`).
  * Route file server internal `app/media/[...path]/route.ts`.
  * `config/site.ts` untuk brand/kontak/area layanan/CTA.
  * `data/` dummy untuk testimoni/layanan/portofolio jika aset minim.
  * **README**: cara run, cara menambah aset (cukup drop file ke `/src/assets/**` lalu build), cara edit `config/site.ts`.

---

## 10) Tugas Otomatis (eksekusi end‑to‑end)

1. Inisialisasi project (Next14 TS + Tailwind + shadcn/ui).
2. Implement semua halaman & komponen di atas.
3. Isi copywriting sesuai narasi PT SAN.
4. Bangun **manifest aset** + file server `/media/**`.
5. Hubungkan komponen ke `assets.manifest.json` (Logo utama, LogoWall, Before‑After, Katalog).
6. Buat form + API demo + toast.
7. Pasang JSON‑LD + SEO meta + sitemap + robots.
8. Pastikan responsif, aksesibel, dan lolos target Lighthouse.
9. Sediakan konfigurasi global `config/site.ts`.

---

## 11) Catatan untuk Generator Kode

* **Jangan hard‑code nama file**; selalu baca dari manifest.
* Toleransi nama file: terima spasi & huruf besar; normalisasi ke slug saat ditampilkan.
* PDF viewer harus *responsive* (tinggi min. 70vh) + tombol unduh jelas.
* Jika ada ≥2 logo utama yang mirip, pakai yang pertama sebagai brand; sisanya ke LogoWall.
* Unit teks (kota/area/telepon) ambil dari `config/site.ts`.

**Output yang diharapkan:** Repo Next.js yang siap `dev` & `build`, semua aset dari `/src/assets/**` terbaca otomatis, copywriting PT SAN sudah terisi, dan CTA WhatsApp berfungsi.