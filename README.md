# Shawarma House

Landing page and ordering flow for a Beirut shawarma shop. Customers browse the menu, build a cart, and submit
the order as a pre-filled WhatsApp message to the owner — there's no checkout or backend, the owner takes it
from there.

## Stack

React 19, TypeScript, Vite, plain CSS. No routing or API layer — this is a single static page.

## Before deploying

The owner's WhatsApp number is a placeholder in [`src/data/shop.ts`](src/data/shop.ts). Update:

```ts
whatsappNumber: '96170000000', // digits only, country code, no + or spaces
phoneDisplay: '+961 70 000 000',
```

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploying to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys `main` automatically. One-time setup after
pushing: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**. The site will be published at
`https://<username>.github.io/Bierut-Shawarma/`.

If the repo is ever renamed, update `base` in [`vite.config.ts`](vite.config.ts) to match.
