export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            YouTube Channel
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tonton video terbaru dari KSR UNPAS dan ikuti kegiatan kami
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Video 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-gray-500">Video Preview</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pelantikan Anggota Baru KSR UNPAS 2024
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Dokumentasi lengkap pelantikan anggota baru KSR UNPAS angkatan 41
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">2 minggu yang lalu</span>
                <span className="text-sm text-red-600 font-medium">Tonton</span>
              </div>
            </div>
          </div>

          {/* Featured Video 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <p className="text-gray-500">Video Preview</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pelatihan Pertolongan Pertama
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Tutorial lengkap pertolongan pertama dalam keadaan darurat
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">1 bulan yang lalu</span>
                <span className="text-sm text-red-600 font-medium">Tonton</span>
              </div>
            </div>
          </div>

          {/* Featured Video 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🩸</div>
                  <p className="text-gray-500">Video Preview</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Kegiatan Donor Darah
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Dokumentasi kegiatan donor darah KSR UNPAS di kampus
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">2 bulan yang lalu</span>
                <span className="text-sm text-red-600 font-medium">Tonton</span>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Channel CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Subscribe Channel YouTube Kami
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Dapatkan update terbaru tentang kegiatan KSR UNPAS, tutorial pertolongan pertama, 
              dan berbagai konten edukasi kemanusiaan lainnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe YouTube
              </a>
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                Lihat Semua Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
