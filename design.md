# Design — Fwrog.github.io

Locked multi-page design system. The English and Chinese portfolio pages share
this system; amend it intentionally rather than overriding one route locally.

## System

- Genre · editorial
- Macrostructure family · Split Studio for both language routes
- Hero · H2 Split Diptych, 8/4 ratio, research-atlas proof column
- Navigation · N6 Newspaper Masthead
- Footer · Ft4 Dense Typographic
- Theme · studied DNA from the cited academic references, interpreted as “survey precision, mineral paper, cartographic restraint”
- Axes · light / roman-serif / chromatic-green ~165°
- Enrichment · Tier-B hand-built semantic SVG research atlas

## Typography and voice

- Display · Newsreader variable, weight 300, roman
- Body · IBM Plex Sans variable, weight 400; weight 700 for emphasis
- Chinese fallback · Songti SC for display, PingFang SC for body
- Primary action · rectangular outlined link with an ink fill
- Secondary action · rectangular hairline outline
- Copy · specific research claims, conservative status labels, no invented metrics

## Motion

- One Hero/atlas entrance using opacity and transform only
- Link feedback uses colour and a one-pixel press translation
- Reduced-motion fallback · static final state, transitions at or below 150 ms

## Tokens

`tokens.css` is the source of truth. Page styles must reference its named
variables instead of adding raw colour or font values.

## Exports

### Canonical `tokens.css`

```css
:root {
  --color-paper: oklch(97.5% 0.008 190);
  --color-paper-2: oklch(94% 0.012 190);
  --color-paper-3: oklch(90.5% 0.014 195);
  --color-ink: oklch(19% 0.020 205);
  --color-ink-2: oklch(33% 0.018 205);
  --color-rule: oklch(82.5% 0.014 195);
  --color-rule-2: oklch(74% 0.016 195);
  --color-muted: oklch(48% 0.016 205);
  --color-neutral: oklch(41% 0.016 205);
  --color-accent: oklch(43% 0.110 165);
  --color-accent-ink: oklch(97.5% 0.008 190);
  --color-focus: oklch(55% 0.160 165);
  --font-display: "Newsreader", "Songti SC", "STSong", ui-serif, serif;
  --font-body: "IBM Plex Sans", "PingFang SC", "Microsoft YaHei", ui-sans-serif, sans-serif;
  --font-mono: "IBM Plex Sans", "PingFang SC", ui-sans-serif, sans-serif;
  --space-3xs: 0.25rem; --space-2xs: 0.5rem; --space-xs: 0.75rem;
  --space-sm: 1rem; --space-md: 1.5rem; --space-lg: 2rem;
  --space-xl: 3rem; --space-2xl: 4.5rem; --space-3xl: 7rem;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem;
  --text-md: 1.25rem; --text-lg: 1.5625rem; --text-xl: 1.9531rem;
  --text-2xl: 2.4414rem; --text-display: clamp(2.75rem, 5vw + 1rem, 5.25rem);
  --text-display-desktop: 4rem; --text-display-desktop-zh: clamp(3.5rem, 5vw, 4.15rem);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-micro: 120ms; --dur-short: 220ms; --dur-long: 420ms;
  --radius-card: 0; --radius-pill: 0; --radius-input: 0;
}
```

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(97.5% 0.008 190);
  --color-paper-2: oklch(94% 0.012 190);
  --color-paper-3: oklch(90.5% 0.014 195);
  --color-ink: oklch(19% 0.020 205);
  --color-ink-2: oklch(33% 0.018 205);
  --color-rule: oklch(82.5% 0.014 195);
  --color-muted: oklch(48% 0.016 205);
  --color-accent: oklch(43% 0.110 165);
  --color-focus: oklch(55% 0.160 165);
  --font-display: "Newsreader", "Songti SC", ui-serif, serif;
  --font-body: "IBM Plex Sans", "PingFang SC", ui-sans-serif, sans-serif;
  --spacing-3xs: 0.25rem; --spacing-2xs: 0.5rem; --spacing-xs: 0.75rem;
  --spacing-sm: 1rem; --spacing-md: 1.5rem; --spacing-lg: 2rem;
  --spacing-xl: 3rem; --spacing-2xl: 4.5rem; --spacing-3xl: 7rem;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem;
  --text-md: 1.25rem; --text-lg: 1.5625rem; --text-xl: 1.9531rem;
  --text-2xl: 2.4414rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --radius-card: 0; --radius-pill: 0; --radius-input: 0;
}
```

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(97.5% 0.008 190)", "$type": "color" },
    "paper-2": { "$value": "oklch(94% 0.012 190)", "$type": "color" },
    "paper-3": { "$value": "oklch(90.5% 0.014 195)", "$type": "color" },
    "ink": { "$value": "oklch(19% 0.020 205)", "$type": "color" },
    "ink-2": { "$value": "oklch(33% 0.018 205)", "$type": "color" },
    "rule": { "$value": "oklch(82.5% 0.014 195)", "$type": "color" },
    "muted": { "$value": "oklch(48% 0.016 205)", "$type": "color" },
    "accent": { "$value": "oklch(43% 0.110 165)", "$type": "color" },
    "focus": { "$value": "oklch(55% 0.160 165)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Newsreader, Songti SC, serif", "$type": "fontFamily" },
    "body": { "$value": "IBM Plex Sans, PingFang SC, sans-serif", "$type": "fontFamily" }
  },
  "space": {
    "xs": { "$value": "0.75rem", "$type": "dimension" },
    "sm": { "$value": "1rem", "$type": "dimension" },
    "md": { "$value": "1.5rem", "$type": "dimension" },
    "lg": { "$value": "2rem", "$type": "dimension" },
    "xl": { "$value": "3rem", "$type": "dimension" },
    "2xl": { "$value": "4.5rem", "$type": "dimension" }
  },
  "duration": {
    "micro": { "$value": "120ms", "$type": "duration" },
    "short": { "$value": "220ms", "$type": "duration" },
    "long": { "$value": "420ms", "$type": "duration" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 97.5% 0.008 190;
  --foreground: 19% 0.020 205;
  --card: 94% 0.012 190;
  --card-foreground: 19% 0.020 205;
  --popover: 94% 0.012 190;
  --popover-foreground: 19% 0.020 205;
  --primary: 43% 0.110 165;
  --primary-foreground: 97.5% 0.008 190;
  --secondary: 90.5% 0.014 195;
  --secondary-foreground: 33% 0.018 205;
  --muted: 82.5% 0.014 195;
  --muted-foreground: 48% 0.016 205;
  --accent: 43% 0.110 165;
  --accent-foreground: 97.5% 0.008 190;
  --destructive: 58% 0.20 25;
  --destructive-foreground: 97.5% 0.008 190;
  --border: 82.5% 0.014 195;
  --input: 82.5% 0.014 195;
  --ring: 55% 0.160 165;
  --radius: 0;
}
```
