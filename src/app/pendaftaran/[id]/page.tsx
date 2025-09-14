'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface AnggotaData {
  kode: string;
  nama_lengkap: string;
  npm: string;
  fakultas: string;
  jurusan: string;
}

export default function PaymentResultPage() {
  const params = useParams();
  const code = params.id as string;
  const [loading, setLoading] = useState(true);
  const [anggotaData, setAnggotaData] = useState<AnggotaData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnggotaData = async () => {
      try {
        const response = await fetch('/api/get-anggota-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setAnggotaData(data.data);
        } else {
          setError(data.error || 'Data tidak ditemukan');
        }
      } catch {
        setError('Terjadi kesalahan saat mengambil data');
      } finally {
        setLoading(false);
      }
    };

    fetchAnggotaData();
  }, [code]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Memuat informasi pembayaran...</p>
        </div>
      </div>
    );
  }

  // Empty state - no data found
  if (error || !anggotaData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Data Tidak Ditemukan
              </h1>
              <p className="text-gray-600">
                Kode pendaftaran &quot;{code}&quot; tidak ditemukan dalam sistem
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Pastikan kode yang Anda masukkan sudah benar atau hubungi admin untuk bantuan.
              </p>
              <div className="space-y-3">
                <Link
                  href="/#daftar"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Kembali ke Halaman Pendaftaran
                </Link>
                <br />
                <Link
                  href="/"
                  className="inline-block text-red-600 hover:text-red-700 font-medium"
                >
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success state - data found
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Data Pendaftaran Ditemukan
            </h1>
            <p className="text-gray-600">
              Berikut adalah informasi pendaftaran Anda
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Informasi Pendaftaran
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Kode Pendaftaran:</span>
                <span className="font-semibold text-gray-900 uppercase">
                  KSR-{anggotaData.kode}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Nama Lengkap:</span>
                <span className="font-semibold text-gray-900">{anggotaData.nama_lengkap}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium">NPM:</span>
                <span className="font-semibold text-gray-900">{anggotaData.npm}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Fakultas:</span>
                <span className="font-semibold text-gray-900">{anggotaData.fakultas}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Jurusan:</span>
                <span className="font-semibold text-gray-900">{anggotaData.jurusan}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Status:</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Sudah Terdaftar
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Pendaftaran Anda telah berhasil tercatat dalam sistem KSR UNPAS.
            </p>
            <div className="space-y-3">
              <Link
                href="/#daftar"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Kembali ke Halaman Pendaftaran
              </Link>
              <br />
              <Link
                href="/"
                className="inline-block text-red-600 hover:text-red-700 font-medium"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
