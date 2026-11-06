# Rural West Project brand

Rural West Project's identity: the logos, ten colors in four groups, two typefaces, and the screen tokens that make them work on the web in light and dark themes. It's built from RWP's brand guide (`guide/`) and extended with what the 2026 election-night site ([rural-west-project/2026-results](https://github.com/rural-west-project/2026-results)) shipped. Every token the site uses has the same name and value here.

Values marked *guide* come straight from the brand guide. Values marked *screen* or *site* were added for screens: *screen* ones in the design system before the build, *site* ones during it. Use them on screen, but never quote them as brand colors in print.

## What's here

| Path | What |
| --- | --- |
| `tokens.json` | Every color, type style, spacing step, radius and shadow, each with a usage note. The source for everything else. |
| `tokens.css` | The same tokens as CSS custom properties, light and dark, plus `@font-face` rules and `.rwp-*` type classes. Generated. |
| `fonts/` | Oswald (SemiBold, Bold, Heavy) and Lato (Thin, Light, Regular, Medium, Semibold) as full WOFF2 files, with their licenses. |
| `logos/` | The four RWP logos as SVG and as the original PNGs. |
| `favicons/` | The 2026 site's favicon set, made from the badge. |
| `guide/` | The brand guide PDF (v2) everything starts from. |
| `scripts/build-css.mjs` | Rebuilds `tokens.css` from `tokens.json`. |

## Using it

**On a website:** copy `tokens.css` and `fonts/` together; the CSS loads the fonts from `fonts/`. Set `data-theme="light"` or `data-theme="dark"` on `<html>`, before first paint. Without one you get light. The 2026 site sets it from the viewer's choice or the system setting (`public/theme-init.js` there).

**Changing a value:** edit `tokens.json`, then run `node scripts/build-css.mjs` (Node 18 or later, no installs). Never edit `tokens.css` by hand.

**In Claude:** in your own Claude account, create a Design System and choose Sync from GitHub with this repo. `tokens.json` is already in the format it reads. That gives you a browsable copy that Claude can design with, and this repo stays the master copy.

**Subset fonts:** the 2026 site doesn't ship these full fonts. It ships Latin subsets, about a quarter of the size, made by `scripts/subset-fonts.py` in 2026-results. Lato's license reserves the name "Lato" for unmodified fonts, so the subset is renamed **RWP Sans**. Oswald has no reserved name.

## Name

- Write the name as **Rural West Project**. **RWP** is the short form the badge uses.
- Don't set the name in Oswald to imitate the logo. Where the logo belongs, use the logo files.

## Logo

| File | Use on |
| --- | --- |
| `rwp-primary-black` | The default logo. A black hexagon with RURAL WEST over • PROJECT • in white. Use it on `surface` in light and on `surface-alt`. |
| `rwp-primary-white` | A white outline and lettering with a clear interior. Use it on `primary-black`, `surface-inverse` in light, and `surface` in dark. Never place it on a light ground. |
| `rwp-badge-black` | RW over P in a black disc. Use it where the primary logo won't fit, in square or small spaces, on light grounds. |
| `rwp-badge-white` | The same badge as a white disc with a black ring and black letters. Use it on light grounds as the lighter-weight badge. On dark grounds it reads as a white disc. |

- Use the SVG on the web; it scales to any size. The SVGs are traced from the PNGs and match them to within half a pixel at the PNGs' size. The PNGs (primary 2305 px wide, badge 577 px square) are the source files; no vector originals exist. For large print, check the trace at size first, especially the badge.
- The files don't switch with the theme: pick the black or white file for the ground it sits on.
- Use the files as they are. Don't redraw, recolor, stretch, rotate, outline or add effects.
- The marks are pure black `#000000` and white `#ffffff` in the files, not `primary-black`.
- **With the RSI logo** (Regional States Initiative), as on the 2026 site: the two sit side by side as one lockup, never stacked. On the site that's the white RWP logo, a thin divider, then RSI's horizontal logo (white wordmark, orange arrow) at about 0.65 times the RWP logo's height, on a `primary-black` band. RSI's logos are RSI's and aren't in this repo.

### Favicons

`favicons/` holds the 2026 site's set: `favicon-light.svg` (black badge) and `favicon-dark.svg` (white badge), PNGs at 16, 32 and 48 px, `favicon.ico`, `apple-touch-icon.png` (180 px), and `icon-192.png`, `icon-512.png` and `icon-maskable-512.png` for Android. The `-dot` versions add the site's orange notification dot. Swap the light and dark icons with the site's theme.

## Color

### Brand palette (*guide*)

| Group | Token | Pantone | CMYK | Hex |
| --- | --- | --- | --- | --- |
| Primary | `primary-black` | Black C | 0 0 0 100 | `#231F20` |
| Primary | `primary-7595` | 7595 C | 39 72 72 38 | `#734338` |
| Secondary | `secondary-7504` | 7504 C | 37 50 69 13 | `#987656` |
| Secondary | `secondary-7506` | 7506 C | 8 12 22 0 | `#E8D9C4` |
| Secondary | `secondary-7536` | 7536 C | 40 36 47 3 | `#9C9584` |
| Partisan | `partisan-194` (Republican) | 194 C | 29 93 64 21 | `#992E45` |
| Partisan | `partisan-5405` (Democratic) | 5405 | 78 49 31 7 | `#44718C` |
| Bipartisan | `bipartisan-437` | 437 | 55 64 39 14 | `#775F72` |
| Bipartisan | `bipartisan-7449` | 7449 U | 64 70 49 38 | `#50404D` |
| Bipartisan | `bipartisan-439` | 439 C | 67 72 54 54 | `#3B2F39` |

- **Primary.** `primary-black` is the brand's ink and its dark ground. `primary-7595` is its one accent; use it through `accent`.
- **Secondary.** These are supporting colors, not text colors on white. Use `secondary-7506` for warm panels (it is `surface-alt` in light) and `secondary-7536` for hairlines (it is `line` in light). Use `secondary-7504` for fills and rules. It holds 4.2:1 on white, so it can carry text only at 24 px and up or bold 19 px and up.
- **Partisan.** `partisan-194` means Republican and `partisan-5405` means Democratic. Use them only to encode party in data. Never use them for buttons, links, decoration or brand accents. On screen, use them through `republican` and `democratic` so the dark theme switches to legible tints.
- **Bipartisan.** Use these for data that belongs to both parties rather than one. `bipartisan` (437 in light) is the single color. For a stepped scale, use `bipartisan-437`, then `bipartisan-7449`, then `bipartisan-439`, from lightest to darkest. Only 437 holds up on dark grounds, through `bipartisan`.
- **Label every party color with a word or letter** (R / D, Republican / Democratic). In light, the red and the blue differ by only 1.4:1 in lightness, and in dark they are the same lightness, so color alone fails some readers.
- **Don't use the guide's RGB values for 7595 C.** The guide prints R80 G110 B141, which is a blue. Its swatch, CMYK and hex all agree on `#734338`.

### Screen layer

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `surface` | white | `primary-black` | Page background |
| `surface-alt` | `secondary-7506` | `#2E292A` *screen* | Panels, callouts, table headers |
| `surface-soft` | `#F7F2EA` *site* | `#2E292A` *site* | Hover rows and cards, small strips |
| `surface-inverse` | `primary-black` | `secondary-7506` | Header or footer bands, heroes |
| `ink` | `primary-black` | `secondary-7506` | Text and headlines |
| `ink-muted` | `#605949` *screen* | `secondary-7536` | Secondary text, metadata |
| `ink-inverse` | white | `primary-black` | Text on `surface-inverse` |
| `line` / `line-strong` | 7536 C / `#7E7767` *screen* | `#463F40` *screen* / 7536 C | Hairlines / meaningful borders |
| `line-soft` / `line-faint` | `#CFC8BC` / `#E5E0D7` *site* | `#463F40` / `#3A3536` *site* | Grouping borders / row dividers |
| `accent`, `focus` | `primary-7595` | `#C38D80` *screen* | Actions, selected states, focus |
| `link` / `link-hover` | `primary-black` / `primary-7595` | `secondary-7506` / white | Links |
| `republican` / `democratic` / `bipartisan` | the guide colors | lighter tints *screen* | Party data |
| `democratic-ink` / `bipartisan-ink` | `#396580` / `#71596C` *screen* | follow `democratic` / `bipartisan` | Party-colored text on `surface-alt` |
| `on-*` | white | `primary-black` | Text on a filled `accent` or party color |
| `footer`, `footer-ink`, `footer-muted` | `primary-black`, cream, 7536 C | `#1A1718` *site*, cream, 7536 C | The site footer |

- Set text in `ink` or `ink-muted` on `surface`, `surface-alt` or `surface-soft`. Every pair holds at least 4.5:1 in both themes.
- `democratic` and `bipartisan` drop to 3.8:1 and 4.1:1 on `surface-alt` in light. On `surface-alt`, keep them for fills, map areas and chart marks. Set Democratic- or bipartisan-colored text there in `democratic-ink` or `bipartisan-ink` (4.5:1, the same hues a step darker). `republican` passes on both grounds (5.4:1 on `surface-alt`), so it has no ink variant.
- **Links are ink, always underlined,** turning 7595 on hover in light and white in dark. The underline is what marks a link. This replaced the original 7595 links, which read as muddy and too red (2026 site, 10/27).
- On a filled `accent`, `republican`, `democratic` or `bipartisan`, set the text in its `on-` token, never in a literal white.

## Election data (*site*)

The 2026 site's conventions for results. They sit outside the brand guide by design, and they're here for the next election site.

- **Party colors mean the party of whoever's winning,** never RWP's outcome. Republican `republican`, Democratic `democratic`, always with R or D. Independents use `independent` with an I.
- **Any other party** (Libertarian, Green, …) shows by name in a neutral gray chip, `party-other` with `on-party-other`. It never gets a party color or Independent's. Its result bar is `party-other-bar`.
- **Map fills** (`map-*`), one per state or district:

  | Fill | Meaning |
  | --- | --- |
  | `map-won-d` / `-r` / `-i` / `-o` | Won, in the winner's party color: Democratic, Republican, Independent or no party (bipartisan purple), any other party (gray) |
  | `map-lean-d` / `-r` / `-i` / `-o` | Leaning, a lighter tint of the same |
  | `map-tbd` | A tracked race still TBD |
  | `map-none` | No race RWP tracks |

  Labels sit on a `map-halo` stroke, so they read on any fill. The fills are told apart more by hue than lightness: won against leaning is about 2.6–3.3:1 in light but only 1.5–2.7:1 in dark, and `map-tbd` against `map-none` is 1.3:1 in light. Always show the legend, and keep the outcome icons.
- **RWP's outcome is a word or icon, never color alone:** Win / Leaning win / TBD / Leaning loss / Loss, always about RWP's candidate or position. Badges (`b-*`) are flat, 24 px tall with 12 px text in lists (36 px on page headers), 2 px corners, with dashed borders for the leaning states. Win is a green, Loss a brown that isn't the 7595 accent. Their text holds 5.8:1 or better in both themes.
- **Map outcome icons** (`i-*`): Win is a green scalloped rosette with a check, like an award seal; Loss is a smaller, muted warm-gray disc with a cross. Leaning ones are light discs with a dashed ring. They're flat, with a thin `map-halo` ring.
- **Regions** (`region-1` to `region-3`): sand for Rural West, sage for American South, mauve for Appalachia / Ozarks, for the "Our Regions" map. They're told apart by hue only, so that view always has its legend. `region-4` is spare.
- **Change highlights:** `highlight` (`#F1A529`, RSI's orange) marks what just changed, through the `glow` shadow on a badge or map shape, or `highlight-tint` with 2 px lines behind a new news update. It holds until seen, then fades over about 4 seconds. Never use it for text (2.1:1 on white).
- The admin screens' own colors (buttons, Publish-preview warnings) stay in 2026-results' `src/styles/index.css`; they aren't brand.

## Type

- **Headlines: Oswald** (`headline` family). The styles are `display` (Heavy 900, at most one per page), `h1` and `h2` (Bold 700) and `h3` (Semibold 600).
- **Body: Lato** (`body` family). The styles are `lead` (Light 300), `body` (Regular 400), `small` (Medium 500), `label` (Semibold 600, set in capitals and tracked 0.2em like the logo's PROJECT line) and `thin` (Thin 200, for large figures only). In CSS they're the classes `.rwp-display` through `.rwp-thin`.
- Use only the guide's weights: Oswald 600, 700 and 900, and Lato 200, 300, 400, 500 and 600. Lato has no Bold here, so use Semibold 600 for emphasis.
- Never set Lato Thin below 32 px or in body text.
- Load the fonts from these files, not Google Fonts. Google's Lato has no Medium or Semibold, and Google's Oswald stops at Bold. These are Lato 2.015 (latofonts.com) and the Oswald Project's 4.101 build, which includes the guide's Oswald Heavy. Both are under the SIL Open Font License; the license texts are in `fonts/` and must travel with the fonts.
- The sizes are a starter scale (*screen*). The guide names faces and weights but no sizes.

## Layout

- Space with the 4 px steps: `space-1` through `space-16`. Pad cards with `space-4`. Separate sections with `space-8` on phones and `space-12` on desktop.
- Keep corners crisp. Use `radius-sm` (2 px) for tags, inputs, badges and chart bars and `radius-md` (4 px) for buttons and cards. Reserve `radius-full` for true circles, like the badge.
- Keep surfaces flat. Separate them with `surface-alt`, `surface-soft` and the `line` tokens rather than shadows.
- Give every interactive element `focus-ring`: a 2 px gap in `surface`, then 2 px of solid `focus`. The ring holds at least 5:1 on `surface` and `surface-alt` in both themes.
- Spacing, radii and the focus ring are all *screen* additions.

## Iconography and imagery

- The guide defines no icon set and no photography style. Don't use the RWP badge as an icon, apart from favicons and app icons.

## Where this came from

- **The brand guide** (v2, `guide/`): logos, the ten colors, the two typefaces and their weights.
- **The design system** built from it in Claude (October 2026): the screen layer, the dark theme, the type scale, spacing, radii, the focus ring, the SVG traces, and the font files.
- **The 2026 election site**: the link change, the election-data colors, the favicons, and the `surface-soft`, `line-soft`, `line-faint` and footer tokens. Its `src/styles/index.css` uses the same token names.
