# AGENTS.md

## Cursor Cloud specific instructions

This is a **pure static HTML/CSS/JS website** (Five Ceramics — a handcrafted ceramics e-commerce/brochure site). There is no build step, no package manager, no framework, and no backend.

### Running the dev server

```bash
python3 -m http.server 8000 --directory /workspace
```

Then open `http://localhost:8000` in a browser. All pages are plain `.html` files served statically.

### Key files

- `index.html` — Homepage with hero image and featured products grid
- `shop/all.html` — Shop listing by category (lighting, tableware, interiors)
- `shop/product.html` — Product detail page (driven by `?slug=` query param)
- `about.html`, `contact.html`, `teaching.html` — Static interior pages
- `data/products.js` — Product catalog as a `window.PRODUCTS` global array
- `css/style.css` — Single stylesheet
- `js/main.js` — Mobile nav toggle

### Notes

- No linter, test runner, or build tool is configured. Validation is done via manual browser testing.
- The contact form submits to FormSubmit.co (third-party); it will not deliver emails from `localhost`.
- Product images are stored in `images/`; many products have empty `images: []` arrays and show placeholder boxes.
- The site is deployed to GitHub Pages (see `CNAME` file).
