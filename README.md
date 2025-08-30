# KSR UNPAS Website

Website resmi untuk organisasi **Korps Sukarela Universitas Pasundan (KSR UNPAS)** yang bergerak di bidang kemanusiaan dan kepalangmerahan.

## 🏥 Tentang KSR UNPAS

KSR UNPAS adalah unit kegiatan mahasiswa Universitas Pasundan yang berkomitmen untuk melayani masyarakat melalui berbagai kegiatan sosial, pelatihan pertolongan pertama, donor darah, dan program kemanusiaan lainnya. Sebagai bagian dari Palang Merah Indonesia, kami berdedikasi untuk membantu sesama dalam keadaan darurat.

## ✨ Fitur Website

- **Responsive Design** - Optimal di semua perangkat
- **Modern UI/UX** - Interface yang menarik dan mudah digunakan
- **SEO Optimized** - Meta tags dan struktur yang SEO-friendly
- **Fast Performance** - Menggunakan Next.js 15 dengan optimasi
- **Accessibility** - Ramah untuk pengguna dengan kebutuhan khusus

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: 19.1.0
- **Deployment**: Vercel Ready

## 📁 Struktur Project

```
ksr-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/              # React components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── HeroSection.tsx     # Hero section
│   │   ├── AboutSection.tsx    # About section
│   │   ├── UnitSection.tsx     # Unit activities
│   │   ├── TeamSection.tsx     # Team members
│   │   ├── RegistrationSection.tsx # Registration form
│   │   ├── FAQSection.tsx      # FAQ section
│   │   ├── ContactSection.tsx  # Contact form
│   │   ├── YouTubeSection.tsx  # YouTube channel
│   │   └── Footer.tsx          # Footer
│   └── data/
│       └── mockData.ts         # Content data
├── public/                      # Static assets
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 🎨 Design System

### Colors
- **Primary**: Red (#dc2626) - Sesuai dengan logo KSR UNPAS
- **Secondary**: Gray (#6b7280)
- **Background**: White (#ffffff)
- **Text**: Dark Gray (#171717)

### Typography
- **Font**: Geist Sans (Google Fonts)
- **Headings**: Bold, large sizes
- **Body**: Regular weight, readable sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone repository
```bash
git clone <repository-url>
cd ksr-app
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) di browser

### Build & Deploy

```bash
# Build untuk production
npm run build

# Start production server
npm start

# Deploy ke Vercel
npm run deploy
```

## 📱 Sections Website

1. **Header** - Navigation dan logo
2. **Hero** - Banner utama dengan CTA
3. **About** - Informasi tentang KSR UNPAS
4. **Unit** - 5 unit kegiatan utama
5. **Team** - Struktur kepengurusan
6. **Registration** - Form pendaftaran anggota baru
7. **FAQ** - Pertanyaan yang sering diajukan
8. **Contact** - Form kontak dan informasi
9. **YouTube** - Channel YouTube KSR UNPAS
10. **Footer** - Link dan informasi tambahan

## 🔧 Customization

### Mengubah Konten
Semua konten website tersimpan di `src/data/mockData.ts`. Anda dapat mengubah:
- Informasi organisasi
- Data tim
- Unit kegiatan
- FAQ
- Informasi kontak

### Mengubah Styling
Styling menggunakan Tailwind CSS. Anda dapat mengubah:
- Warna di `tailwind.config.js`
- Custom CSS di `src/app/globals.css`
- Component-specific styles

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimal
- **Bundle Size**: Minimal dengan code splitting
- **Image Optimization**: Next.js Image component

## 🌐 Deployment

Website siap untuk di-deploy ke:
- **Vercel** (Recommended)
- **Netlify**
- **AWS Amplify**
- **Self-hosted**

## 📞 Support

Untuk pertanyaan atau dukungan teknis:
- Email: ksr@unpas.ac.id
- Instagram: @ksrunpas
- YouTube: KSR UNPAS Official

## 📄 License

Project ini dibuat untuk KSR UNPAS. Semua hak cipta dilindungi.

---

**Dibuat dengan ❤️ untuk KSR UNPAS**
