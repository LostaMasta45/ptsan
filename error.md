Context
- Project: Next.js 14 (App Router, TypeScript).
- Problem: In production (Vercel) logo images 404 because of wrong paths/casing/encoding.
- Decision: Use exactly ONE logo file: /public/media/logos/logosiluet.png

Your tasks (do ALL):

1) Ensure asset location
   - Create folder: /public/media/logos (if not exists).
   - Put the final logo file there as: /public/media/logos/logosiluet.png
   - Remove duplicates of the same logo in /src, /assets, or other locations.
   - Make sure .gitignore does NOT exclude /public/media/**

2) Bulk rename ALL code references to the logo
   - Find any old paths/names (examples & patterns to search):
       "LOGO", "Logo", "Siluet", "Siluet.png", "logo*.png", "logos/*.png",
       "/src/assets", "/assets/logos", "/media/logos", "encodeURIComponent(", 
       "/_next/image?url=", "Image src={`/_next/image?url=${...}`}"
   - Replace them so that EVERY logo reference becomes:
       src="/media/logos/logosiluet.png"
   - Do not add or keep URL encoding. No string building of "/_next/image".
   - If the code uses a variable or manifest object (logo.file), overwrite the builder to always resolve to
       `/media/logos/logosiluet.png`.

3) Normalize Next/Image usage
   - Convert any <img> to Next <Image>.
   - Example correct usage:
       import Image from "next/image";
       <Image src="/media/logos/logosiluet.png" alt="Logo" width={200} height={80} priority />
   - Remove any manual construction of "/_next/image?url=...".
   - Remove encodeURIComponent() on local "/media/..." paths.

4) Manifest / builder (if present)
   - If the app imports "@/src/assets.manifest.json" for logos, make it contain:
       { "logos": [{ "file": "logosiluet.png", "title": "Logo" }] }
   - In code, access it safely:
       type LogoItem = { file: string; title?: string };
       let manifest: { logos?: LogoItem[] } = { logos: [] };
       try { manifest = require("@/src/assets.manifest.json"); } catch {}
       const logos = (manifest.logos ?? []) as LogoItem[];
   - Build the image path like:
       const src = `/media/logos/${logo.file}`;
     (But since we unify to a single file, logo.file should be "logosiluet.png")

5) Optional helper (if many usages)
   - Create lib/media.ts:
       export const mediaSrc = (file: string) =>
         file?.startsWith("/") ? file : `/media/logos/${file || "logosiluet.png"}`;
   - Then call:
       <Image src={mediaSrc("logosiluet.png")} alt="Logo" width={200} height={80} />

6) Remove broken/legacy references
   - Delete any references to "/src/assets/logos", "/assets/logos", or relative paths like "../assets/…"
   - Make sure there’s no basePath/assetPrefix or env var that rewrites local image paths.

7) Validate locally
   - Run: npm run build && npm start
   - Open "/" and pages that show the logo—logo must render.
   - Direct URL test must return 200:
       http://localhost:3000/media/logos/logosiluet.png
   - Network panel must show 200 for:
       /_next/image?url=/media/logos/logosiluet.png…

8) Commit
   - Commit asset placement and all code updates:
       "fix: unify logo to /public/media/logos/logosiluet.png and normalize next/image paths"

Acceptance criteria
- All logo references across the project point to "/media/logos/logosiluet.png".
- No 404 images in production; direct GET to "/media/logos/logosiluet.png" returns 200.
- No manual "/_next/image" building or encodeURIComponent around local paths.
- Build on Vercel is Ready; no 404/500 related to the logo.
