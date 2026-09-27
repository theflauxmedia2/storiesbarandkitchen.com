# Open ends — Stories Bar & Kitchen

<!--
Tracked by Flaux HQ. Rules:
- One item per line: "- [ ] text #tags"
- Priority tags: #high #medium #low (default medium)
- Other tags allowed: #mobile #blog #homepage etc.
- When fixed: tick it "- [x]" or delete the line, in the same commit as the fix.
- Or write "closes OE: <item text>" in the commit message.
- Keep the section headings exactly as they are.
-->

## Bugs
- [ ] "View Menu" on `/food-and-drinks` links to each location page (`src/app/food-and-drinks/page.tsx`), and "View Food Menu" plus "View Drinks Menu" on `/locations/[slug]` both link back to `/food-and-drinks` (`src/app/locations/[slug]/page.tsx`) — there is no menu at either URL. #high #menu
- [ ] Event enquiry form in `src/components/EventEnquiryForm.tsx` shows the success state after `window.open` even if the WhatsApp tab is blocked, so the guest can think the enquiry was delivered. #medium #contact

## SEO
- [ ] Replace `public/og-image.png` (447×447) and `DEFAULT_OG_IMAGE` in `src/lib/seo.ts` with a 1200×630 image; contact, story, events, gallery, food, locations index and the four policy pages inherit this square default. #medium
- [ ] Homepage Open Graph image in `src/app/page.tsx` is `interior-bar-dining.webp` at 1024×682, not 1200×630. #medium #homepage
- [ ] `src/app/our-story/page.tsx`: rendered title is 33 characters ("Our Story | Stories Bar & Kitchen"); meta description is 170 characters. Target 50–60 and 140–160. #medium
- [ ] `src/app/food-and-drinks/page.tsx`: rendered title is 39 characters; meta description is 171 characters. #medium #menu
- [ ] `src/app/gallery/page.tsx`: rendered title is 31 characters; meta description is 125 characters. #medium
- [ ] `src/app/contact/page.tsx`: rendered title is 49 characters; meta description is 139 characters. #low #contact
- [ ] `src/app/locations/page.tsx`: rendered title is 46 characters (description is 146 and in range). #low
- [ ] Location meta descriptions in `src/data/outlets.ts` are short of 140 characters: HSR Layout 130, Nagarbhavi 118, Rajajinagar 130 (titles are 58–60 and in range). #medium
- [ ] Legal meta descriptions are under 140 characters: privacy 109, terms 93, booking 89, responsible drinking 115 (`src/app/privacy-policy/page.tsx`, `src/app/terms-and-conditions/page.tsx`, `src/app/booking-policy/page.tsx`, `src/app/responsible-drinking-policy/page.tsx`). #low
- [ ] Add latitude, longitude and PIN codes to each Restaurant node in `src/components/JsonLd.tsx`; addresses in `src/data/outlets.ts` have no postal code or geo. #medium
- [ ] Split past-midnight hours in `src/components/JsonLd.tsx` (`opens: "12:00"`, `closes: "01:00"` on one block) so Google does not read closing time as before opening. #medium
- [ ] Confirm or remove the unsourced AggregateRating of 4.4 from 40,000 reviews on the brand Restaurant in `src/components/JsonLd.tsx` before the site is indexed. #high
- [ ] Add a web app manifest (`src/app/manifest.ts`); favicons and `src/app/apple-icon.png` exist, a manifest does not. #low
- [ ] Add Google Search Console verification (meta tag or HTML file); none is in `src/app/layout.tsx` or `public/`. #medium
- [ ] Add a GA4 or other analytics snippet in `src/app/layout.tsx`; `src/data/policies.ts` says the site may use analytics, and no script is installed. #medium
- [ ] Add Google Business Profile URLs to `sameAs` in `src/components/JsonLd.tsx` (only the three Instagram profiles are listed). #medium
- [ ] Gallery alt text in `src/components/GalleryGrid.tsx` is only "outlet — category" (for example "Hsr Layout — ambience"); write a short description of each photo. #low #gallery

## Client inputs needed
- [ ] Have a lawyer review the four draft policies in `src/data/policies.ts` (privacy, terms, booking, responsible drinking) before publishing. #high
- [ ] Send the real current events calendar for HSR Layout, Nagarbhavi and Rajajinagar to replace the sample list in `src/data/events.ts`. #high #events
- [ ] Send the full food and drinks menu with prices for each outlet; the site only has curated dish photos in `src/data/dishes.ts`. #high #menu
- [ ] Send the source for the 4.4 rating and 40,000 review count used in `src/components/JsonLd.tsx`, or confirm it should be removed. #high
- [ ] Send Google Place IDs or verified map pins for the three outlets so `src/lib/maps.ts` can stop using free-text address queries. #medium
- [ ] Send PIN codes and map coordinates for the three addresses in `src/data/outlets.ts`. #medium
- [ ] Confirm the three 080 numbers in `src/data/outlets.ts` (`+918046809320`, `+918046809512`, `+918046809322`) are WhatsApp Business numbers; they are used as the WhatsApp links and look like Bengaluru landlines. #medium #contact
- [ ] Send Google Business Profile URLs, plus Search Console and GA4 access, for storiesbarandkitchen.com. #medium
- [ ] Send photos for events, live performances, DJ nights and celebrations; `public/assets` only has ambience, drinks, guest-moments and shared food. #medium #gallery
- [ ] Send an SVG logo if one exists; current marks are `public/logo.png` and `public/logo-nav.webp`. #low

## Features to build
- [ ] Build a real per-outlet food and drinks menu (page or PDF) and point "View Menu", "View Food Menu" and "View Drinks Menu" at it instead of the circular location links. #high #menu
- [ ] Save event enquiries where the outlet can read them; `src/components/EventEnquiryForm.tsx` only opens WhatsApp and nothing is stored if the guest does not press send. #medium #contact

## Content
- [ ] Privacy policy in `src/data/policies.ts` says bookings and enquiries are emailed through Web3Forms; table booking opens ReserveGo and event enquiries open WhatsApp. #high
- [ ] `/events` will publish the sample line-up in `src/data/events.ts` (Saturday DJ Night, Weekend Sports Screening, Sunday Family Experience, Friday Live Music) as if it were the real calendar. #high #events
- [ ] Food page copy in `src/data/content.ts` ("Choose your nearest outlet to view the correct food and beverage menu") promises a menu the location pages do not contain. #high #menu
- [ ] Outlet addresses in `src/data/outlets.ts` say "Bangalore" while the rest of the site says "Bengaluru". #low
- [ ] `landmark` is an empty string on all three outlets in `src/data/outlets.ts`. #low

## Performance & accessibility
- [ ] Compress Rajajinagar terrace WebPs that are over 300KB (largest is `public/assets/rajajinagar/ambience/terrace-angle.webp` at 402KB); `next.config.ts` sets `images.unoptimized: true`, so they ship at full size. #medium
- [ ] Remove or use `public/hero.webp` (304KB); nothing in `src/` references it. #low
- [ ] `.field` in `src/app/globals.css` sets `outline: none` and focus only tints the border with 32% gold; `.btn-primary` and `.btn-secondary` have no `:focus-visible` style. #medium
- [ ] Home hero slide buttons in `src/components/HeroSlider.tsx` sit inside an `aria-hidden` wrapper, so their `aria-label`s are hidden from assistive tech. #medium #homepage
- [ ] Add a "skip to content" link in `src/app/layout.tsx`; keyboard users have to tab through the fixed nav on every page. #low

## Launch & infra
- [x] `npm run build` fails on this machine (missing `lightningcss.darwin-arm64.node`, and the Next.js SWC binary is blocked by macOS code signature policy), so the Hostinger `/out` folder cannot be generated here. #high
- [ ] Add Hostinger rules for HTTPS, www to non-www (`https://storiesbarandkitchen.com`, matching `src/lib/seo.ts`), and a 404 that serves the exported 404 page; the repo has no `.htaccess`. #high
- [ ] Confirm DNS for storiesbarandkitchen.com points at Hostinger and SSL is active before uploading `/out`. #high
- [ ] Document a backup and a post-upload check for the Hostinger static export; `README.md` only says to upload `/out`. #low
