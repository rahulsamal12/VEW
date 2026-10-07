@echo off
echo ==============================================
echo Starting VEW Production Environment Locally...
echo ==============================================

echo [1] Starting MongoDB...
start "MongoDB" cmd /c "d:\VEW\mongodb\mongodb-win32-x86_64-windows-7.0.14\bin\mongod.exe --dbpath d:\VEW\mongodb\data"
timeout /t 3 /nobreak >nul

echo [2] Starting Backend API on Port 5000...
start "VEW Backend API" cmd /c "cd /d d:\VEW\backend && npm run start"
timeout /t 2 /nobreak >nul

echo [3] Starting Frontend on Port 3000...
start "VEW Frontend" cmd /c "cd /d d:\VEW\frontend && npm run dev"

echo [4] Starting Admin Panel on Port 3001...
start "VEW Admin Panel" cmd /c "cd /d d:\VEW\admin-panel && npm run dev"

echo ==============================================
echo All services are starting in separate windows!
echo - Frontend: http://localhost:3000
echo - Admin Panel: http://localhost:3001
echo - Backend API: http://localhost:5000
echo ==============================================
