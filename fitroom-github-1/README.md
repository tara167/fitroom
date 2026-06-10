# Fit Room — Santa Teresa · website

Static one-page site (HTML/CSS/JS, no build step). Hosts on **Netlify**.
Direction: futuristic · luxe · ultra-clean · monochrome + lime accent. English / LTR.

```
fitroom-site/
├── index.html          ← all content
├── css/styles.css      ← all styling (design tokens at top under :root)
├── js/main.js          ← interactions + CONFIG (edit your details here)
├── netlify.toml        ← deploy + headers config
└── assets/
    ├── img/            ← web-optimized photos used on the site
    ├── instagram/      ← original photos pulled from Instagram (backup)
    └── logo-mark.svg   ← favicon
```

## ✍️ Things to fill in / confirm
Search `index.html` for `TODO`. Quick list:

| What | Where | Current value |
|------|-------|---------------|
| WhatsApp number | `js/main.js` → `CONFIG.whatsappNumber` | +506 7253 2299 ✅ (confirmed from flyer) |
| Exact street address | `index.html` → Contact `<!-- TODO -->` | "Santa Teresa, Cóbano…" (placeholder) |
| Opening hours | `index.html` → Contact `<!-- TODO -->` | placeholder Mon–Fri / Sat / Sun |
| Map pin | `index.html` → `.map iframe src` | Google search "Fit Room Santa Teresa" (set the exact pin) |
| Prices | `index.html` → Pricing section | from the Founder's Rate flyer |

## 🖼️ Photos — please send hi-res originals
The photos currently used were pulled from Instagram, so they are **low resolution**
and several have **marketing text burned in** (they are promo posts). For a clean,
premium result, replace the files in `assets/img/` with high-res originals:
`studio-interior.jpg`, `exterior-tree.jpg`, `reformer-class.jpg`, `jump-reformer.jpg`,
`mat-bridge.jpg`, `reformer-row.jpg`, `team-eileen.jpg`, `team-tara.jpg`.
Keep the same file names and it just works. A transparent-PNG logo would also upgrade
the header/footer (currently a crisp SVG re-creation).

## 👀 Preview locally
```bash
cd fitroom-site
python3 -m http.server 8000
# open http://localhost:8000
```

## 🚀 Deploy to Netlify
**Easiest:** drag the `fitroom-site` folder onto https://app.netlify.com/drop
**Or via Git:** push the repo, "Add new site → Import", publish directory `.` (no build command).

The contact form uses **Netlify Forms** (works automatically once deployed — no server).
Submissions appear under *Site → Forms*. Add a notification email there if wanted.
