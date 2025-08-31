import { heroSection } from '@/data/mockData';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-red-50 to-white min-h-screen flex items-center pt-12 sm:pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:gap-12">
          
          {/* Visual Element */}
          <div className="relative order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0">
            <div className="relative z-10">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 mx-auto">
                <img
                  src="/img/logoksr.png"
                  alt="KSR UNPAS Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating Elements - Hidden on mobile */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-20 h-20 bg-red-400 rounded-full opacity-60 animate-bounce"></div>
              <div
                className="hidden lg:block absolute -bottom-4 -left-4 w-16 h-16 bg-red-300 rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: '1s' }}
              ></div>
              <div className="hidden lg:block absolute top-1/2 -right-8 w-12 h-12 bg-red-200 rounded-full opacity-60 animate-pulse"></div>
            </div>
            <div className="hidden lg:block absolute inset-0 bg-red-100 rounded-full opacity-20 -z-10"></div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              {heroSection.title}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-red-600 mb-2 sm:mb-3 lg:mb-4">
              {heroSection.subtitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
              {heroSection.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <a
                href={heroSection.ctaLink}
                className="bg-red-600 text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {heroSection.ctaText}
              </a>
              <a
                href="#about"
                className="border-2 border-red-600 text-red-600 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-red-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-20 h-20 bg-red-400 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
    </section>
  );
}
