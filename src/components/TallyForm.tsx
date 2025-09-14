'use client';
import { useEffect } from 'react';

// Declare Tally type for TypeScript
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

interface TallyFormProps {
  code: string;
  onBack: () => void;
}

export default function TallyForm({ code, onBack }: TallyFormProps) {
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
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Formulir Pendaftaran
        </h3>
        <button
          onClick={onBack}
          className="text-red-600 hover:text-red-700 font-medium text-sm"
        >
          ← Kembali
        </button>
      </div>
      
      <div className="mb-2 p-3 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-green-700">
          <strong>Kode Akses:</strong> {code}
        </p>
        <p className="text-xs text-green-600 mt-1">
          Kode telah terverifikasi, silakan isi form pendaftaran
        </p>
      </div>
      
      <iframe 
        data-tally-src={`https://tally.so/embed/mZxJpv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&kode=${encodeURIComponent(code)}`}
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
  );
}
