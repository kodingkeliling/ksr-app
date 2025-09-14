import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-white/20 leading-none">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Halaman Tidak Ditemukan
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Mungkin halaman tersebut telah dipindahkan atau tidak tersedia.
          </p>

          {/* KSR Logo/Info */}
          <div className="bg-red-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 relative">
                <Image
                  src="/img/logoksr.png"
                  alt="Logo KSR UNPAS"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              KSR UNPAS
            </h3>
            <p className="text-gray-600 text-sm">
              Korps Sukarela Universitas Pasundan
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block w-full md:w-auto bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
            >
              Kembali ke Beranda
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#tentang"
                className="inline-block text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Tentang Kami
              </Link>
              <Link
                href="/#daftar"
                className="inline-block text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Pendaftaran
              </Link>
              <Link
                href="/#faq"
                className="inline-block text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Jika Anda yakin ini adalah kesalahan, silakan hubungi tim admin KSR UNPAS.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/80 text-sm">
            © 2025 KSR UNPAS - Korps Sukarela Universitas Pasundan
          </p>
        </div>
      </div>
    </div>
  );
}
