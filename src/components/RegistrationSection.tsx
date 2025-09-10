'use client';
import { registrationSection, registrationSteps } from '@/data/mockData';
import Image from 'next/image';
import { useEffect } from 'react';

// Declare Tally type for TypeScript
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function RegistrationSection() {
  useEffect(() => {
    // Initialize Tally embeds when component mounts
    const initializeTally = () => {
      if (typeof window !== 'undefined' && window.Tally) {
        window.Tally.loadEmbeds();
      } else {
        // If Tally is not loaded yet, wait for it
        const checkTally = setInterval(() => {
          if (typeof window !== 'undefined' && window.Tally) {
            window.Tally.loadEmbeds();
            clearInterval(checkTally);
          }
        }, 100);
        
        // Clear interval after 5 seconds to avoid infinite checking
        setTimeout(() => clearInterval(checkTally), 5000);
      }
    };

    initializeTally();
  }, []);

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
          <div className="text-white flex flex-col gap-8">
            <p className="text-lg md:text-xl text-red-100 mb-8 leading-relaxed">
              {registrationSection.description}
            </p>
            
            <div className="space-y-6">
              {registrationSteps.map((step) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-red-100 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Formulir Pendaftaran
            </h3>
            
            <iframe 
              data-tally-src="https://tally.so/embed/mZxJpv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="887" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="PENDAFTARAN ANGGOTA KSR UNPAS"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
