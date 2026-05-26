This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment on Render.com

Follow these step-by-step instructions to deploy your Next-Gen Learning Dashboard on **Render.com** as a Node.js Web Service.

### 1. Prerequisites
- A **GitHub** account with your repository pushed.
- A **Render.com** account (you can sign up for free using your GitHub account).

### 2. Prepare Your Code
Ensure your code is pushed to your GitHub repository:
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 3. Create a New Web Service on Render
1. Log in to your [Render Dashboard](https://dashboard.render.com).
2. Click the **New +** button in the top-right corner and select **Web Service**.
3. Under **Connect a repository**, find your repository and click **Connect**. (If it's not listed, you can link your GitHub account or paste the public Git repository URL).

### 4. Configure the Web Service
Configure the settings as follows:
- **Name**: `next-gen-learning-dashboard` (or any custom name)
- **Region**: Select the region closest to you (e.g., `Oregon (US West)` or `Frankfurt (EU)`)
- **Branch**: `main` (or your primary development branch)
- **Root Directory**: (Leave empty)
- **Runtime**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run start`

### 5. Set Environment Variables
Scroll down and click **Advanced** to add environment variables. This is crucial for matching the Node version and configuring Supabase:

| Key | Value | Notes |
| :--- | :--- | :--- |
| `NODE_VERSION` | `20` | Force Render to use Node.js 20 (highly recommended for Next.js 16) |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://your-project.supabase.co` | *Optional* - Your Supabase project URL (falls back to mock data if omitted) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `your-supabase-anon-key` | *Optional* - Your Supabase anon key (falls back to mock data if omitted) |

### 6. Choose Instance Type & Deploy
1. Select the **Free** instance type (or any paid plan if you prefer active/fast response).
2. Click **Create Web Service** at the bottom of the page.

### 7. Monitor & Verify
- Render will start building your project. You can see the live build logs in the Render console.
- Once completed, the status will change to **Live** with a green checkmark.
- Click the link generated at the top of the Render page (e.g., `https://next-gen-learning-dashboard.onrender.com`) to view your deployed dashboard!

> [!NOTE]
> **Free Tier Cold Starts**: Render's free tier services spin down after 15 minutes of inactivity. When a new request arrives, it may take 50+ seconds to spin up again. To avoid this, you can upgrade to a starter tier ($7/month) or use a free monitoring service (like UptimeRobot) to ping your URL every 14 minutes.

