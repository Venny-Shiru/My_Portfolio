import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(.:)/, '$1'));

(async () => {
  try {
    const input = path.resolve(__dirname, '../src/assets/profile-photo.jpg');
    const outDir = path.resolve(__dirname, '../public/favicons');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

    // sizes we want
    const sizes = [180, 32, 16];

    // create rounded/transparent PNGs
    await Promise.all(
      sizes.map(async (size) => {
        const output = path.join(outDir, `favicon-${size}x${size}.png`);

        // create a circular mask
        const circle = Buffer.from(
          `<svg width="${size}" height="${size}"><rect width="100%" height="100%" fill="transparent" /><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#ffffff" /></svg>`
        );

        // resize and composite with rounded mask and small padding
        await sharp(input)
          .resize(size, size, { fit: 'cover' })
          .composite([
            { input: circle, blend: 'dest-in' },
          ])
          .png({ quality: 90 })
          .toFile(output);

        console.log('Created', output);
      })
    );

    // generate favicon.ico from 16 and 32 (png-to-ico prefers 16/32/48)
    const filesForIco = [
      path.join(outDir, 'favicon-16x16.png'),
      path.join(outDir, 'favicon-32x32.png'),
    ];

    const icoBuffer = await pngToIco(filesForIco);
    fs.writeFileSync(path.join(outDir, 'favicon.ico'), icoBuffer);
    console.log('Created', path.join(outDir, 'favicon.ico'));

    console.log('Favicons generated successfully.');
  } catch (err) {
    console.error('Error generating favicons:', err);
    process.exit(1);
  }
})();