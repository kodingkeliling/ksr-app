#!/bin/bash

# KSR UNPAS Website - Quick Start Script
# Script ini akan membantu Anda menjalankan website KSR UNPAS dengan cepat

echo "🚀 KSR UNPAS Website - Quick Start"
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js tidak ditemukan. Silakan install Node.js 18+ terlebih dahulu."
    echo "   Download dari: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version harus 18 atau lebih tinggi. Version saat ini: $(node -v)"
    echo "   Silakan update Node.js ke version terbaru."
    exit 1
fi

echo "✅ Node.js $(node -v) terdeteksi"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm tidak ditemukan. Silakan install npm terlebih dahulu."
    exit 1
fi

echo "✅ npm $(npm -v) terdeteksi"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Gagal install dependencies. Silakan cek error di atas."
    exit 1
fi

echo "✅ Dependencies berhasil diinstall"

# Build project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Gagal build project. Silakan cek error di atas."
    exit 1
fi

echo "✅ Project berhasil di-build"

# Start development server
echo "🌐 Starting development server..."
echo "   Website akan tersedia di: http://localhost:3000"
echo "   Tekan Ctrl+C untuk menghentikan server"
echo ""

npm run dev

