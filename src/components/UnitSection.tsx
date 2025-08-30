import { units } from '@/data/mockData';

export default function UnitSection() {
  return (
    <section id="unit" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            KSR UNPAS memiliki 5 unit kegiatan yang fokus pada berbagai aspek kemanusiaan dan kepalangmerahan
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{unit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {unit.name}
                </h3>
              </div>
              
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                {unit.description}
              </p>
              
              <div className="text-center">
                <button className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200">
                  Baca Selengkapnya →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-red-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Bergabung dengan Unit Favorit Anda
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Setiap unit memiliki program dan kegiatan yang unik. Pilih unit yang sesuai dengan minat dan bakat Anda untuk berkontribusi dalam kegiatan kemanusiaan.
            </p>
            <a
              href="#daftar"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Daftar Sekarang
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
