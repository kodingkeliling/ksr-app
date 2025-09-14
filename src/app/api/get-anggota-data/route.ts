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

    // Debug logging
    console.log('Anggota data structure:', JSON.stringify(anggotaData.data[0], null, 2));
    console.log('Looking for code:', code);

    // Find the member data by code - handle different field name formats
    const memberData = anggotaData.data.find((row: Record<string, string>) => 
      row.kode === code || 
      row.Kode === code ||
      row.kode?.toLowerCase() === code.toLowerCase() ||
      row.Kode?.toLowerCase() === code.toLowerCase()
    );
    
    if (!memberData) {
      return NextResponse.json(
        { error: 'Data dengan kode tersebut tidak ditemukan' },
        { status: 404 }
      );
    }

    // Return the member data - handle different field name formats
    return NextResponse.json({
      success: true,
      data: {
        kode: memberData.kode || memberData.Kode || 'N/A',
        nama_lengkap: memberData['Nama Lengkap'] || memberData.nama_lengkap || memberData.nama || 'N/A',
        npm: memberData.NPM || memberData.npm || 'N/A',
        fakultas: memberData.Fakultas || memberData.fakultas || 'N/A',
        jurusan: memberData.Jurusan || memberData.jurusan || 'N/A'
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
