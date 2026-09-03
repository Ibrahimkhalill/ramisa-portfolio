/**
 * Builds the favicon from the portrait: `node scripts/make-favicon.mjs`
 *
 * index.html pointed at /ramisa.jpg, a file that stopped existing when the
 * portrait was replaced with a cut-out — so the tab had been falling back to
 * the browser's blank page icon.
 *
 * A favicon is looked at somewhere between 16 and 32 pixels across. A
 * half-length portrait at that size is a smudge, so this crops to the head and
 * sets it on the site's accent green: the cut-out has no background of its
 * own, and a transparent icon disappears into whichever tab bar it lands in.
 * The green also gives it something to be recognised by at 16px, where the
 * face itself has stopped carrying any information.
 */
import sharp from 'sharp';
import { statSync } from 'node:fs';

const SRC = 'public/ramisa.webp';
const ACCENT = '#3F6B52';

// Measured off the alpha: the crown sits at row 3, the head is centred on
// x 388 and is 254 wide at its widest, and the shoulders reach x 598 by row
// 263. This holds head and shoulders without clipping either.
const CROP = { left: 173, top: 0, width: 430, height: 430 };

// The subject is set on a square of accent a little larger than the crop and
// stood on its bottom edge, so the colour frames the head on three sides
// rather than showing as a sliver at the top.
const MARGIN = 0.16;

const cut = await sharp(SRC).extract(CROP).toBuffer();

const side = Math.round(CROP.width * (1 + MARGIN));
const mounted = await sharp({
  create: { width: side, height: side, channels: 4, background: ACCENT },
})
  .composite([
    {
      input: cut,
      left: Math.round((side - CROP.width) / 2),
      top: side - CROP.height,
    },
  ])
  .png()
  .toBuffer();

for (const size of [32, 180]) {
  const out = `public/favicon-${size}.png`;
  await sharp(mounted).resize(size, size).png({ compressionLevel: 9 }).toFile(out);
  console.log(out.padEnd(26), size + 'x' + size, statSync(out).size, 'bytes');
}
