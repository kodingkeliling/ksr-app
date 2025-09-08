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
  phone: "085624956109",
  email: "ksrunpas88@gmail.com",
  instagram: "@ksrunpas",
  youtube: "KSR UNPAS"
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
  description: `Korps Sukarela (KSR) Palang Merah Indonesia merupakan
  unit kegiatan yang bergerak dalam kepalangmerahan yang sejalan dengan 
  tridarma perguruan tinggi. Korps Sukarela Palang Merah Indonesia Unit 
  Universitas Pasundan Bandung merupakan satu kesatuan dalam perhimpunan 
  Palang Merah Indonesia untuk membentuk insan akademis yang memiliki jiwa 
  kemanusian. Korps Sukarela Palang Merah Indonesia Unit Universitas Pasundan
  Bandung dibentuk atas dasar kesadaran dan kesukarelaan pribadi mahasiswa 
  untuk menjaga anggota Korps Sukarela Palang Merah Indonesia Unit Universitas
  Pasundan Bandung yang sesuai dengan asas kepalangmerahan.`
};


// DPH (Dewan Pengurus Harian)
export const dphMembers: TeamMember[] = [
  {
    name: "Muhamad Rafa Rizkiansyah",
    position: "Komandan",
    image: "/img/team-ksr/Komandan-Muhamad_Rafa_Rizkiansyah.jpg"
  },
  {
    name: "Naisya Dzahrani Putri",
    position: "Wakil Komandan",
    image: "/img/team-ksr/Wakil_Komandan-Naisya_Dzahrani_Putri.jpg"
  },
  {
    name: "Tufi 'Afiati",
    position: "Sekretaris",
    image: "/img/team-ksr/Sekretaris-Tufi_'Afiati.jpg"
  },
  {
    name: "Sinta Sintia Sari",
    position: "Bendahara",
    image: "/img/team-ksr/Bendahara-Sinta_Sintia_Sari.jpg"
  }
];

// Bidang HUMAS
export const humasMembers: TeamMember[] = [
  {
    name: "Hari Saputra",
    position: "Koordinator HUMAS",
    image: "/img/team-ksr/Koordinator_HUMAS-Hari_Saputra.jpg"
  },
  {
    name: "Moh. Haikal Mubarok",
    position: "Anggota HUMAS",
    image: "/img/team-ksr/Anggota_HUMAS-Moh._Haikal_Mubarok.jpg"
  }
];

// Bidang DIKLAT
export const diklatMembers: TeamMember[] = [
  {
    name: "Rifqi Hadiansyah",
    position: "Koordinator Bidang DIKLAT",
    image: "/img/team-ksr/Koordinator_Bidang_DIKLAT-Rifqi_Hadiansyah.jpg"
  },
  {
    name: "Rahmah Ayu Azzahra",
    position: "Anggota Bidang DIKLAT",
    image: "/img/team-ksr/Anggota_Bidang_DIKLAT-Rahmah_Ayu_Azzahra.jpg"
  }
];

// Bidang LITBANG
export const litbangMembers: TeamMember[] = [
  {
    name: "Humaira Syahla Ayu Hanifa",
    position: "Koordinator Bidang LITBANG",
    image: "/img/team-ksr/Koordinator_Bidang_LITBANG-Humaira_Syahla_Ayu_Hanifa.jpg"
  },
  {
    name: "Hanina Dzikriya",
    position: "Anggota Bidang LITBANG",
    image: "/img/team-ksr/Anggota_Bidang_LITBANG-Hanina_Dzikriya.jpg"
  },
  {
    name: "Sheila Yolanda Meron",
    position: "Anggota Bidang LITBANG",
    image: "/img/team-ksr/Anggota_Bidang_LITBANG-Sheila_Yolanda_Meron.jpg"
  }
];

// Bidang PPM
export const ppmMembers: TeamMember[] = [
  {
    name: "Nada Rohadatula'isy Asyikin",
    position: "Koordinator Bidang PPM",
    image: "/img/team-ksr/Koordinator_Bidang_PPM-Nada_Rohadatula'isy_Asyikin.jpg"
  },
  {
    name: "Risma Diana",
    position: "Anggota Bidang PPM",
    image: "/img/team-ksr/Anggota_Bidang_PMM-Risma_Diana.jpg"
  }
];

// Bidang SAPRAS
export const saprasMembers: TeamMember[] = [
  {
    name: "Ika Laksami Maheswari",
    position: "Koordinator Bidang SAPRAS",
    image: "/img/team-ksr/Koordinator_Bidang_SAPRAS-Ika_Laksami_Maheswari.jpg"
  },
  {
    name: "Marianus Sengga Sori",
    position: "Anggota Bidang SAPRAS",
    image: "/img/team-ksr/Anggota_Bidang_SAPRAS Marianus_Sengga_Sori.jpg"
  },
  {
    name: "Daniel Ananda Mulyana",
    position: "Anggota Bidang SAPRAS",
    image: "/img/team-ksr/Anggota_Bidang_SAPRAS-Daniel_Ananda_Mulyana.jpg"
  }
];

// Bidang P4GN
export const p4gnMembers: TeamMember[] = [
  {
    name: "Nazia Zahra",
    position: "Koordinator Bidang P4GN",
    image: "/img/team-ksr/Koordinator_Bidang_P4GN-Nazia_Zahra.jpg"
  },
  {
    name: "Citra Purnama Sunda",
    position: "Anggota Bidang P4GN",
    image: "/img/team-ksr/Anggota_Bidang_P4GN-Citra_Purnama_Sunda.jpg"
  }
];

// Dewan Pembina
export const dewanPembinaMembers: TeamMember[] = [
  {
    name: "Agree Tias Maulana",
    position: "Dewan Pembina",
    image: "/img/team-ksr/Dewan_Pembina-Agree_Tias_Maulana.jpg"
  },
  {
    name: "Hafidz Fattahurrahman Pramadia",
    position: "Dewan Pembina",
    image: "/img/team-ksr/Dewan_Pembina-Hafidz_Fattahurrahman_Pramadia.jpg"
  },
  {
    name: "Raka Adam Ramadan",
    position: "Dewan Pembina",
    image: "/img/team-ksr/Dewan_Pembina-Raka_Adam_Ramadan.jpg"
  }
];

// Legacy team members array for backward compatibility
export const teamMembers: TeamMember[] = [
  ...dphMembers,
  ...humasMembers,
  ...diklatMembers,
  ...litbangMembers,
  ...ppmMembers,
  ...saprasMembers,
  ...p4gnMembers,
  ...dewanPembinaMembers
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

export const registrationSteps = [
  {
    step: 1,
    title: "Pendaftaran Online dan Offline",
    description: "Melakukan pendaftaran secara langsung di tempat (Sabuga ITB & Markas KSR UNPAS) dan melakukan pendaftaran melalui link yang tersedia"
  },
  {
    step: 2,
    title: "Seleksi, Wawancara, dan Tes Fisik",
    description: "Mengikuti tahap seleksi yang tersedia"
  },
  {
    step: 3,
    title: "Pendidikan Dasar",
    description: "Mengikuti pendidikan dasar untuk menjadi anggota KSR UNPAS Bandung"
  },
];

export const contactInfo = {
  address: "Jl. Tamansari No. 6-8, Kota Bandung, Jawa Barat, Indonesia",
  phone: "085624956109",
  email: "ksrunpas88@gmail.com",
  instagram: "@ksrunpas",
  youtube: "KSR UNPAS"
};
