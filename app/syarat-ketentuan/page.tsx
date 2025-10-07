import { Metadata } from 'next';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
  description: `Syarat dan ketentuan penggunaan layanan ${site.brand}. Baca ketentuan kerja sama dan layanan kami.`,
};

export default function SyaratKetentuanPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1>Syarat & Ketentuan</h1>
        
        <p className="lead">
          Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <p>
          Syarat dan Ketentuan ini mengatur penggunaan layanan yang disediakan
          oleh {site.brand} ({site.short}). Dengan menggunakan layanan kami,
          Anda menyetujui syarat dan ketentuan berikut.
        </p>

        <h2>1. Layanan</h2>
        <p>{site.short} menyediakan layanan:</p>
        <ul>
          <li>Renovasi rumah dan bangunan komersial</li>
          <li>Konstruksi bangunan baru</li>
          <li>Interior dan finishing</li>
          <li>Jasa drafter dan gambar teknik (CAD)</li>
          <li>Perbaikan dan maintenance</li>
        </ul>

        <h2>2. Proses Kerja Sama</h2>
        <h3>2.1 Konsultasi dan Survey</h3>
        <p>
          Konsultasi awal dan survey lokasi dilakukan tanpa biaya. Setelah
          survey, kami akan menyediakan RAB (Rencana Anggaran Biaya) yang detail.
        </p>

        <h3>2.2 Kontrak Kerja</h3>
        <p>
          Proyek dimulai setelah penandatanganan kontrak kerja dan pembayaran
          down payment sesuai kesepakatan (umumnya 30% dari total nilai proyek).
        </p>

        <h3>2.3 Pelaksanaan</h3>
        <p>
          Pelaksanaan proyek mengikuti timeline yang disepakati dalam kontrak.
          Update progres diberikan secara berkala.
        </p>

        <h2>3. Pembayaran</h2>
        <h3>3.1 Skema Pembayaran</h3>
        <p>Pembayaran umumnya dilakukan dalam termin:</p>
        <ul>
          <li>DP (Down Payment): 30% saat kontrak</li>
          <li>Termin 1: 30% saat progres 30-40%</li>
          <li>Termin 2: 30% saat progres 70-80%</li>
          <li>Pelunasan: 10% saat serah terima</li>
        </ul>
        <p>
          <em>Catatan: Skema dapat disesuaikan berdasarkan kesepakatan dan nilai proyek.</em>
        </p>

        <h3>3.2 Metode Pembayaran</h3>
        <p>Pembayaran dapat dilakukan melalui transfer bank yang akan diinformasikan dalam kontrak.</p>

        <h2>4. Garansi</h2>
        <h3>4.1 Cakupan Garansi</h3>
        <p>
          Kami memberikan garansi hingga 12 bulan untuk pekerjaan struktur dan
          finishing (sesuai S&K). Garansi tidak berlaku untuk:
        </p>
        <ul>
          <li>Kerusakan akibat force majeure (bencana alam, kebakaran, dll.)</li>
          <li>Kerusakan akibat penggunaan yang tidak sesuai</li>
          <li>Modifikasi atau perbaikan oleh pihak lain</li>
          <li>Keausan normal (wear and tear)</li>
        </ul>

        <h3>4.2 Klaim Garansi</h3>
        <p>
          Untuk mengajukan klaim garansi, hubungi kami dengan menyertakan bukti
          sertifikat garansi dan dokumentasi kerusakan. Kami akan merespons dalam
          1x24 jam.
        </p>

        <h2>5. Perubahan Lingkup Kerja (Variation Order)</h2>
        <p>
          Perubahan atau penambahan lingkup kerja di luar kontrak awal (VO) akan
          dibuatkan addendum kontrak dengan perhitungan biaya tambahan yang
          disepakati bersama.
        </p>

        <h2>6. Pembatalan dan Penundaan</h2>
        <h3>6.1 Pembatalan oleh Klien</h3>
        <p>
          Jika klien membatalkan proyek setelah kontrak ditandatangani, biaya
          yang telah dikeluarkan (material, mobilisasi, dll.) akan diperhitungkan
          dan down payment tidak dapat dikembalikan.
        </p>

        <h3>6.2 Penundaan</h3>
        <p>
          Penundaan proyek oleh klien dapat menyebabkan penyesuaian timeline dan
          biaya tambahan jika diperlukan remobilisasi.
        </p>

        <h2>7. Tanggung Jawab</h2>
        <p>
          {site.short} bertanggung jawab atas kualitas pekerjaan sesuai standar
          yang disepakati. Klien bertanggung jawab untuk:
        </p>
        <ul>
          <li>Menyediakan akses lokasi yang memadai</li>
          <li>Memastikan legalitas perizinan (jika diperlukan)</li>
          <li>Pembayaran sesuai jadwal yang disepakati</li>
        </ul>

        <h2>8. Kerahasiaan</h2>
        <p>
          Kedua belah pihak setuju untuk menjaga kerahasiaan informasi yang
          diperoleh selama proses kerja sama.
        </p>

        <h2>9. Penyelesaian Sengketa</h2>
        <p>
          Setiap perselisihan akan diselesaikan secara musyawarah. Jika tidak
          tercapai, penyelesaian akan dilakukan melalui jalur hukum yang berlaku
          di Indonesia.
        </p>

        <h2>10. Perubahan Syarat & Ketentuan</h2>
        <p>
          {site.short} berhak mengubah Syarat & Ketentuan ini sewaktu-waktu.
          Perubahan akan diinformasikan melalui website dan berlaku untuk proyek
          baru setelah tanggal perubahan.
        </p>

        <h2>11. Kontak</h2>
        <p>
          Untuk pertanyaan lebih lanjut mengenai Syarat & Ketentuan ini, silakan
          hubungi:
        </p>
        <ul>
          <li>Email: {site.email}</li>
          <li>WhatsApp: <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">Chat via WhatsApp</a></li>
          <li>Alamat: {site.address}</li>
        </ul>
      </div>
    </div>
  );
}
