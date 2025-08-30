@echo off
REM KSR UNPAS Website - Quick Start Script for Windows
REM Script ini akan membantu Anda menjalankan website KSR UNPAS dengan cepat

echo 🚀 KSR UNPAS Website - Quick Start
echo ==================================

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js tidak ditemukan. Silakan install Node.js 18+ terlebih dahulu.
    echo    Download dari: https://nodejs.org/
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=1,2 delims=v." %%a in ('node -v') do set NODE_VERSION=%%b
if %NODE_VERSION% LSS 18 (
    echo ❌ Node.js version harus 18 atau lebih tinggi. Version saat ini: 
    node -v
    echo    Silakan update Node.js ke version terbaru.
    pause
    exit /b 1
)

echo ✅ Node.js 
node -v
echo terdeteksi

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm tidak ditemukan. Silakan install npm terlebih dahulu.
    pause
    exit /b 1
)

echo ✅ npm 
npm -v
echo terdeteksi

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Gagal install dependencies. Silakan cek error di atas.
    pause
    exit /b 1
)

echo ✅ Dependencies berhasil diinstall

REM Build project
echo 🔨 Building project...
npm run build

if %errorlevel% neq 0 (
    echo ❌ Gagal build project. Silakan cek error di atas.
    pause
    exit /b 1
)

echo ✅ Project berhasil di-build

REM Start development server
echo 🌐 Starting development server...
echo    Website akan tersedia di: http://localhost:3000
echo    Tekan Ctrl+C untuk menghentikan server
echo.

npm run dev

pause

