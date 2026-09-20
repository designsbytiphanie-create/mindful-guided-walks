# Mindful Guided Walks

> Two hours. Half a mile. A tea ceremony among the trees.

## Brand Identity

- **Personality:** Grounded, unhurried, sincere — a wellness practice, not a hike or a spa.
- **Audience:** Women 45+, mostly on mobile. Body text is never below 16px and every text/background pairing is checked against WCAG AA.
- **Colors:**
  - Birch `#F1F0E4` — page background
  - Lichen `#CBD4B4` — fills and cards
  - Fern `#6E8C4F` — primary accent, button fills only (fails AA as text)
  - Deep Moss `#33482F` — dark bands and hover states
  - Loam `#5B4633` — earth tone, borders
  - Forest Ink `#141C13` — headings and body text
- **Fonts:** Fraunces at weight 500 with the WONK axis set to 0 for conventional letterforms (headings + both wordmarks), Literata Regular (body) — both loaded from Google Fonts via `next/font` as full variable fonts.
- **Buttons:** Leaf-shaped radius (22px/2px/22px/2px, sharp corners top-right and bottom-left). Primary = Fern fill + Forest Ink text (inverts to Birch fill on dark backgrounds).
- **Text links** (as opposed to buttons): underlined, Loam on light backgrounds / Lichen on dark, with a Deep Moss/Birch hover shift. Used for secondary, non-CTA actions like "What to expect" and "See all dates."
- **Text measures:** two shared widths only — 672px for section intros, 448px for supporting/list body copy.
- **Heading hierarchy:** two sizes — primary (48px, used for "What a walk is" and "Upcoming dates" only) and supporting (36px, everything else).

## Pages

- **Homepage** (`/`) — fully built. See section breakdown below.
- **Walks** (`/walks`), **Dates** (`/dates`), **Bedrock Babes** (`/bedrock-babes`), **Corporate** (`/corporate`), **About** (`/about`), **Contact** (`/contact`), **Liability waiver** (`/liability-waiver`) — linked from navigation and footer, **not yet built**. Visiting them in the preview will 404 until we build them.

## Homepage Sections

1. **Hero** — split layout, Lichen color panel + forest photo slot. Buttons jump to on-page anchors (`#dates`, `#what-a-walk-is`).
2. **What a walk is** — Birch background, three-step numbered list (We gather / We walk slowly / We sit for tea).
3. **Upcoming dates** (`#dates`) — Lichen background, three walk cards (image, date, location, time, price) — card details are placeholder data, see below.
4. **Meet the guide** (`#guide`) — Birch background, portrait + placeholder bio for Terry.
5. **Why it works** (`#why-it-works`) — Deep Moss background, Birch text, forest bathing explainer.
6. **Bedrock Babes** (`#bedrock-babes`) — Birch background, centered, extra whitespace, one photo slot.
7. **Corporate** (`#corporate`) — Birch section with a Loam card (rounded, hugs its content) holding the copy and Enquire button, so it doesn't read as an empty full-bleed color band.
8. **Email signup** (`#signup`) — Lichen background. A static facts row ("TWO HOURS · HALF A MILE · NEVER MORE THAN TEN · TEA AT THE END") sits above a Birch card containing the heading, a 560px-wide email field + Sign me up button (front-end only, not wired to an email service yet), and a reassurance line.
9. **Footer** — wordmark, tagline, location, repeated nav, Liability waiver + Instagram links.

## Components

- **Navbar** (`components/Navbar.tsx`) — wordmark, nav links, Contact button, mobile hamburger menu. Lives in the root layout so it's on every page.
- **Footer** (`components/Footer.tsx`) — also in the root layout.
- **Button** (`components/Button.tsx`) — primary / primary-inverted variants.
- **TextLink** (`components/TextLink.tsx`) — underlined inline links, separate from buttons.
- **PhotoSlot** (`components/PhotoSlot.tsx`) — placeholder for photography: Lichen fill with "Photograph" in Loam at 14px, until real photos are supplied.
- **EmailSignupForm** (`components/EmailSignupForm.tsx`) — the signup form.

## Content still needed from you

**Placeholder text on the page (clearly marked, needs your real copy):**
- Guide bio in "Meet the guide" — needs 2-3 real sentences about Terry.
- All three walk cards in "Upcoming dates" — need real date, location, time, and price for each.
- Instagram footer link currently points to `#` — needs your real Instagram URL.

**Image slots needed (all currently gray "Photograph" placeholders):**

| Slot | Where | Aspect ratio | Minimum file size (2x) |
|---|---|---|---|
| Hero forest photo | Hero section, right side | 4:5 (portrait) | 1200×1500px |
| Guide portrait | Meet the guide section | 4:5 (portrait) | 960×1200px |
| Walk card photos (×3) | Upcoming dates cards | 1:1 (square) | 800×800px |
| Bedrock Babes photo | Bedrock Babes section | 3:2 (landscape) | 1600×1067px |

Once you send over photos and the missing text, I'll drop them in.

## How to Customize

- **Colors:** all defined once in `app/globals.css` — change a hex value there and it updates everywhere.
- **Copy:** edit the text directly in `app/page.tsx`.
- **Add a new page:** create a new folder in `app/` with a `page.tsx` inside, e.g. `app/about/page.tsx` for `/about`.

## Recent Changes

- 2026-09-20: Built the homepage from your detailed brief — brand colors/fonts, navigation, footer, and all 9 homepage sections with your exact copy. Flagged placeholder content (guide bio, walk card details, Instagram link) and listed required photo slots above.
- 2026-09-20: Consistency pass — separated the email signup section from Corporate/Footer with a Birch band so colored sections never sit adjacent; converted ambiguous button-styled links to real underlined text links; unified all body text onto two shared width measures; fixed the Meet-the-guide section's image-driven padding asymmetry; matched the footer tagline's letter spacing to the eyebrows; rebuilt Corporate as a contained card instead of a full-bleed band; introduced a two-tier heading hierarchy (What a walk is / Upcoming dates read larger); changed heading font to Fraunces weight 500 with conventional (WONK 0) letterforms; renamed the ambiguous "What a walk is" link to "What to expect."
- 2026-09-20: Made the hero's "What to expect" a real secondary button (was a mismatched text link) matching the primary button's height exactly; reverted email signup back to Lichen so Bedrock Babes/Corporate/Footer don't read as an unbroken Birch run; rebuilt the signup section as a static facts row above a Birch card containing a wider (560px), height-matched email field + button and a reassurance line.
