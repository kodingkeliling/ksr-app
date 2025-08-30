export interface TeamMember {
  name: string;
  position: string;
  image?: string;
}

export interface Unit {
  name: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "KSR UNPAS",
  fullName: "Korps Sukarela Universitas Pasundan",
  tagline: "Melayani dengan Hati, Mengabdi untuk Masyarakat",
  description: "KSR UNPAS adalah unit kegiatan mahasiswa Universitas Pasundan yang bergerak di bidang kemanusiaan dan kepalangmerahan.",
  address: "Jl. Tamansari No. 6-8, Kota Bandung, Jawa Barat, Indonesia",
  phone: "Ilma Hasna",
  email: "ksr@unpas.ac.id",
  instagram: "@ksrunpas",
  youtube: "KSR UNPAS Official"
};

export const heroSection = {
  title: "KSR UNPAS",
  subtitle: "Korps Sukarela Universitas Pasundan",
  description: "Melayani dengan Hati, Mengabdi untuk Masyarakat",
  ctaText: "Daftar Sekarang",
  ctaLink: "#daftar"
};

export const aboutSection = {
  title: "Tentang Kami",
  subtitle: "Korps Sukarela Universitas Pasundan",
  description: `KSR UNPAS adalah unit kegiatan mahasiswa Universitas Pasundan yang bergerak di bidang kemanusiaan dan kepalangmerahan. 
  
  Berdiri sejak tahun 1980, KSR UNPAS telah berkomitmen untuk melayani masyarakat melalui berbagai kegiatan sosial, pelatihan pertolongan pertama, donor darah, dan program kemanusiaan lainnya.
  
  Sebagai bagian dari Palang Merah Indonesia, kami berdedikasi untuk membantu sesama dalam keadaan darurat dan membangun kesadaran masyarakat akan pentingnya pertolongan pertama.`,
  stats: [
    { number: "500+", label: "Anggota Aktif" },
    { number: "1000+", label: "Kegiatan Sosial" },
    { number: "50+", label: "Pelatihan Pertolongan Pertama" },
    { number: "10000+", label: "Donor Darah" }
  ]
};

export const units: Unit[] = [
  {
    name: "Pertolongan Pertama",
    description: "Unit yang fokus pada pelatihan dan pelaksanaan pertolongan pertama dalam keadaan darurat.",
    icon: "🩹"
  },
  {
    name: "Donor Darah",
    description: "Unit yang mengelola dan mengkoordinasikan kegiatan donor darah untuk membantu kebutuhan darah di masyarakat.",
    icon: "🩸"
  },
  {
    name: "Kesehatan Masyarakat",
    description: "Unit yang melakukan penyuluhan dan edukasi kesehatan kepada masyarakat luas.",
    icon: "🏥"
  },
  {
    name: "Penanggulangan Bencana",
    description: "Unit yang siap siaga dalam penanggulangan bencana dan keadaan darurat.",
    icon: "🚨"
  },
  {
    name: "Pelatihan & Edukasi",
    description: "Unit yang menyelenggarakan berbagai pelatihan dan program edukasi kemanusiaan.",
    icon: "📚"
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Boby Ilham",
    position: "Ketua Umum"
  },
  {
    name: "Aditya Maulana",
    position: "Ketua 1"
  },
  {
    name: "Tubagus Aji",
    position: "Ketua 2"
  },
  {
    name: "Fajar Ramadhan",
    position: "Ketua 3"
  },
  {
    name: "Khairunnisa Aulia",
    position: "Sekretaris Umum"
  },
  {
    name: "Awalya Ramadhani",
    position: "Bendahara Umum"
  },
  {
    name: "Krisna Agum",
    position: "Koordinator Pertolongan Pertama"
  },
  {
    name: "Kitti Pittriyani",
    position: "Wakil Koordinator Pertolongan Pertama"
  },
  {
    name: "Naufal Ariq",
    position: "Koordinator Donor Darah"
  },
  {
    name: "Putri Humaira",
    position: "Wakil Koordinator Donor Darah"
  },
  {
    name: "Naufal Rafli",
    position: "Koordinator Kesehatan Masyarakat"
  },
  {
    name: "Nabilla Aurellia",
    position: "Wakil Koordinator Kesehatan Masyarakat"
  },
  {
    name: "Alpa Reja",
    position: "Koordinator Penanggulangan Bencana"
  },
  {
    name: "Wahyu Dimas",
    position: "Koordinator Pelatihan & Edukasi"
  },
  {
    name: "Abyan Zhorif",
    position: "Sarana Prasarana"
  },
  {
    name: "Ferdiansah S",
    position: "Digital Content"
  },
  {
    name: "Muhammad Rofi",
    position: "Humas Internal"
  },
  {
    name: "Ilma Hasna",
    position: "Humas Eksternal"
  }
];

export const faqs: FAQ[] = [
  {
    question: "Cara daftar KSR UNPAS gimana sih?",
    answer: "Gampang kok, buat penjelasan lebih detailnya, cek ig @ksrunpas"
  },
  {
    question: "KSR UNPAS tuh apaan sih?",
    answer: "KSR UNPAS adalah sebuah unit kegiatan mahasiswa(UKM) yang bergerak di bidang kemanusiaan dan kepalangmerahan"
  },
  {
    question: "Kegiatan di KSR UNPAS ngapain aja?",
    answer: "Selain yang pastinya berkemanusiaan, di KSR UNPAS juga kita belajar berorganisasi dan pertolongan pertama"
  },
  {
    question: "Masuk KSR UNPAS dapet apa aja?",
    answer: "Masuk KSR UNPAS kalian bakal dapetin keluarga baru, selain itu kalian juga bisa ngegunain fasilitas yang lengkap di KSR UNPAS"
  },
  {
    question: "Di KSR UNPAS ada kepengurusannya gak?",
    answer: "Ada, di KSR UNPAS kepengurusannya berganti setiap satu periode, satu periode selama satu tahun"
  },
  {
    question: "KSR UNPAS kegiatannya apa aja?",
    answer: "Di KSR UNPAS ada 5 unit kegiatan: Pertolongan Pertama, Donor Darah, Kesehatan Masyarakat, Penanggulangan Bencana, dan Pelatihan & Edukasi"
  }
];

export const registrationSection = {
  title: "Pendaftaran Anggota Baru",
  subtitle: "UDAH DIBUKA NIH!",
  description: "Bergabunglah dengan KSR UNPAS dan jadilah bagian dari keluarga besar yang melayani dengan hati",
  ctaText: "Daftar Sekarang",
  ctaLink: "#daftar"
};

export const contactInfo = {
  address: "Jl. Tamansari No. 6-8, Kota Bandung, Jawa Barat, Indonesia",
  phone: "Ilma Hasna",
  email: "ksr@unpas.ac.id",
  instagram: "@ksrunpas",
  youtube: "KSR UNPAS Official"
};
