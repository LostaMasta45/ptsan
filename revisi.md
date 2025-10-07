A) Set warna global shadcn (tanpa ubah struktur)

Buka app/globals.css (atau file yang mendefinisikan CSS variables shadcn).

Ganti nilai var berikut (shadcn pakai format HSL):

:root{
  /* GOLD = primary */
  --primary: 45 65% 52%;            /* ≈ #D4AF37 */
  --primary-foreground: 0 0% 100%;

  /* MERAH = accent */
  --accent: 8 62% 48%;              /* ≈ #9c3424ff */
  --accent-foreground: 0 0% 100%;

  /* optional: ring & brand neutrals */
  --ring: 45 65% 52%;
}

/* Dark mode kontras tetap hangat */
.dark{
  --primary: 45 65% 56%;
  --primary-foreground: 0 0% 10%;
  --accent: 8 62% 56%;
  --accent-foreground: 0 0% 10%;
}


Catatan: shadcn class bg-primary/text-primary-foreground otomatis ikut gold; bg-accent jadi merah.

B) Terapkan ke komponen kunci

CTA Button (Hero & CTA Section)

Pakai variant="default" (itu bg-primary) → jadi gold.

Secondary CTA pakai bg-accent/border-accent → merah.

Link/hover penting → gunakan text-accent saat hover/focus.

Badge/Chips (mis. “Gratis Survey…”) → bg-primary/10 text-primary agar nuansa gold halus.

C) Ganti gradient/strip yang masih biru

Di Hero/top strip, ubah gradient menjadi gold→merah:

/* contoh */
<div className="bg-gradient-to-tr from-primary via-primary/70 to-accent/80 ...">


Hilangkan kelas/hex bernuansa biru/teal yang tersisa (mis. text-teal-*, from-teal-*, #14B8A6).

D) Ikon & outline

Ikon utama/outline kartu: text-primary atau border-primary/40.

Hover state: hover:bg-accent hover:text-accent-foreground untuk tombol sekunder.

E) QA aksesibilitas (cepat)

Pastikan teks putih di bg-primary kontras ≥ 4.5:1; kalau terlihat pucat, turunkan ke emas sedikit lebih gelap: --primary: 45 70% 45%.

Periksa semua halaman utama (Beranda, Layanan, Portofolio): tidak ada lagi kelas teal/sky/blue.