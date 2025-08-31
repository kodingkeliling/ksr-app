import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KSR UNPAS - Korps Sukarela Universitas Pasundan",
  description: "KSR UNPAS adalah unit kegiatan mahasiswa Universitas Pasundan yang bergerak di bidang kemanusiaan dan kepalangmerahan. Melayani dengan hati, mengabdi untuk masyarakat.",
  keywords: ["KSR UNPAS", "Korps Sukarela", "Universitas Pasundan", "Palang Merah Indonesia", "Pertolongan Pertama", "Donor Darah"],
  authors: [{ name: "KSR UNPAS" }],
  creator: "KSR UNPAS",
  publisher: "KSR UNPAS",
  icons: {
    icon: '/img/logoksr.png',
    shortcut: '/img/logoksr.png',
    apple: '/img/logoksr.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ksrunpas.com'),
  openGraph: {
    title: "KSR UNPAS - Korps Sukarela Universitas Pasundan",
    description: "Melayani dengan hati, mengabdi untuk masyarakat",
    url: 'https://ksrunpas.com',
    siteName: 'KSR UNPAS',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KSR UNPAS',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "KSR UNPAS - Korps Sukarela Universitas Pasundan",
    description: "Melayani dengan hati, mengabdi untuk masyarakat",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
