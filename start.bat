@echo off
REM D&A Doce Amor - inicia o site Next.js localmente
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [ERRO] Node.js nao encontrado. Instale em https://nodejs.org/
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Instalando dependencias...
  call npm install --no-audit --no-fund
)

echo.
echo Iniciando site em http://localhost:3000
echo Pressione Ctrl+C para parar.
echo.
start "" "http://localhost:3000"
call npm run dev
pause
