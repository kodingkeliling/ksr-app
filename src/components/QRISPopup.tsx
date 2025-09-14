'use client';
import Image from 'next/image';
import { useEffect } from 'react';

interface QRISPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRISPopup({ isOpen, onClose }: QRISPopupProps) {
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Prevent scrolling when popup is open
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      
      return () => {
        document.body.style.overflow = originalStyle;
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    const phoneNumber = '+62 856-2495-6109';
    const message = 'Halo, saya sudah melakukan pembayaran untuk mendapatkan kode akses pendaftaran KSR UNPAS.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative shadow-2xl my-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 pr-8">
          Kode Akses
        </h3>

        {/* Instructions */}
        <p className="text-gray-700 mb-4">
          Lakukan pembelian kode akses seharga Rp. 25.000 melalui:
        </p>

        {/* QRIS Payment Section */}
        <div className="mb-4">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <Image
              src="/img/qris.jpeg"
              alt="QRIS Payment"
              width={200}
              height={200}
              className="mx-auto rounded-lg"
            />
          </div>
        </div>

        {/* Confirmation Instructions */}
        <p className="text-gray-700 mb-4">
          Jika sudah melakukan pembayaran, silakan konfirmasi pembayaran ke Contact Person untuk mendapatkan kode akses.
        </p>

        {/* Contact Person */}
        <div className="border-t pt-4">
          <p className="text-gray-700 mb-2">Contact Person:</p>
          <button
            onClick={handleWhatsAppClick}
            className="text-blue-600 hover:text-blue-700 hover:underline font-medium cursor-pointer"
          >
            +62 856-2495-6109
          </button>
          <span className="text-gray-700 ml-1">
          (Humas KSR UNPAS)
          </span>
        </div>
      </div>
    </div>
  );
}
