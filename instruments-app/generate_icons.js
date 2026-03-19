const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'd:\\Instruments\\instruments-app\\public\\ic_logo.png';
const appDir = 'd:\\Instruments\\instruments-app\\src\\app';

async function generateIcons() {
    try {
        // Ensure input exists
        if (!fs.existsSync(inputPath)) {
            console.error('Input logo not found at ' + inputPath);
            process.exit(1);
        }

        // 1. Generate icon.png (32x32)
        await sharp(inputPath)
            .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png()
            .toFile(path.join(appDir, 'icon.png'));
        console.log('Created icon.png (32x32)');

        // 2. Generate apple-icon.png (180x180)
        await sharp(inputPath)
            .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png()
            .toFile(path.join(appDir, 'apple-icon.png'));
        console.log('Created apple-icon.png (180x180)');

        // 3. Optional: Remove old favicon.ico to let Next.js use the new ones
        const oldFavicon = path.join(appDir, 'favicon.ico');
        if (fs.existsSync(oldFavicon)) {
            fs.unlinkSync(oldFavicon);
            console.log('Removed old favicon.ico');
        }

    } catch (err) {
        console.error('Error generating icons:', err);
        process.exit(1);
    }
}

generateIcons();
