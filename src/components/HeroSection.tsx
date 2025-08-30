import { heroSection } from '@/data/mockData';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-red-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {heroSection.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-4">
              {heroSection.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {heroSection.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={heroSection.ctaLink}
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {heroSection.ctaText}
              </a>
              <a
                href="#about"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Logo/Icon */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">🩹</div>
                  <div className="text-2xl font-bold">KSR UNPAS</div>
                  <div className="text-lg opacity-90">Palang Merah Indonesia</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-red-200 rounded-full opacity-60 animate-pulse"></div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-red-100 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-red-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}
