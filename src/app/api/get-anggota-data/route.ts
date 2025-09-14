import { NextRequest, NextResponse } from 'next/server';

const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbzN7trpezIzuFmtZ6MZBfYDvOcWqRKcppnevEP1JF2wJUozqsf70Nrdyn17xvOUaXoBNA/exec?sheet=';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: 'Kode tidak boleh kosong' },
        { status: 400 }
      );
    }

    // Get data from "Anggota" sheet
    const anggotaResponse = await fetch(`${SHEET_API_URL}Anggota`);
    const anggotaData = await anggotaResponse.json();

    if (!anggotaData.data || anggotaData.data.length === 0) {
      return NextResponse.json(
        { error: 'Data anggota tidak ditemukan' },
        { status: 404 }
      );
    }

    // Find the member data by code
    const memberData = anggotaData.data.find((row: { kode: string }) => row.kode === code);
    
    if (!memberData) {
      return NextResponse.json(
        { error: 'Data dengan kode tersebut tidak ditemukan' },
        { status: 404 }
      );
    }

    // Return the member data
    return NextResponse.json({
      success: true,
      data: {
        kode: memberData.kode,
        nama_lengkap: memberData.nama_lengkap || memberData.nama || 'N/A',
        npm: memberData.npm || 'N/A',
        fakultas: memberData.fakultas || 'N/A',
        jurusan: memberData.jurusan || 'N/A'
      }
    });

  } catch (error) {
    console.error('Error fetching anggota data:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data' },
      { status: 500 }
    );
  }
}
