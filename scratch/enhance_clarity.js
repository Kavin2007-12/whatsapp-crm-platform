const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function enhance() {
  const inputPath = path.resolve(__dirname, '../public/assets/integrations/reference.png');
  const outputPath = path.resolve(__dirname, '../public/assets/integrations/reference_hd.png');
  const backupPath = path.resolve(__dirname, '../public/assets/integrations/reference_original.png');

  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(inputPath, backupPath);
  }

  console.log('Processing with sharp Lanczos3 and unsharp mask...');

  // Double resolution to 2048 x 3072 using Lanczos3 + unsharp mask
  await sharp(backupPath)
    .resize({
      width: 2048,
      height: 3072,
      kernel: sharp.kernel.lanczos3,
      fit: 'fill'
    })
    .sharpen({
      sigma: 1.0,
      m1: 1.0,
      m2: 2.0,
      x1: 2,
      y2: 10,
      y3: 20
    })
    .png({
      compressionLevel: 7,
      adaptiveFiltering: true
    })
    .toFile(outputPath);

  console.log('HD Image generated successfully at:', outputPath);

  // Replace reference.png with reference_hd.png
  fs.copyFileSync(outputPath, inputPath);

  // Also update public/assets/features/integrations-reference.png
  const featPath = path.resolve(__dirname, '../public/assets/features/integrations-reference.png');
  if (fs.existsSync(featPath)) {
    fs.copyFileSync(outputPath, featPath);
  }

  const stat = fs.statSync(inputPath);
  console.log('Updated reference.png with Ultra-HD enhanced version! New size:', stat.size);
}

enhance().catch(console.error);
