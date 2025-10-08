Tingkatkan UX komponen slider before-after agar lebih interaktif dan tidak tergeser saat scroll.
dibawah ini
🔹 Framework: Next.js + Tailwind + Framer Motion (boleh pakai useState / useEffect).
🔹 Desain tetap clean dan modern sesuai style PT SAN.
🔹 Behavior yang diinginkan:
1. Slider dalam keadaan “terkunci” saat pertama kali muncul.
2. Tampilkan tombol bulat semi transparan di tengah (misalnya berisi ikon ⇆ dan teks “Tap untuk aktifkan”).
3. Saat user klik tombol itu:
   - Slider jadi aktif (bisa digeser).
   - Tombol hilang dengan animasi fade out.
4. Kalau user diam 5 detik (tidak geser):
   - Slider otomatis terkunci lagi.
   - Tombol “Tap untuk aktifkan” muncul kembali.
5. Tambahkan auto animation (ghost swipe) di awal load:
   - Handle bergerak pelan dari kiri ke kanan lalu kembali ke tengah (sekali saja).
   - Gunakan Framer Motion untuk animasi halus (durasi ±2 detik).
6. Tambahkan efek hover ringan di tombol saat belum di-tap.
7. Teks tombol bisa pakai salah satu ini:
   - “✨ Geser untuk lihat hasil”
   - “👆 Tap untuk aktifkan perbandingan”
   - “↔ Lihat perubahan sebelum dan sesudah”
8. Pastikan kompatibel dengan mobile (gesture-friendly).
9. Jangan ubah layout utama slider, hanya tambahkan UX ini.

🎨 Style tambahan:
- Tombol bulat putih semi transparan dengan shadow lembut.
- Gunakan cursor:pointer saat dihover.
- Animasi muncul & hilang pakai fade + scale kecil (0.95 → 1.0).
- Pastikan komponen tetap ringan, tidak menyebabkan lag di mobile.

💡 Tujuan akhirnya:
UX-nya harus terasa “premium” — tidak ganggu saat scroll, tapi memberi kesan cerdas dan halus saat diaktifkan.

