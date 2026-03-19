const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:\\Users\\91910\\.gemini\\antigravity\\brain\\c0e02d76-294a-407d-b470-cdc3dfa916e1\\logo_on_solid_pink_dark_text_1773305144528.png';
const outputPath = 'C:\\Users\\91910\\.gemini\\antigravity\\brain\\c0e02d76-294a-407d-b470-cdc3dfa916e1\\transparent_logo_v4_dark_text.png';

async function removeBackground() {
    try {
        const image = sharp(inputPath);
        const { data, info } = await image
            .raw()
            .toBuffer({ resolveWithObject: true });

        const { width, height, channels } = info;
        const pipeline = new Uint8ClampedArray(width * height * 4);

        for (let i = 0; i < width * height; i++) {
            const r = data[i * channels];
            const g = data[i * channels + 1];
            const b = data[i * channels + 2];

            // If it's very pink (high R and B, low G) - targeting #FF00FF
            if (r > 150 && b > 150 && g < 100) {
                pipeline[i * 4] = r;
                pipeline[i * 4 + 1] = g;
                pipeline[i * 4 + 2] = b;
                pipeline[i * 4 + 3] = 0; // Transparent
            } else {
                pipeline[i * 4] = r;
                pipeline[i * 4 + 1] = g;
                pipeline[i * 4 + 2] = b;
                pipeline[i * 4 + 3] = 255; // Opaque
            }
        }

        await sharp(Buffer.from(pipeline), {
            raw: {
                width,
                height,
                channels: 4
            }
        })
        .png()
        .toFile(outputPath);

        console.log('Successfully created transparent dark-text logo at ' + outputPath);
    } catch (err) {
        console.error('Error processing image:', err);
        process.exit(1);
    }
}

removeBackground();
