@echo off
echo Syncing changes to GitHub...
cd /d "%~dp0"
git add .
git commit -m "Remove name Rajesh and update project name to Vivek Portfolio"
git push origin main
echo.
echo Process complete. If you saw any errors above, please check your Git credentials.
pause
