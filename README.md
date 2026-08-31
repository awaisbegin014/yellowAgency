# Yellow Agency Website

Production-ready Next.js 16 web application for Yellow Agency.

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

4. Build for production:
```bash
npm run build
```

---

## 🌐 Deploy to Vercel

### Option 1: Automatic Deployment via GitHub (Recommended)

1. Push your latest code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** > **"Project"**.
4. Import your repository (`yellowAgency`).
5. Preset settings:
   - **Framework Preset**: Next.js (automatically detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Click **Deploy**. Vercel will automatically build, generate static pages, and assign a production URL with free SSL.

### Option 2: Deploy with Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run deployment from the project root:
   ```bash
   vercel
   ```
3. For production release:
   ```bash
   vercel --prod
   ```

---

## ⚙️ Environment Variables (Optional)

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for sitemap and OpenGraph tags | Auto-detected from Vercel (`VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL`) |

