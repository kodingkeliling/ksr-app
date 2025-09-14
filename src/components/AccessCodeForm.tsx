'use client';
import { useState } from 'react';
import QRISPopup from './QRISPopup';

interface AccessCodeFormProps {
  onCodeValid: (code: string) => void;
  onCodeAlreadyUsed: (redirectUrl: string) => void;
}

export default function AccessCodeForm({ onCodeValid, onCodeAlreadyUsed }: AccessCodeFormProps) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showQRISPopup, setShowQRISPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/validate-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Terjadi kesalahan');
        return;
      }

      if (data.alreadyUsed) {
        // Redirect to payment result page
        onCodeAlreadyUsed(data.redirectUrl);
      } else {
        // Code is valid, show Tally form
        onCodeValid(code);
      }
    } catch {
      setError('Terjadi kesalahan saat memvalidasi kode');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Masukkan Kode Akses
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
            Kode Akses
          </label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Masukkan kode akses Anda"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-black"
            required
            disabled={loading}
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !code.trim()}
          className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Memvalidasi...' : 'Lanjutkan'}
        </button>
      </form>

      <div className="mt-6 text-center flex items-center justify-center">
        <p className="text-sm text-gray-600">
          Belum punya kode akses? {" "}
        </p>
        <button
          type="button"
          onClick={() => setShowQRISPopup(true)}
          className="text-red-600 cursor-pointer hover:text-red-700 font-medium text-sm hover:underline ml-1"
        >
          Hubungi admin
        </button>
      </div>

      {/* QRIS Popup */}
      <QRISPopup 
        isOpen={showQRISPopup} 
        onClose={() => setShowQRISPopup(false)} 
      />
    </div>
  );
}
