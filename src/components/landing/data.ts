import tplMatcha from "@/assets/tpl-matcha.jpg";
import tplButterfly from "@/assets/tpl-butterfly.jpg";
import tplFloral from "@/assets/tpl-floral.jpg";
import tplMinimalist from "@/assets/tpl-minimalist.jpg";
import tplKorean from "@/assets/tpl-korean.jpg";
import tplRustic from "@/assets/tpl-rustic.jpg";
import tplLuxury from "@/assets/tpl-luxury.jpg";
import tplTraditional from "@/assets/tpl-traditional.jpg";
import tplModern from "@/assets/tpl-modern.jpg";
import tplIslamic from "@/assets/tpl-islamic.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Template", href: "#template" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

export type Template = {
  name: string;
  category: string;
  categoryKey: string;
  desc: string;
  image: string;
  couple: string;
};

export const categories = [
  "Semua",
  "Minimalis",
  "Floral",
  "Elegant",
  "Islamic",
  "Korean",
  "Rustic",
  "Luxury",
  "Traditional",
  "Modern",
];

export const templates: Template[] = [
  {
    name: "Matcha Botanical",
    category: "Floral",
    categoryKey: "Floral",
    desc: "Hijau sage lembut dengan dedaunan cat air yang menenangkan.",
    image: tplMatcha,
    couple: "Arya & Nadia",
  },
  {
    name: "Blue Butterfly",
    category: "Elegant",
    categoryKey: "Elegant",
    desc: "Biru pastel dengan kupu-kupu halus, ringan dan romantis.",
    image: tplButterfly,
    couple: "Bagas & Sekar",
  },
  {
    name: "Classic Floral",
    category: "Floral",
    categoryKey: "Floral",
    desc: "Mawar klasik nuansa blush cream untuk kesan timeless.",
    image: tplFloral,
    couple: "Dimas & Ayu",
  },
  {
    name: "Minimalist Beige",
    category: "Minimalis",
    categoryKey: "Minimalis",
    desc: "Bersih, luas, dan tenang. Fokus penuh pada nama kalian.",
    image: tplMinimalist,
    couple: "Reza & Kirana",
  },
  {
    name: "Korean Blossom",
    category: "Korean",
    categoryKey: "Korean",
    desc: "Pink lembut ala Korea dengan sentuhan sakura modern.",
    image: tplKorean,
    couple: "Yudha & Mira",
  },
  {
    name: "Rustic Amber",
    category: "Rustic",
    categoryKey: "Rustic",
    desc: "Cokelat hangat, bunga kering, dan tekstur kraft yang cozy.",
    image: tplRustic,
    couple: "Ilham & Tari",
  },
  {
    name: "Luxury Black Gold",
    category: "Luxury",
    categoryKey: "Luxury",
    desc: "Hitam pekat berpadu garis emas. Mewah dan berkelas.",
    image: tplLuxury,
    couple: "Farrel & Vania",
  },
  {
    name: "Traditional Jawa",
    category: "Traditional",
    categoryKey: "Traditional",
    desc: "Merah marun dan ornamen emas khas adat Nusantara.",
    image: tplTraditional,
    couple: "Bimo & Larasati",
  },
  {
    name: "Modern Monochrome",
    category: "Modern",
    categoryKey: "Modern",
    desc: "Tipografi tegas, grid editorial, hitam putih yang berani.",
    image: tplModern,
    couple: "Adit & Nayla",
  },
  {
    name: "Islamic Emerald",
    category: "Islamic",
    categoryKey: "Islamic",
    desc: "Hijau zamrud dan ornamen emas dengan nuansa syar'i.",
    image: tplIslamic,
    couple: "Fikri & Zahra",
  },
];

export const featureGroups = [
  {
    title: "Tamu & Penyebaran",
    caption: "Kelola dan sebar undangan tanpa batas.",
    items: [
      "Sebar & Ubah Nama Tamu Tanpa Batas",
      "Ubah Nama Tamu Unlimited",
      "Tanpa Masa Aktif",
      "Sebar Ke Unlimited Penerima",
      "QRCode Buku Tamu",
      "Layar Sapa & Check-in Tamu",
      "Laporan Statistik Sebar",
      "Balas Ucapan Tamu",
    ],
  },
  {
    title: "Acara",
    caption: "Semua detail hari-H tersampaikan rapi.",
    items: [
      "RSVP & Ucapan",
      "Terintegrasi Google Maps",
      "Embed Map Lokasi Acara",
      "Countdown Menuju Hari-H",
      "Pengingat Google Calendar",
      "Link Live Streaming",
      "Love Story & Susunan Acara",
      "Fitur Turut Mengundang",
    ],
  },
  {
    title: "Visual & Kustomisasi",
    caption: "Bebas atur tampilan sesuai selera.",
    items: [
      "Bebas Ganti Ke Semua Tema",
      "Ubah Font dan Warna Tulisan",
      "Kostumisasi Tema Undangan",
      "Ratusan Music Bisa Custom",
      "Fitur Auto Scroll",
      "Foto Galery & Video",
      "Ubah Susunan Komponen",
      "Request Tema Baru",
    ],
  },
  {
    title: "Hadiah & Kado",
    caption: "Terima hadiah dengan cara yang sopan.",
    items: ["Rekening Titip Hadiah", "Titip Kado Fisik Ke Acara", "Gift Virtual Di Undangan"],
  },
  {
    title: "Layanan",
    caption: "Kami siap bantu sampai undangan jadi.",
    items: [
      "Terima Beres Dibuatin Admin",
      "Unlimited Revisi Sepuasnya",
      "Tanpa Masa Aktif",
      "Bantuan Via WhatsApp",
      "Panduan Lengkap Penggunaan",
    ],
  },
];

export const faqs = [
  {
    q: "Apakah benar mulai Rp15.000?",
    a: "Benar. Paket termurah kami dimulai dari Rp15.000 untuk satu undangan digital aktif selamanya. Harga bisa berbeda untuk tema dan paket dengan fitur tambahan.",
  },
  {
    q: "Apakah nama tamu unlimited?",
    a: "Ya. Kamu bebas menambah dan mengubah nama tamu sebanyak apa pun, kapan pun, tanpa biaya tambahan.",
  },
  {
    q: "Apakah ada masa aktif?",
    a: "Tidak ada. Undangan kamu tetap bisa diakses setelah acara selesai, jadi bisa disimpan sebagai kenangan.",
  },
  {
    q: "Bisa ganti tema setelah pembelian?",
    a: "Bisa. Kamu bebas berpindah ke tema lain yang tersedia tanpa perlu membeli ulang undangan.",
  },
  {
    q: "Bisa request tema baru?",
    a: "Bisa. Kirimkan referensi desain yang kamu suka, tim kami akan bantu menyesuaikan sesuai kebutuhan.",
  },
  {
    q: "Bisa dibantu admin?",
    a: "Tentu. Cukup kirim data acara dan foto, admin kami yang akan membuatkan undangannya sampai siap dibagikan.",
  },
  {
    q: "Apakah bisa custom musik?",
    a: "Bisa. Tersedia ratusan pilihan musik dan kamu juga bisa mengajukan lagu favorit kalian sendiri.",
  },
  {
    q: "Apakah undangan bisa dibuka di HP?",
    a: "Bisa. Semua tema responsive dan nyaman dibuka di HP, tablet, maupun laptop tanpa perlu instal aplikasi.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Pembayaran dilakukan setelah kamu memilih template. Metode pembayaran akan dikonfirmasi langsung oleh admin kami.",
  },
  {
    q: "Apakah bisa revisi?",
    a: "Bisa, dan tanpa batas. Selama data yang diubah masih dalam lingkup undangan kamu, revisi bebas dilakukan.",
  },
];

export const testimonials = [
  {
    name: "Salsabila R.",
    role: "Pengantin",
    rating: 5,
    text: "Desainnya cantik banget dan harganya nggak masuk akal murahnya. Tamu banyak yang nanya bikin di mana.",
  },
  {
    name: "Rangga & Dewi",
    role: "Pengantin",
    rating: 5,
    text: "Nama tamu bisa diganti terus tanpa ribet. Sebar ke ratusan orang lancar semua.",
  },
  {
    name: "Nabila Putri",
    role: "Wedding Organizer",
    rating: 5,
    text: "Sering pakai untuk klien. Pilihan temanya banyak jadi gampang menyesuaikan konsep acara.",
  },
  {
    name: "Aditya P.",
    role: "Pengantin",
    rating: 5,
    text: "Sempat bingung karena nggak bisa desain, akhirnya dibuatin admin. Sehari jadi.",
  },
  {
    name: "Kirana Ayu",
    role: "Pengantin",
    rating: 5,
    text: "Fitur RSVP dan buku tamu QR-nya sangat membantu saat hari-H. Rapi banget.",
  },
  {
    name: "Fahmi & Laras",
    role: "Pengantin",
    rating: 5,
    text: "Undangannya masih bisa dibuka sampai sekarang. Jadi kenangan yang manis.",
  },
];

export const blogPosts = [
  {
    title: "Tips Memilih Undangan Digital",
    excerpt: "Lima hal penting yang sering terlewat sebelum kamu memutuskan tema undangan.",
    image: blog1,
    tag: "Panduan",
    date: "12 Feb 2026",
  },
  {
    title: "Cara Membuat Daftar Tamu",
    excerpt: "Susun daftar tamu rapi agar penyebaran undangan jadi jauh lebih cepat.",
    image: blog2,
    tag: "Tips",
    date: "28 Jan 2026",
  },
  {
    title: "Inspirasi Tema Undangan 2026",
    excerpt: "Dari minimalis beige sampai luxury black, ini palet yang sedang naik daun.",
    image: blog3,
    tag: "Inspirasi",
    date: "05 Jan 2026",
  },
];

export const comparison = [
  { aspect: "Harga Mulai", us: "Rp15.000", them: "Rp50.000+" },
  { aspect: "Nama Tamu", us: "Unlimited", them: "Terbatas paket" },
  { aspect: "Penerima", us: "Unlimited", them: "Terbatas paket" },
  { aspect: "Masa Aktif", us: "Selamanya", them: "Biasanya 30–90 hari" },
  { aspect: "RSVP & Ucapan", us: "Termasuk", them: "Sering paket atas" },
  { aspect: "Google Maps", us: "Termasuk", them: "Tergantung paket" },
  { aspect: "Galeri Foto & Video", us: "Termasuk", them: "Tergantung paket" },
  { aspect: "Musik Custom", us: "Ratusan pilihan", them: "Terbatas" },
  { aspect: "Amplop & Kado Digital", us: "Termasuk", them: "Tergantung paket" },
  { aspect: "Kustomisasi Tema", us: "Bebas ganti tema", them: "Umumnya terkunci" },
  { aspect: "Revisi", us: "Unlimited", them: "Dibatasi" },
];
