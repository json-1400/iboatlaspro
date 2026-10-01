import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';

const targets = [
  'public/images/hero-devices.jpg',
  'public/images/server-room.jpg',
  'public/images/cta-remote.jpg',
];

for (const rel of targets) {
  const input = path.resolve(rel);
  const before = (await stat(input)).size;
  // Resize to max 1280px width, convert to webp quality 75, overwrite
  await sharp(input)
    .resize({ width: 1280, withoutEnlargement: true })
    .jpeg({ quality: 68, progressive: true, mozjpeg: true })
    .toFile(input + '.tmp');

  // Replace original
  const { rename } = await import('fs/promises');
  await rename(input + '.tmp', input);

  const after = (await stat(input)).size;
  console.log(`${rel}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`);
}
