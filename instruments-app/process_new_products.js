const sharp = require('sharp');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PRODUCTS = [
    { name: 'breather_3kg', url: 'https://cpimg.tistatic.com/08052138/b/4/3-Kg-Alu-CVD-Transformer-Breather.jpg' },
    { name: 'breather_500g', url: 'https://cpimg.tistatic.com/08066848/b/4/500g-Alu-CVD-Transformer-Breather.jpg' },
    { name: 'breather_2kg', url: 'https://cpimg.tistatic.com/08052137/b/4/2-Kg-CVD-Transformer-Breather.jpg' },
    { name: 'breather_4kg', url: 'https://cpimg.tistatic.com/08052139/b/4/4-Kg-Alu-CVD-Transformer-Breather.jpg' },
    { name: 'relay_gas_1', url: 'https://cpimg.tistatic.com/08066846/b/4/Gas-Operated-Relay-1.jpg' },
    { name: 'relay_gas_2', url: 'https://cpimg.tistatic.com/08571125/b/4/Gas-Operated-Relay-2.jpg' },
    { name: 'mog_so6', url: 'https://cpimg.tistatic.com/08052133/b/4/Magnetic-Oil-Level-Gauge-SO6.jpg' },
    { name: 'mog_so4', url: 'https://cpimg.tistatic.com/08066845/b/4/Magnetic-Oil-Level-Gauge-SO4.jpg' }
];

function downloadImage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
                return;
            }
            const data = [];
            res.on('data', (chunk) => data.push(chunk));
            res.on('end', () => resolve(Buffer.concat(data)));
        }).on('error', reject);
    });
}

async function processImages() {
    const outputDir = path.join(__dirname, 'public', 'products-new');
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    for (const prod of PRODUCTS) {
        try {
            console.log(`Processing ${prod.name}...`);
            const buffer = await downloadImage(prod.url);

            const { data, info } = await sharp(buffer)
                .raw()
                .toBuffer({ resolveWithObject: true });

            const pipeline = new Uint8ClampedArray(info.width * info.height * 4);
            for (let i = 0; i < info.width * info.height; i++) {
                const r = data[i * info.channels];
                const g = data[i * info.channels + 1];
                const b = data[i * info.channels + 2];

                // If it's close to white, make it transparent
                if (r > 240 && g > 240 && b > 240) {
                    pipeline[i * 4] = r;
                    pipeline[i * 4 + 1] = g;
                    pipeline[i * 4 + 2] = b;
                    pipeline[i * 4 + 3] = 0;
                } else {
                    pipeline[i * 4] = r;
                    pipeline[i * 4 + 1] = g;
                    pipeline[i * 4 + 2] = b;
                    pipeline[i * 4 + 3] = 255;
                }
            }

            await sharp(Buffer.from(pipeline), {
                raw: {
                    width: info.width,
                    height: info.height,
                    channels: 4
                }
            })
            .png()
            .toFile(path.join(outputDir, `${prod.name}.png`));

            console.log(`Success: ${prod.name}.png`);
        } catch (err) {
            console.error(`Error processing ${prod.name}:`, err.message);
        }
    }
}

processImages();
