# Sacrada — Client Setup Guide

Welcome to your Sacrada website. Everything is ready to go live. Before you launch, there are a few things to set up.

---

## 1. Set up Calendly

1. Go to [calendly.com](https://calendly.com) and create a free or paid account.
2. Click **Create Event Type** → choose **One-on-One**.
3. Name the event: **The Sacrada Session**
4. Set the duration to **60–75 minutes**.
5. Set your availability and any buffer times you want between sessions.
6. Under **Pricing** (if using Calendly premium) or via Stripe integration, set the price to **$111 USD**.
7. Customise the confirmation and reminder emails with the Sacrada name and tone.
8. Copy the shareable link — it will look like:
   ```
   https://calendly.com/YOUR-NAME/the-sacrada-session
   ```

---

## 2. Update CONFIG.bookingUrl in js/main.js

Open `js/main.js` and paste your Calendly link into `bookingUrl`:

```js
const CONFIG = {
  bookingUrl: "https://calendly.com/YOUR-NAME/the-sacrada-session",
  ...
};
```

Save the file and deploy. All **Book** buttons on the site will immediately activate and link to your Calendly page.

---

## 3. All CONFIG values to fill in

Open `js/main.js` and update any of the following:

| Key | What to put here | Example |
|-----|-----------------|---------|
| `bookingUrl` | Your Calendly event URL | `"https://calendly.com/sacrada/session"` |
| `email` | Contact email address | `"hello@sacrada.space"` |
| `instagramUrl` | Instagram profile URL | `"https://instagram.com/sacrada.space"` |
| `sessionLength` | Session duration (already set) | `"60–75 minutes"` |
| `onlinePlatform` | Video call platform (already set) | `"a private video call"` |
| `inPersonLocation` | In-person location if offered | `"London, UK"` |
| `cancellation` | Cancellation policy (already set) | `"you can reschedule with at least 24 hours' notice"` |

Any key left as an empty string `""` will simply not display that feature on the site.

---

## 4. Update [[CONTACT EMAIL]] in legal pages

The privacy and terms pages contain the placeholder `[[CONTACT EMAIL]]`. Once you have a contact email, do a find-and-replace in both:
- `privacy.html`
- `terms.html`

Replace `[[CONTACT EMAIL]]` with your actual email address (e.g. `hello@sacrada.space`).

---

## 5. OG image (for social sharing)

The file `assets/img/og-image.svg` is the image that appears when your link is shared on social media (Facebook, Twitter/X, iMessage, etc.).

It currently uses the Sacrada wordmark and crescent moon — no changes needed.

To preview how it will look when shared, visit: [opengraph.xyz](https://www.opengraph.xyz/) and paste your URL once the site is live.

> **Note:** Some platforms do not render SVG as OG images. If social previews are not showing correctly, export `assets/img/og-image.svg` to a 1200×630 PNG (using Figma, Inkscape, or a browser screenshot tool), save it as `assets/img/og-image.png`, and update the `og:image` meta tag in `index.html` to point to the `.png` version.

---

## 6. Domain and deployment

The site is configured for `https://sacrada.space`. If deploying via Netlify (recommended), the `netlify.toml` file is already set up.

- Point your domain DNS to Netlify following their guide.
- Enable HTTPS (Netlify does this automatically via Let's Encrypt).

---

## 7. Files overview

```
sacrada/
├── index.html          # Main page
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── favicon.svg         # Browser tab icon
├── robots.txt          # Search engine instructions
├── sitemap.xml         # Sitemap for search engines
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JS including CONFIG
└── assets/
    └── img/
        └── og-image.svg  # Social sharing image
```
