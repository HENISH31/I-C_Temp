const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'd:\\Instruments\\instruments-app\\public\\ic_logo.png';
const publicDir = 'd:\\Instruments\\instruments-app\\public';
const appDir = 'd:\\Instruments\\instruments-app\\src\\app';

async function scorchedEarthBranding() {
    try {
        console.log('Starting scorched-earth branding fix...');

        // 1. Generate a single, high-quality PNG icon with a UNIQUE name
        const uniqueName = 'site-brand-identity.png';
        await sharp(inputPath)
            .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png()
            .toFile(path.join(publicDir, uniqueName));
        console.log(`Created public/${uniqueName}`);

        // 2. Remove EVERY possible icon filename from public and app to stop auto-detection
        const ghostFiles = [
            'favicon.ico',
            'icon.png',
            'apple-icon.png',
            'brand-icon.png'
        ];

        const dirs = [publicDir, appDir];

        dirs.forEach(dir => {
            ghostFiles.forEach(filename => {
                const fullPath = path.join(dir, filename);
                if (fs.existsSync(fullPath)) {
                    fs.unlinkSync(fullPath);
                    console.log(`Deleted ghost file: ${fullPath}`);
                }
            });
        });

        console.log('Branding assets sanitized. Proceeding with deployment.');
    } catch (err) {
        console.error('Error in scorchedEarthBranding:', err);
        process.exit(1);
    }
}

scorchedEarthBranding();
