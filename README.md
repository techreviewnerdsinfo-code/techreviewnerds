## Tech Review Nerds

This repository contains the source code for **Tech Review Nerds**, an affiliate comparison website focused on the laptop market.  The site is built with **Next.js 14**, **TypeScript** and **Tailwind CSS** using the App Router.  It is designed to serve static pages generated from JSON data and is ready to swap to the Amazon Product Advertising API once your developer account is approved.

### Features

- **SEO‑friendly**: each page exports meta information via the Next.js `generateMetadata` API to help your pages rank well in search engines.
- **Fast static build**: product data lives in a JSON file under `src/data/products.json`.  At build time the pages are generated as static HTML for maximum speed and reliability.
- **Dynamic routing**: category and product detail pages are implemented using dynamic segments under the `app` directory (`/categories/[category]` and `/products/[slug]`).
- **Tailwind CSS**: styling is handled by Tailwind so you can adjust spacing, typography and colours quickly.
- **TypeScript**: the project uses strict types throughout to reduce bugs and improve maintainability.

### Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` with your browser to see the result.

### Modifying product data

Mock product data lives in `src/data/products.json`.  Each item includes a category, slug, name, price, rating, short description and a handful of specifications.  Feel free to adjust or extend this list.  When you’re ready to hook up the Amazon Product Advertising API, replace the data loader in the route handlers (`app/categories/[category]/page.tsx` and `app/products/[slug]/page.tsx`) with API calls that fetch fresh data.

### Deployment

This project is designed to deploy easily to [Vercel](https://vercel.com).  Once your repository is pushed to GitHub, import it into Vercel, set the build command to `npm run build` and the output directory to `.next`.  Make sure to configure any environment variables required for the Product Advertising API when you integrate it.

### Contact

For questions about this project please reach out to **Tech Review Nerds** at `techreviewnerdsinfo@gmail.com`.