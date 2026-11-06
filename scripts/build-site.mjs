// Assembles the brand page for GitHub Pages into _site/. No dependencies: `node scripts/build-site.mjs`.
// The page (site/index.html) reads tokens.json and tokens.css at runtime, so it never drifts
// from them. The brand guide PDF stays out: the page is public, the repo is private.
import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, '_site');
rmSync(out, { recursive: true, force: true });
mkdirSync(out);
cpSync(join(root, 'site/index.html'), join(out, 'index.html'));
for (const f of ['tokens.css', 'tokens.json']) cpSync(join(root, f), join(out, f));
for (const d of ['fonts', 'logos', 'favicons']) cpSync(join(root, d), join(out, d), { recursive: true });
writeFileSync(join(out, '.nojekyll'), '');
console.log('_site/ ready');
