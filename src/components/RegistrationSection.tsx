import { registrationSection } from '@/data/mockData';

export default function RegistrationSection() {
  return (
    <section id="daftar" className="py-20 bg-gradient-to-br from-red-600 to-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {registrationSection.title}
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-red-200 mb-6">
            {registrationSection.subtitle}
          </h3>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <p className="text-lg md:text-xl text-red-100 mb-8 leading-relaxed">
              {registrationSection.description}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Persiapan Dokumen</h4>
                  <p className="text-red-100 text-sm">Siapkan KTM, foto 3x4, dan surat rekomendasi dari fakultas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Pendaftaran Online</h4>
                  <p className="text-red-100 text-sm">Isi formulir pendaftaran melalui link yang tersedia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Seleksi & Wawancara</h4>
                  <p className="text-red-100 text-sm">Ikuti tahap seleksi dan wawancara yang diadakan</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Pelantikan</h4>
                  <p className="text-red-100 text-sm">Setelah lulus seleksi, ikuti pelantikan anggota baru</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Formulir Pendaftaran
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              
              <div>
                <label htmlFor="nim" className="block text-sm font-medium text-gray-700 mb-2">
                  NIM
                </label>
                <input
                  type="text"
                  id="nim"
                  name="nim"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Masukkan NIM"
                />
              </div>
              
              <div>
                <label htmlFor="faculty" className="block text-sm font-medium text-gray-700 mb-2">
                  Fakultas
                </label>
                <select
                  id="faculty"
                  name="faculty"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Pilih Fakultas</option>
                  <option value="feb">Fakultas Ekonomi dan Bisnis</option>
                  <option value="fh">Fakultas Hukum</option>
                  <option value="fisip">Fakultas Ilmu Sosial dan Ilmu Politik</option>
                  <option value="ft">Fakultas Teknik</option>
                  <option value="fk">Fakultas Kedokteran</option>
                  <option value="fkg">Fakultas Kedokteran Gigi</option>
                  <option value="fmipa">Fakultas Matematika dan Ilmu Pengetahuan Alam</option>
                  <option value="fapet">Fakultas Peternakan</option>
                  <option value="fp">Fakultas Pertanian</option>
                  <option value="fpsikologi">Fakultas Psikologi</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Masukkan nomor telepon"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Masukkan email"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 transform hover:scale-105"
              >
                Kirim Pendaftaran
              </button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              *Data yang Anda berikan akan dijaga kerahasiaannya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
