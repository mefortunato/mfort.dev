# mfort.dev

Website for **mfort, LLC**: a simple landing page for a small, family-run company covering software, digital marketing, and social content.

Built with [Astro](https://astro.build) as a fully static site and deployed to GitHub Pages at
[mfort.dev](https://mfort.dev) by GitHub Actions.

## Develop

Requires Node.js ≥ 22.22.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
```

## Editing content

| What | Where |
| --- | --- |
| Company name, description, activities, email, social links | `src/data/site.ts` (leave a social `href` empty to hide it) |
| Landing page layout | `src/pages/index.astro` |
| Colors, fonts, theme tokens | `src/styles/global.css` |

The accent color is `#0d5b73`. Dark is the default theme. The header toggle switches to light and
remembers the choice in `localStorage`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site with
`withastro/action` and publishes it with `actions/deploy-pages`. `public/CNAME` pins the custom domain.

### One-time setup

1. **Repo → Settings → Pages → Build and deployment → Source: _GitHub Actions_.**
2. **DNS** at your registrar for the apex domain `mfort.dev`:

   | Type | Name | Value |
   | --- | --- | --- |
   | A | @ | `185.199.108.153` |
   | A | @ | `185.199.109.153` |
   | A | @ | `185.199.110.153` |
   | A | @ | `185.199.111.153` |
   | AAAA | @ | `2606:50c0:8000::153` |
   | AAAA | @ | `2606:50c0:8001::153` |
   | AAAA | @ | `2606:50c0:8002::153` |
   | AAAA | @ | `2606:50c0:8003::153` |
   | CNAME | www | `mefortunato.github.io` |

3. **Settings → Pages → Custom domain:** enter `mfort.dev` and save. Once the DNS check passes and
   the certificate is issued, tick **Enforce HTTPS**. `.dev` is on the HSTS preload list, so browsers
   only load the site over HTTPS. Expect it to be unreachable until the certificate is ready, which
   can take up to about an hour.
4. *(Recommended)* Verify the domain under **your account Settings → Pages → Verified domains**
   to prevent domain takeover.
