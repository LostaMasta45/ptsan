import { Metadata } from 'next';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: `Kebijakan privasi ${site.brand} menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.`,
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1>Kebijakan Privasi</h1>
        
        <p className="lead">
          Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <p>
          {site.brand} ({site.short}) menghormati privasi Anda dan berkomitmen untuk
          melindungi informasi pribadi yang Anda bagikan dengan kami. Kebijakan
          Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
          melindungi informasi Anda.
        </p>

        <h2>1. Informasi yang Kami Kumpulkan</h2>
        <p>Kami mengumpulkan informasi yang Anda berikan secara langsung, termasuk:</p>
        <ul>
          <li>Nama lengkap</li>
          <li>Nomor telepon/WhatsApp</li>
          <li>Alamat email</li>
          <li>Lokasi proyek</li>
          <li>Detail kebutuhan proyek</li>
        </ul>

        <h2>2. Penggunaan Informasi</h2>
        <p>Informasi yang kami kumpulkan digunakan untuk:</p>
        <ul>
          <li>Merespons pertanyaan dan permintaan Anda</li>
          <li>Menyediakan estimasi biaya dan konsultasi proyek</li>
          <li>Mengkoordinasikan survey lokasi dan pelaksanaan proyek</li>
          <li>Mengirimkan update proyek dan komunikasi terkait layanan</li>
          <li>Meningkatkan kualitas layanan kami</li>
        </ul>

        <h2>3. Perlindungan Informasi</h2>
        <p>
          Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi
          informasi pribadi Anda dari akses, pengungkapan, atau penggunaan yang
          tidak sah. Data Anda disimpan dengan aman dan hanya dapat diakses oleh
          personel yang berwenang.
        </p>

        <h2>4. Pembagian Informasi</h2>
        <p>
          Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi
          Anda kepada pihak ketiga untuk tujuan pemasaran. Informasi hanya
          dibagikan dengan:
        </p>
        <ul>
          <li>Tim internal untuk keperluan pelaksanaan proyek</li>
          <li>Vendor atau kontraktor yang terlibat langsung dalam proyek Anda</li>
          <li>Pihak yang diwajibkan oleh hukum</li>
        </ul>

        <h2>5. Cookie dan Teknologi Pelacakan</h2>
        <p>
          Website kami mungkin menggunakan cookie untuk meningkatkan pengalaman
          pengguna. Anda dapat mengatur browser untuk menolak cookie, namun
          beberapa fitur website mungkin tidak berfungsi optimal.
        </p>

        <h2>6. Hak Anda</h2>
        <p>Anda memiliki hak untuk:</p>
        <ul>
          <li>Mengakses informasi pribadi yang kami simpan</li>
          <li>Meminta koreksi atau penghapusan informasi</li>
          <li>Menarik persetujuan untuk komunikasi pemasaran</li>
          <li>Mengajukan keluhan terkait penggunaan data Anda</li>
        </ul>

        <h2>7. Perubahan Kebijakan</h2>
        <p>
          Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
          Perubahan akan diposting di halaman ini dengan tanggal pembaruan yang
          baru.
        </p>

        <h2>8. Kontak</h2>
        <p>
          Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin
          menggunakan hak-hak Anda, silakan hubungi kami:
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
