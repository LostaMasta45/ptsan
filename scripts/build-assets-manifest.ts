import * as fs from 'fs';
import * as path from 'path';

interface BeforeAfterPair {
  id: string;
  title?: string;
  location?: string;
  before: string;
  after: string;
}

interface Catalog {
  title: string;
  file: string;
}

interface AssetsManifest {
  logos: string[];
  partners: string[];
  beforeAfter: BeforeAfterPair[];
  catalogs: Catalog[];
}

const ASSETS_DIR = path.join(process.cwd(), 'src', 'assets');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'assets.manifest.json');

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  if (!fs.existsSync(dirPath)) {
    return arrayOfFiles;
  }

  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

function isImageFile(filename: string): boolean {
  const ext = path.extname(filename).toLowerCase();
  return ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'].includes(ext);
}

function isPdfFile(filename: string): boolean {
  return path.extname(filename).toLowerCase() === '.pdf';
}

function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function buildManifest(): AssetsManifest {
  const manifest: AssetsManifest = {
    logos: [],
    partners: [],
    beforeAfter: [],
    catalogs: [],
  };

  if (!fs.existsSync(ASSETS_DIR)) {
    console.warn(`Assets directory not found: ${ASSETS_DIR}`);
    return manifest;
  }

  const allFiles = getAllFiles(ASSETS_DIR);

  // Process logos
  const logosDir = path.join(ASSETS_DIR, 'logos');
  const logoFiles = allFiles.filter(
    (f) => f.startsWith(logosDir) && isImageFile(f)
  );

  const mainLogos: string[] = [];
  const partnerLogos: string[] = [];

  logoFiles.forEach((file) => {
    const relativePath = path.relative(ASSETS_DIR, file).replace(/\\/g, '/');
    const filename = path.basename(file).toLowerCase();

    if (filename.includes('san') || filename.includes('logo-san')) {
      mainLogos.push(relativePath);
    } else {
      partnerLogos.push(relativePath);
    }
  });

  manifest.logos = [...mainLogos, ...partnerLogos];
  manifest.partners = partnerLogos;

  // Process before/after images
  const beforeAfterDir = path.join(ASSETS_DIR, 'before-after');
  const beforeAfterFiles = allFiles.filter(
    (f) => f.startsWith(beforeAfterDir) && isImageFile(f)
  );

  const beforeMap = new Map<string, string>();
  const afterMap = new Map<string, string>();

  beforeAfterFiles.forEach((file) => {
    const relativePath = path.relative(ASSETS_DIR, file).replace(/\\/g, '/');
    const basename = path.basename(file, path.extname(file));

    if (basename.toLowerCase().endsWith('_before')) {
      const id = toKebabCase(basename.replace(/_before$/i, ''));
      beforeMap.set(id, relativePath);
    } else if (basename.toLowerCase().endsWith('_after')) {
      const id = toKebabCase(basename.replace(/_after$/i, ''));
      afterMap.set(id, relativePath);
    }
  });

  // Pair before and after images
  beforeMap.forEach((beforePath, id) => {
    const afterPath = afterMap.get(id);
    if (afterPath) {
      manifest.beforeAfter.push({
        id,
        before: beforePath,
        after: afterPath,
      });
    }
  });

  // Process catalogs
  const catalogsDir = path.join(ASSETS_DIR, 'catalogs');
  const catalogFiles = allFiles.filter(
    (f) => f.startsWith(catalogsDir) && isPdfFile(f)
  );

  catalogFiles.forEach((file) => {
    const relativePath = path.relative(ASSETS_DIR, file).replace(/\\/g, '/');
    const title = path.basename(file, path.extname(file));

    manifest.catalogs.push({
      title,
      file: relativePath,
    });
  });

  return manifest;
}

async function main() {
  console.log('Building assets manifest...');

  // Ensure src directory exists
  const srcDir = path.join(process.cwd(), 'src');
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  const manifest = buildManifest();

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2), 'utf-8');

  console.log('✓ Assets manifest created:');
  console.log(`  - Logos: ${manifest.logos.length}`);
  console.log(`  - Partners: ${manifest.partners.length}`);
  console.log(`  - Before/After pairs: ${manifest.beforeAfter.length}`);
  console.log(`  - Catalogs: ${manifest.catalogs.length}`);
}

main().catch((err) => {
  console.error('Error building assets manifest:', err);
  process.exit(1);
});
