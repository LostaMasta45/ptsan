# Image Protection - PT SAN Website

## Fitur Proteksi yang Diimplementasikan

### 1. **Disable Right-Click pada Gambar**
   - User tidak bisa klik kanan pada gambar untuk "Save Image As..."
   - Hanya berlaku pada gambar, area lain website masih bisa di-klik kanan

### 2. **Disable Drag & Drop**
   - Gambar tidak bisa di-drag keluar dari browser
   - Mencegah drag-and-drop gambar ke desktop atau folder lain

### 3. **Disable Keyboard Shortcuts**
   - `Ctrl+S` / `Cmd+S` - Tidak bisa save page
   - `F12` - Developer Tools diblokir
   - `Ctrl+Shift+I` - Inspect Element diblokir
   - `Ctrl+U` - View Source diblokir

### 4. **CSS Protection**
   - User tidak bisa select/highlight gambar
   - Copy-paste gambar di-disable
   - Touch-callout di-disable (untuk mobile)
   - Selection background transparent

### 5. **Cross-Browser Support**
   - ✅ Chrome/Edge
   - ✅ Firefox
   - ✅ Safari
   - ✅ Opera
   - ✅ Mobile browsers

## Files Modified

1. **`components/image-protection.tsx`** (NEW)
   - Client-side component untuk handle event listeners
   - Menangani right-click, drag, dan keyboard shortcuts

2. **`app/layout.tsx`**
   - Menambahkan `<ImageProtection />` component

3. **`app/globals.css`**
   - Menambahkan CSS rules untuk proteksi gambar
   - Styling untuk disable selection dan drag

## Cara Kerja

### JavaScript Protection
```typescript
// Disable right-click pada gambar
document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

// Disable drag gambar
document.addEventListener('dragstart', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

// Disable shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl+S, F12, Ctrl+Shift+I, Ctrl+U
  // Semua di-prevent
});
```

### CSS Protection
```css
img {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
}
```

## Keterbatasan Proteksi

⚠️ **PENTING: Proteksi ini TIDAK 100% foolproof!**

User yang mahir masih bisa:
1. **Screenshot** - Menggunakan Print Screen / screenshot tools
2. **Inspect Element** - Jika berhasil bypass JavaScript protection
3. **View Source Code** - Akses langsung ke image URLs
4. **Disable JavaScript** - Proteksi JavaScript tidak akan berfungsi
5. **Browser Extensions** - Tools seperti image downloader extensions
6. **Network Tab** - Lihat semua assets yang di-load
7. **Mobile Screenshot** - Screenshot dari mobile device

## Best Practices Tambahan

### Untuk Proteksi Lebih Maksimal:

1. **Watermark** (Recommended)
   - Tambahkan watermark/logo pada gambar
   - Letakkan di posisi yang sulit di-crop

2. **Reduce Image Quality**
   - Upload gambar dengan resolusi lebih rendah
   - Cukup untuk preview, tidak untuk print

3. **Image Compression**
   - Compress gambar untuk mengurangi kualitas download
   - Tetap terlihat bagus di web

4. **Lazy Loading**
   - Sudah diimplementasi via Next.js Image
   - Gambar hanya load saat diperlukan

5. **Server-side Protection**
   - Hotlink protection
   - Rate limiting untuk image access
   - Requires server configuration

## Testing Protection

### Manual Testing:
1. ✅ Klik kanan pada gambar → Should be disabled
2. ✅ Try to drag gambar → Should not work
3. ✅ Press F12 → Should be prevented
4. ✅ Press Ctrl+S → Should be prevented
5. ✅ Try to select gambar → Should not highlight
6. ✅ Long press pada mobile → Menu tidak muncul

### Browser DevTools:
- Jika user membuka DevTools dengan cara lain
- Mereka masih bisa akses image URLs
- Ini adalah keterbatasan inherent dari web

## Rekomendasi

Untuk konten yang sangat sensitif:
1. **Jangan upload versi high-res** ke web
2. **Gunakan watermark** yang jelas
3. **Consider PDF protection** untuk dokumen penting
4. **Authentication & Authorization** untuk akses gambar
5. **CDN dengan signed URLs** untuk extra security

---

**Note:** Proteksi ini sudah cukup untuk mencegah user rata-rata dari download gambar secara casual. Namun, tidak ada proteksi client-side yang 100% aman.
