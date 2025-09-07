import { aboutSection } from '@/data/mockData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {aboutSection.title}
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-6">
            {aboutSection.subtitle}
          </h3>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="prose prose-lg max-w-none mx-auto lg:mx-0">
              {aboutSection.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#unit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
              >
                Lihat Unit Kami
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-15 shadow-xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🏥</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Palang Merah Indonesia</h4>
                <p className="text-gray-600">Unit Universitas Pasundan</p>
              </div>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-300 rounded-full flex items-center justify-center text-2xl shadow-lg">
              🩹
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
              🩸
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-red-200 rounded-full flex items-center justify-center text-xl shadow-lg">
              🚨
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}
