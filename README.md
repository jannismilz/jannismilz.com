# jannismilz.com

Repository for the [jannismilz.com](https://jannismilz.com) website. My
personal website, designed like a modern newspaper: warm paper, Instrument
Serif & Sans, and a signed letter on the front page.

## Stack

Next.js (App Router, static output) · React · Tailwind CSS v4 · next-themes
(light "paper" / dark "night ink").

The design system lives in `design/SPEC.md`, with standalone HTML previews in
`design/previews/` (synced to a Claude Design project).

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Optionally set `NEXT_PUBLIC_SITE_URL` in `.env.local` (defaults to
`https://jannismilz.com` for metadata).
