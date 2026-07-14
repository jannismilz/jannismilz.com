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
  "JANNIS MILZ" serif letterspaced caps, small dateline "Zürich, Switzerland ·
  Programming since age 12", right side: nav "Front page · Projects" + theme
  toggle (sun/moon, minimal). Single hairline below. Mobile: stacks, nav stays
  one row.
- **Letter**: big serif headline ("Either I find a way, or I create one."),
  body paragraphs, ends with a serif-italic sign-off "— Jannis" (~28px, like a
  signature). First paragraph gets a 3-line drop cap (serif, accent color).
- **Margin notes**: on ≥1280px, small serif-italic asides sit in the right
  margin next to their paragraph, marked with a superscript asterisk in accent
  color in the text. Below 1280px they render inline as indented footnote-style
  asides with a left hairline border. These carry the jokes.
- **Section labels**: eyebrow + hairline (see typography).
- **Project entries**: newspaper listing rows — serif title (22px) with year in
  ink-muted small caps, one-line description, small link label. Hover: title
  gets accent underline (2px, offset), trailing "→" slides 4px right. Hairline
  between rows.
- **Work timeline**: two rows, company + role, years right-aligned in tabular
  small caps.
- **Writing list**: compact rows: date (13px ink-muted, fixed width), title
  (16px, sans medium), external-link arrow ↗ on hover. No cards, no borders
  except hairline separators.
- **Figures (photos)**: at most 2–3 on the whole site. A figure = 4:3 or 3:4
  frame with 1px hairline border, slight paper-raised bg, and a 13px caption
  below in ink-muted with a serif-italic lead-in. Until real photos exist, the
  frame shows a dashed inner border and a small centered serif-italic
  placeholder line (e.g. "photo of me mid-somersault, eventually").
- **Footer**: hairline above, then: "© 2026 Jannis Milz · Zürich" /
  links (GitHub, LinkedIn, hi@jannismilz.com) / joke line: "Set in Instrument
  Serif & Sans. No cookies, no tracking — this paper doesn't follow you home."
- **404**: newspaper correction notice: eyebrow "CORRECTION", serif headline
  "This page never went to print.", body "In an earlier edition we may have
  implied this page exists. We regret the error." + link "Return to the front
  page →".

## Page structure

### Home (`/`) — the letter, everything at a glance
1. Masthead
2. Letter (headline, ~5 short paragraphs merging intro + about: started
   programming at 12, apprentice software developer at BSI (before: University
   of Zurich), gymnastics & athletics + coaching kids at the local club 10+
   years, curiosity: self-improvement, biographies, design, psychology,
   unsolvable math problems. 2 margin-note jokes max.) Signed "— Jannis".
3. NOW — three short items: building eintrittli.ch with Weborb; apprentice at
   BSI; competed at SwissSkills 2025 in Web Technologies.
4. SELECTED PROJECTS — 3 entries (eintrittli, weborb.ch, typst-payqr-swiss) +
   "All projects →" link.
5. WORK — timeline (BSI 2024–present, University of Zurich 2022–2024).
6. WRITING — compact list of external articles (Medium + the German
   SwissSkills interview), note "mostly written 2024, preserved here like
   old newspapers".
7. Contact line + Footer.

### Projects (`/projects`)
Eyebrow "THE PORTFOLIO", serif headline, intro sentence, then entries with
year + description + link: eintrittli (2025, live product — simple entry
check-in system, configurable forms, data export, no payments, no login),
weborb.ch (the small Swiss web studio it ships from), SwissSkills 2025
highlight box (Web Technologies competitor + interview link),
typst-payqr-swiss (Swiss QR bill generator for Typst), BBW Heroes,
Linux Cookbook. One figure placeholder allowed here (SwissSkills photo).

## Voice

First person, warm, direct, lightly self-deprecating. Jokes are short asides,
never in the way. English throughout (the interview link stays German, marked
"(German)").
