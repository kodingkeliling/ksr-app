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

    // Check if code exists in "Kode" sheet
    const kodeResponse = await fetch(`${SHEET_API_URL}Kode`);
    const kodeData = await kodeResponse.json();

    if (!kodeData.data || kodeData.data.length === 0) {
      return NextResponse.json(
        { error: 'Kode tidak valid' },
        { status: 400 }
      );
    }

    // Find the code in the Kode sheet
    const validCode = kodeData.data.find((row: { kode: string }) => row.kode === code);
    
    if (!validCode) {
      return NextResponse.json(
        { error: 'Kode tidak valid' },
        { status: 400 }
      );
    }

    // Check if code is already used in "Anggota" sheet
    const anggotaResponse = await fetch(`${SHEET_API_URL}Anggota`);
    const anggotaData = await anggotaResponse.json();

    if (anggotaData.data && anggotaData.data.length > 0) {
      const usedCode = anggotaData.data.find((row: { kode: string }) => row.kode === code);
      
      if (usedCode) {
        // Code is already used, redirect to payment result
        return NextResponse.json({
          success: true,
          code: code,
          alreadyUsed: true,
          redirectUrl: `/pembayaran/${code}`
        });
      }
    }

    // Code is valid and not used yet
    return NextResponse.json({
      success: true,
      code: code,
      alreadyUsed: false
    });

  } catch (error) {
    console.error('Error validating code:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memvalidasi kode' },
      { status: 500 }
    );
  }
}
