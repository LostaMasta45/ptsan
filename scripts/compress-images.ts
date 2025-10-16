import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

interface CompressionStats {
  file: string;
  originalSize: number;
  compressedSize: number;
  saved: number;
  savedPercent: number;
}

const stats: CompressionStats[] = [];

async function compressImage(inputPath: string, outputPath: string): Promise<CompressionStats | null> {
  try {
    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;

    // Skip if file is already small (< 100KB)
    if (originalSize < 100 * 1024) {
      console.log(`⏭️  Skipping ${path.basename(inputPath)} (already small: ${(originalSize / 1024).toFixed(2)} KB)`);
      return null;
    }

    // Compress image with Sharp
    await sharp(inputPath)
      .jpeg({ 
        quality: 85, // Good balance between quality and size
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);

    const compressedStats = fs.statSync(outputPath);
    const compressedSize = compressedStats.size;
    const saved = originalSize - compressedSize;
    const savedPercent = (saved / originalSize) * 100;

    // Replace original with compressed
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);

    const stat: CompressionStats = {
      file: path.basename(inputPath),
      originalSize,
      compressedSize,
      saved,
      savedPercent
    };

    console.log(`✅ ${stat.file}: ${(originalSize / 1024).toFixed(0)} KB → ${(compressedSize / 1024).toFixed(0)} KB (${savedPercent.toFixed(1)}% saved)`);

    return stat;
  } catch (error) {
    console.error(`❌ Error compressing ${inputPath}:`, error);
    return null;
  }
}

async function compressDirectory(dirPath: string) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await compressDirectory(fullPath);
    } else if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
      // Compress image files
      const tempPath = fullPath + '.tmp.jpg';
      const result = await compressImage(fullPath, tempPath);
      if (result) {
        stats.push(result);
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image compression...\n');

  const portfolioPath = path.join(process.cwd(), 'public', 'media', 'portfolio');

  // Check if directory exists
  if (!fs.existsSync(portfolioPath)) {
    console.error('❌ Portfolio directory not found!');
    process.exit(1);
  }

  console.log(`📁 Processing: ${portfolioPath}\n`);

  // Compress all images in portfolio directory
  await compressDirectory(portfolioPath);

  console.log('\n' + '='.repeat(80));
  console.log('📊 COMPRESSION SUMMARY');
  console.log('='.repeat(80));

  if (stats.length === 0) {
    console.log('ℹ️  No images were compressed (all already optimized or too small)');
  } else {
    const totalOriginal = stats.reduce((sum, s) => sum + s.originalSize, 0);
    const totalCompressed = stats.reduce((sum, s) => sum + s.compressedSize, 0);
    const totalSaved = totalOriginal - totalCompressed;
    const totalSavedPercent = (totalSaved / totalOriginal) * 100;

    console.log(`\n📈 Total images compressed: ${stats.length}`);
    console.log(`📦 Original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📦 Compressed size: ${(totalCompressed / 1024 / 1024).toFixed(2)} MB`);
    console.log(`💾 Space saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${totalSavedPercent.toFixed(2)}%)`);

    // Show top 10 largest savings
    const topSavings = stats
      .sort((a, b) => b.saved - a.saved)
      .slice(0, 10);

    console.log('\n🏆 Top 10 files with largest savings:');
    topSavings.forEach((s, i) => {
      console.log(`${i + 1}. ${s.file}: ${(s.saved / 1024).toFixed(0)} KB saved (${s.savedPercent.toFixed(1)}%)`);
    });
  }

  console.log('\n✨ Compression complete!\n');
}

main().catch(console.error);
