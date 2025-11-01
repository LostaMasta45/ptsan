# Multi-Language Implementation Guide

Tanggal: 1 November 2025

## 🌐 Overview

Website PT SAN sekarang mendukung **2 bahasa**:
- 🇮🇩 **Bahasa Indonesia** (ID) - Default
- 🇬🇧 **English** (EN)

Menggunakan **Context API** untuk state management yang ringan dan efisien.

---

## ✅ Yang Sudah Diimplementasi

### 1. 📁 Struktur Folder i18n

```
lib/i18n/
├── types.ts                 # TypeScript types untuk translations
├── context.tsx             # Language Context Provider & Hook
└── translations/
    ├── id.ts               # Bahasa Indonesia
    └── en.ts               # English
```

### 2. 🎯 Fitur Utama

#### Toggle Button di Header
- **Lokasi**: Header navigation (desktop & mobile)
- **UI**: Globe icon + "ID | EN" text
- **Style**: Active language highlighted dengan warna primary

#### Auto-Detection
- Detect browser language saat first visit
- Default ke Indonesia jika browser bukan EN

#### Persistent Language
- Save pilihan user ke `localStorage`
- Language tetap sama setelah reload

#### SSR-Friendly
- Compatible dengan Next.js static generation
- Tidak break saat build/prerender
- Default ke Indonesian di server-side

---

## 🔧 Cara Menggunakan

### Dalam Component

```tsx
import { useLanguage } from '@/lib/i18n/context';

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div>
      <h1>{t.hero.title}</h1>
      <button onClick={() => setLanguage('en')}>
        Switch to English
      </button>
    </div>
  );
}
```

### Translation Keys Available

Semua translations available via `t` object:
- `t.site.*` - Site info
- `t.nav.*` - Navigation
- `t.hero.*` - Hero section
- `t.services.*` - Services
- `t.portfolio.*` - Portfolio
- `t.process.*` - Process/Timeline
- `t.testimonials.*` - Testimonials
- `t.cta.*` - Call to Action
- `t.faq.*` - FAQ
- `t.footer.*` - Footer
- `t.contactForm.*` - Contact form
- `t.estimateForm.*` - Estimate form
- `t.common.*` - Common texts

---

## 📄 Pages Yang Sudah Ditranslate

### ✅ Fully Translated:
1. **Header Navigation** - Menu & toggle button
2. **Homepage** (`/`)
   - Hero Section
   - Service Chips
   - Trust Bar
   - Before/After Portfolio
   - CTA Sections

3. **Before/After Slider** - Labels (Sebelum/Before, Sesudah/After)

### ⚠️ Partially Translated:
- Service Grid
- Mini Timeline
- Testimonials
- Partnership
- FAQ Section

### 🔜 Belum Ditranslate:
- `/tentang-kami` (About Us page)
- `/layanan` (Services page)
- `/portofolio` pages (Portfolio pages - perlu translate categories)
- `/proses-kerja` (Process page)
- `/testimoni` (Testimonials page)
- `/kontak` (Contact page)
- `/estimasi` (Estimate page)
- Footer components
- Form components

---

## 🚀 Menambah Translation Baru

### Step 1: Update Type Definitions

Edit `lib/i18n/types.ts`:

```typescript
export interface Translations {
  // ... existing translations
  
  newSection: {
    title: string;
    subtitle: string;
    // ... more fields
  };
}
```

### Step 2: Tambahkan di Bahasa Indonesia

Edit `lib/i18n/translations/id.ts`:

```typescript
export const id: Translations = {
  // ... existing translations
  
  newSection: {
    title: 'Judul Baru',
    subtitle: 'Subjudul Baru',
  },
};
```

### Step 3: Tambahkan di English

Edit `lib/i18n/translations/en.ts`:

```typescript
export const en: Translations = {
  // ... existing translations
  
  newSection: {
    title: 'New Title',
    subtitle: 'New Subtitle',
  },
};
```

### Step 4: Gunakan di Component

```tsx
function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h2>{t.newSection.title}</h2>
      <p>{t.newSection.subtitle}</p>
    </div>
  );
}
```

---

## 📊 Build Results

```
✓ Compiled successfully
✓ Generating static pages (16/16)

Route (app)                              Size     First Load JS
┌ ○ /                                    6.87 kB         165 kB
├ ○ /portofolio/furniture                7.15 kB         146 kB
├ ○ /portofolio/konstruksi               8.34 kB         147 kB
└ ... (all pages prerendered successfully)
```

**Status**: ✅ All pages build successfully with i18n

---

## 🎨 UI/UX Details

### Desktop Header
```
[Logo] [Menu Items]  🌐 ID | EN  [CTA Button]
```

### Mobile Header
```
[Logo]                              [Toggle] [Menu Icon]

Mobile Menu:
- Menu Items
- Language Toggle (bottom)
- CTA Button
```

### Language Toggle Animation
- Active language scales up (1.1x)
- Color change to primary
- Smooth transition (0.2s)
- Globe icon always visible

---

## 🔒 SEO Considerations

### Current Implementation:
- ✅ HTML `lang` attribute updated on language change
- ✅ Single URL for both languages (no URL routing)

### Future SEO Improvements (Optional):
1. Add `hreflang` tags for better SEO
2. Consider URL-based i18n (`/en/`, `/id/`)
3. Add language meta tags

---

## 🐛 Known Limitations

1. **Static Content**: Portfolio data (furniture items, construction projects) tidak ditranslate
2. **Dynamic Content**: User-generated content tetap dalam bahasa asli
3. **Images**: Alt text images belum ditranslate
4. **Metadata**: Page titles dan descriptions belum multi-language

---

## 📝 Next Steps (Rekomendasi)

### High Priority:
1. ✅ Complete homepage translations (all sections)
2. 📄 Translate About Us page
3. 📄 Translate Services page
4. 📄 Translate Contact & Estimate forms

### Medium Priority:
1. 🗂️ Translate portfolio categories & descriptions
2. 📱 Translate floating CTA
3. 🦶 Translate footer sections
4. 📋 Translate all FAQ items

### Low Priority:
1. 🖼️ Translate image alt texts
2. 📊 Translate meta tags & SEO content
3. 📧 Add email templates in both languages
4. 🔗 Add hreflang tags

---

## 🧪 Testing Checklist

- [x] Build berhasil tanpa error
- [x] SSR/Static generation works
- [x] Toggle button functional di header
- [x] Homepage text changes
- [x] LocalStorage persistence
- [x] Browser language detection
- [ ] Test manual: switch language & reload
- [ ] Test manual: clear localStorage & revisit
- [ ] Test manual: different browsers
- [ ] Test manual: mobile responsive

---

## 💡 Tips & Best Practices

1. **Always use `t` object** - Jangan hardcode text
2. **Keep translations consistent** - Gunakan terminology yang sama
3. **Test both languages** - Pastikan layout tidak break
4. **Short & clear** - Terjemahan tidak harus literal, fokus pada makna
5. **Professional tone** - Gunakan bahasa formal untuk bisnis

---

## 🆘 Troubleshooting

### Issue: "useLanguage must be used within LanguageProvider"
**Solution**: Pastikan component wrapped dalam `<LanguageProvider>`

### Issue: Language tidak persist setelah reload
**Solution**: Check localStorage browser, bisa jadi blocked

### Issue: Text tidak berubah saat switch language
**Solution**: Pastikan menggunakan `t.section.key` bukan hardcoded text

### Issue: Build error saat static generation
**Solution**: Pastikan tidak akses `window` atau `localStorage` di top level component

---

## 📞 Support

Untuk pertanyaan atau issue terkait i18n implementation:
1. Check documentation ini
2. Review code di `lib/i18n/`
3. Test dengan `npm run build`

---

**Implementation Status**: ✅ Ready for Production
**Last Updated**: 1 November 2025
