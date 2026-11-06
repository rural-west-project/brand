// Builds tokens.css from tokens.json. No dependencies: `node scripts/build-css.mjs`.
// tokens.json is the source; never edit tokens.css by hand.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const t = JSON.parse(readFileSync(join(root, 'tokens.json'), 'utf8'));
const themes = t.color.themes.map((th) => th.id);
const [first] = themes;

const ref = (v) => {
  const m = /^\{(.+)\}$/.exec(v);
  return m ? `var(--${m[1]})` : v;
};
// A plain value belongs to the first theme. An alias is re-declared in every theme block, so it
// resolves to the right theme even when data-theme is set below the root element.
const valueIn = (tok, theme) => {
  if (typeof tok.value !== 'string') return tok.value[theme] ?? (/^\{/.test(tok.value[first]) ? tok.value[first] : undefined);
  return theme === first || /^\{/.test(tok.value) ? tok.value : undefined;
};

const out = [`/* ${t.name} — generated from tokens.json by scripts/build-css.mjs. Don't edit by hand. */`, ''];

for (const f of t.type.fonts) {
  out.push(
    `@font-face { font-family: '${f.family}'; font-weight: ${f.weight}; font-style: ${f.style ?? 'normal'}; ` +
      `font-display: swap; src: url('${f.file}') format('woff2'); }`,
  );
}
out.push('');

const themed = [...t.color.tokens, ...(t.shadow?.tokens ?? [])];
themes.forEach((theme, i) => {
  const lines = [];
  for (const tok of themed) {
    const v = valueIn(tok, theme);
    if (v !== undefined) lines.push(`  --${tok.name}: ${ref(v)};`);
  }
  out.push(`${i === 0 ? `:root, [data-theme="${theme}"]` : `[data-theme="${theme}"]`} {`);
  out.push(...lines, `  color-scheme: ${theme === 'dark' ? 'dark' : 'light'};`, '}', '');
});

out.push(':root {');
for (const fam of ['spacing', 'radius']) for (const tok of t[fam].tokens) out.push(`  --${tok.name}: ${tok.value};`);
for (const [k, v] of Object.entries(t.type.families)) out.push(`  --font-${k}: ${v};`);
out.push('}', '');

for (const g of t.type.groups) {
  for (const s of g.styles) {
    const decl = [
      `font-family: var(--font-${s.family ?? g.family})`,
      `font-size: ${s.fontSize}`,
      `line-height: ${s.lineHeight}`,
      `font-weight: ${s.fontWeight}`,
      s.letterSpacing ? `letter-spacing: ${s.letterSpacing}` : null,
    ].filter(Boolean);
    out.push(`.rwp-${s.name} { ${decl.join('; ')}; }`);
  }
}
out.push('');

writeFileSync(join(root, 'tokens.css'), out.join('\n'));
console.log(`tokens.css: ${themed.length} themed tokens × ${themes.length} themes`);
