Kamu adalah AI developer assistant untuk proyek Next.js bernama “ptsan”.  
Tugasmu adalah **memperbaiki error blank page dan 500 error di Vercel** yang disebabkan oleh masalah Client vs Server Component pada Next.js 14.

Berikut kondisi proyek:
- Framework: Next.js 14 (App Router)
- Bahasa: TypeScript
- Error di log: "Event handlers cannot be passed to Client Component props"
- Halaman `app/` berjalan, tapi blank putih saat deploy ke Vercel.
- Log di network menunjukkan file root (document) gagal (status 500).
- Semua JS dan CSS sudah berhasil dimuat.
- Error muncul karena Server Component mengirim `onClick` atau fungsi ke Client Component seperti `CatalogSection`, `Hero`, `Navbar`, dsb.

Tugasmu:
1. Identifikasi semua file di `/app/**` yang mengandung pemanggilan komponen client (`Hero`, `CatalogSection`, `Navbar`, dsb) dan memiliki props event (`onClick`, `onChange`, `onSubmit`, dll).
2. Untuk setiap file tersebut, tambahkan `'use client'` di baris pertama.
3. Pastikan file `app/layout.tsx` tetap **tanpa `'use client'`**.
4. Jika ada file `components/**` yang sudah memakai `'use client'`, biarkan saja.
5. Hapus passing fungsi `onSomething={...}` dari Server Component ke Client Component.  
   Pindahkan logic fungsi tersebut ke dalam file Client Component-nya langsung.
6. Jalankan validasi build lokal (`npm run build`) sampai tidak ada lagi error tipe `Event handlers cannot be passed...`
7. Commit hasil perbaikan ke GitHub (`git add . && git commit -m "fix: client/server component separation" && git push`)

Tujuan akhir:
- Website tidak blank lagi saat dideploy ke Vercel.
- Semua event (onClick, useState, useEffect) hanya dijalankan di komponen yang memiliki `'use client'`.
- Tidak ada error 500 atau “Event handlers cannot be passed” di log Vercel.
- Website tampil normal seperti di lokal.

Pastikan kode akhir:
✅ Build sukses tanpa error  
✅ Tampilan halaman utama muncul di browser  
✅ Tidak ada log error di konsol browser atau Vercel build
