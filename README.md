# AnfaStyle.com storefront

Mobile-first premium eco-lifestyle storefront for composting, permaculture, and zero-waste communities.

## Structure

- `content.js`: content model (navigation, collections, blog previews) separated from layout.
- `main.js`: shared rendering/layout injection and interactive components.
- `*.html`: route-level templates (home, collections, blog, product, cart, checkout, legal).
- `collections/*.html`: SEO-ready collection landing pages:
  - `/collections/compost`
  - `/collections/permaculture`
  - `/collections/zero-waste`
- `legal/*.html`: Stripe-friendly legal docs.

## Future headless readiness

- Content layer can be swapped to API calls (WooCommerce, Printify, CMS).
- UI layout remains stable while data source changes.
- Product schema markup included in `product.html`.
