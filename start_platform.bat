@echo off
title German BFD + Psychiatry + B2/C1 Learning Platform
cd /d "%~dp0"
echo ===================================================================
echo   Starting German BFD + Psychiatry + B2/C1 Learning Platform
echo ===================================================================
echo.
echo Starting local server on http://localhost:3000 ...
start "" "http://localhost:3000"
python server.py
