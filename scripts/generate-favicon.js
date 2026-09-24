import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Design for Doutor Luizinho 1177 Favicon
// Stacked 11 over 77, filling the space cleanly with only the numbers
const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="tileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#123F8F" />
      <stop offset="100%" stop-color="#071738" />
    </linearGradient>
  </defs>
  <!-- Background rounded squircle tile -->
  <rect width="64" height="64" rx="14" fill="url(#tileGrad)" />
  
  <!-- 11 on top (White for sharp contrast & party identity) -->
  <text x="32" y="30" font-family="Arial Black, Impact, system-ui, sans-serif" font-size="31" font-weight="900" font-style="italic" fill="#FFFFFF" text-anchor="middle" letter-spacing="-1">
    11
  </text>

  <!-- 77 on bottom (Vibrant Campaign Orange #F15A29) -->
  <text x="32" y="57" font-family="Arial Black, Impact, system-ui, sans-serif" font-size="31" font-weight="900" font-style="italic" fill="#F15A29" text-anchor="middle" letter-spacing="-1">
    77
  </text>
</svg>`;

async function buildFavicons() {
  const publicDir = path.resolve('public');
  
  // 1. Save favicon.svg
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgFavicon, 'utf8');
  console.log('Saved favicon.svg');

  const svgBuffer = Buffer.from(svgFavicon);

  // 2. Generate favicon-32x32.png
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Saved favicon-32x32.png');

  // 3. Generate favicon-16x16.png
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('Saved favicon-16x16.png');

  // 4. Generate apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Saved apple-touch-icon.png');

  // 5. Generate favicon.ico (32x32 PNG as ico)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Saved favicon.ico');
}

buildFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
