# jannismilz.com — Redesign Spec ("The Paper")

A personal site styled like a modern newspaper crossed with the Laravel Cloud
pre-launch letter. Warm paper, ink text, serif headlines, signed letter, small
jokes in the margins. Straight-forward to read — personality never costs
legibility.

## Typography

- **Display / headlines / pull quotes / margin notes**: Instrument Serif
  (Google Fonts, weight 400, normal + italic). Never used below ~18px except
  for italic margin notes.
- **Body / UI / labels**: Instrument Sans (Google Fonts, variable 400–700).
- **Section labels ("eyebrows")**: Instrument Sans, uppercase,
  `letter-spacing: 0.12em`, 11–12px, ink-muted color, followed by a hairline
  rule filling the remaining line width.
- Type scale (desktop): masthead title 28px serif caps (letterspaced 0.08em);
  H1 display 52–64px serif, line-height 1.05; section headings 28px serif;
  body 17px/1.65 sans; small/meta 13–14px; margin notes 15px serif italic.
- Letter column measure: ~65ch, centered.

## Color

Semantic tokens that flip between themes (CSS variables):

| Token          | Light ("paper")        | Dark ("night ink")      |
| -------------- | ---------------------- | ----------------------- |
| `paper` (bg)   | `#FAF6EF`              | `#0B1220`               |
| `paper-raised` | `#F3EDDF`              | `#121B2E`               |
| `ink` (text)   | `#1A1815`              | `#EDE7DA`               |
| `ink-muted`    | `#6E6558`              | `#98A0B0`               |
| `hairline`     | `#E3DAC6`              | `#1E293D`               |
| `accent`       | `#C8371E` (swiss-warm red) | `#FF6B4A`           |
| `accent-amber` | `#C77B0A`              | `#FFA02E`               |

- Accent used sparingly: links, the one gradient headline word, markers.
- Gradient (rare, headline emphasis only): accent → accent-amber, left to right.
- Text selection: light `#F9E3DB` bg with `#A62B16` text; dark `#3A1710` bg
  with `#FFB29E` text.
- Dark mode = `.dark` class on `<html>` (next-themes).

## Recurring motifs

- **Masthead** (site header): thin double rule on top (1px + 3px gap + 1px),
  "JANNIS MILZ" serif letterspaced caps, small dateline with personality words
  ("Programmierer · Turner · Tüftler" / "Programmer · Gymnast · Tinkerer"),
  right side (vertically centered): nav "Der Brief · Projekte · Texte" (EN:
  "The Letter · Projects · Writing") + theme toggle + tiny uppercase locale
  switch showing the language you'd switch TO ("EN"/"DE"). Single hairline
  below. Mobile: stacks, nav stays one row.
- **Letter**: big serif headline ("Entweder finde ich einen Weg, oder ich
  erschaffe einen." / "Either I find a way, or I create one."), body
  paragraphs, ends with a serif-italic sign-off "Jannis" (~28px, like a
  signature). First paragraph gets a 3-line drop cap (serif, accent color).
- **Margin notes**: on ≥1280px, small serif-italic asides sit in the right
  margin next to their paragraph, with no marker glyph (user rejected both ✳
  and †). Below 1280px they render inline as indented footnote-style asides
  with a left hairline border. These carry the jokes.
- **Pull quote**: a short line lifted from the letter, 26–30px serif italic
  between two hairlines, small caps caption below. One per page max.
- **Section labels**: eyebrow + hairline (see typography).
- **Project entries**: newspaper listing rows — serif title (22px), optional
  status in ink-muted small caps (omitted where a category heading already
  says it), one-line description, small link label. Hover: title gets accent
  underline (2px, offset), trailing "→" slides 4px right. Hairline between
  rows. On the projects page, entries are grouped by category (Products / The
  studio / Open source / School projects), each group under an eyebrow.
- **Writing lists**: own articles as rows with date, serif title (24px), and
  description; external archive as compact rows: date (13px ink-muted, fixed
  width), title (16px, sans medium), external-link arrow ↗ on hover. Articles
  in a different language than the page get a small uppercase language tag.
  No cards, no borders except hairline separators.
- **Figures (photos)**: three slots (gymnastics in the home opening, coaching
  in the home closing, SwissSkills in the highlight box). Figures must sit IN
  flowing text (floated, sm:w-48, 3:4) — standalone header figures looked
  wrong-sized and were removed. A figure = frame with 1px hairline border,
  slight paper-raised bg, and a 13px caption below in ink-muted with a
  serif-italic lead-in. Until real photos exist, the frame shows a dashed
  inner border and a small centered serif-italic placeholder line. User fills
  in real photos over time.
- **Footer**: hairline above, then: "© 2026 Jannis Milz · Zürich" /
  links (GitHub, LinkedIn, hi@jannismilz.com) / joke line: "Gedruckt in
  Zürich, gelesen, wo immer du gerade bist." ("Printed in Zürich, read
  wherever you happen to be.")
- **404**: newspaper correction notice: eyebrow "CORRECTION", serif headline
  "This page never went to print.", body "In an earlier edition we may have
  implied this page exists. We regret the error." + link "Return to the front
  page →".

## Page structure

### Home (`/`) — a short letter opening, content blocks, a short sign-off
The letter is deliberately SHORT (user rejected long body text twice):
1. Masthead
2. Letter opening: headline, gymnastics figure floated right, TWO paragraphs
   only (motto + margin note; programming/BSI + gymnastics/coaching in two
   sentences), then the pull quote ("Ausprobieren, bis etwas kaputtgeht…").
3. JETZT / NOW — three short items: building eintrittli.ch with Weborb;
   apprentice at BSI; competed at SwissSkills 2025.
4. FRISCH GEDRUCKT / FRESH OFF THE PRESS — the 3 latest pieces from the
   writing page (own posts + highlights mixed, sorted by date) + "Alle
   Texte →" link.
5. PROJEKTE / PROJECTS — compact two-row teaser (eintrittli, weborb.ch) with
   one-line taglines + "Alle Projekte →" link.
6. ZUM SCHLUSS / IN CLOSING — coaching figure floated right, three short
   paragraphs (tough crowd of ten-year-olds; curiosity + margin note;
   contact/mail). Signed "Jannis". No PS box (user removed it).
7. Footer.

### Projects (`/projects`)
Eyebrow "DAS PORTFOLIO" / "THE PORTFOLIO", serif headline, intro sentence,
then entries grouped by category, each category set off like its own
newspaper section: thin double rule (h-1 border-y ink), 26px serif category
title with a serif-italic tagline beside it (e.g. Produkte — "Dinge, die man
heute schon benutzen kann."), then the entries with hairline separators.
Categories: Products (eintrittli), The studio (weborb.ch), Open source
(typst-payqr-swiss), School projects (BBW Heroes, Linux Cookbook). Entries
show no status label (the category heading carries it). SwissSkills 2025
highlight box (Web Technologies competitor + interview link + figure
placeholder) at the bottom.

### Writing (`/writing`)
Eyebrow "SCHREIBEN" / "WRITING" (user rejected "Texte"), serif headline,
intro. Three sections, each opened with the same newspaper section header as
the projects page (double rule + serif title + italic tagline, shared
`SectionHeader` component), all fed from the easy-to-edit lists in
`src/lib/writing.ts`:
1. EIGENE TEXTE / MY WRITING — own posts (MDX files in
   `src/content/writing/`, rendered at `/writing/<slug>` with the site's
   newspaper typography via `src/mdx-components.tsx`).
2. HIGHLIGHTS — press features/interviews (title, description, source,
   date), currently the German SwissSkills interview.
3. AUS DEM ARCHIV / FROM THE ARCHIVE — compact Medium list, note "mostly
   from my 2024 Medium era, preserved here like old newspapers".

## Localization

German is the default (native, more personal) at `/`; English lives under
`/en` (next-intl, `localePrefix: 'as-needed'`). All UI and page copy lives in
`messages/de.json` / `messages/en.json`. Articles stay in the language they
were written in and get a language tag when it differs from the page locale.
hreflang alternates + sitemap + robots are generated (`src/lib/seo.ts`,
`src/app/sitemap.ts`, `src/app/robots.ts`).

## Voice

First person, warm, direct, lightly self-deprecating. Jokes are short asides,
never in the way. NO tech jokes or tech jargon in the copy (no "deployment",
"standup", "code review", "cookies/tracking" quips) — the site is written for
readers of all kinds, not just tech people; his profession may be stated as a
fact, never as an in-joke. No em-dashes anywhere in site copy; use commas,
colons, or periods instead (verbatim external titles keep theirs). German
copy uses «guillemets» for quotes.
