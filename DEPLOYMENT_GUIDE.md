# 🚀 v0.diy Deployment Guide

This guide will help you deploy your v0.diy project to production using various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- ✅ **Database**: Supabase PostgreSQL set up and accessible
- ✅ **GitHub OAuth App**: Configured for your production domain
- ✅ **AUTH_SECRET**: Generated (32+ characters)
- ✅ **AI Provider**: At least one API key configured
- ✅ **Environment Variables**: All required variables set

## 🌟 Recommended: Deploy with Vercel

Vercel is the easiest option for Next.js applications and offers excellent performance.

### Step 1: Prepare for Vercel

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Update GitHub OAuth App:**
   - Go to [GitHub Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
   - Edit your OAuth app
   - Update URLs:
     - Homepage URL: `https://your-app-name.vercel.app`
     - Authorization callback URL: `https://your-app-name.vercel.app/api/auth/callback/github`

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com) and sign in with GitHub**

2. **Import your repository:**
   - Click "New Project"
   - Select your v0.diy repository
   - Click "Import"

3. **Configure environment variables:**
   In the "Environment Variables" section, add all your variables from `.env`:
   
   **Required Variables:**
   ```
   DATABASE_URL=your_supabase_connection_string
   AUTH_SECRET=your_32_character_secret
   AUTH_GITHUB_ID=your_github_oauth_id
   AUTH_GITHUB_SECRET=your_github_oauth_secret
   MAINTENANCE=NOTMAINTENANCE
   ```
   
   **AI Provider (choose at least one):**
   ```
   OPENAI_API_KEY=your_openai_key
   # OR
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_key
   # OR
   ANTHROPIC_API_KEY=your_anthropic_key
   ```
   
   **Optional:**
   ```
   UPSTASH_REDIS_REST_URL=your_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_redis_token
   NEXT_PUBLIC_GA_ID=your_ga_id
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be live at `https://your-app-name.vercel.app`

## 🔄 Alternative: Deploy with Netlify

### Step 1: Prepare for Netlify

1. **Add build configuration:**
   Create `netlify.toml` in your project root:
   ```toml
   [build]
     command = "pnpm build"
     publish = ".next"
   
   [build.environment]
     NODE_VERSION = "18"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Push to GitHub and update OAuth URLs** (same as Vercel step)

### Step 2: Deploy to Netlify

1. **Go to [netlify.com](https://netlify.com) and sign in**
2. **Click "New site from Git"**
3. **Connect to GitHub and select your repository**
4. **Configure build settings:**
   - Build command: `pnpm build`
   - Publish directory: `.next`
5. **Add environment variables** (same as Vercel)
6. **Deploy**

## 🚂 Alternative: Deploy with Railway

Railway is great if you want an all-in-one solution with database hosting.

### Step 1: Deploy to Railway

1. **Go to [railway.app](https://railway.app) and sign in with GitHub**
2. **Click "New Project" → "Deploy from GitHub repo"**
3. **Select your v0.diy repository**
4. **Railway will auto-detect it's a Next.js app**

### Step 2: Configure Environment Variables

1. **Go to your project → Variables tab**
2. **Add all environment variables** (same list as Vercel)
3. **Railway will automatically redeploy**

### Step 3: Update OAuth URLs

- Your Railway app URL will be: `https://your-app-name.up.railway.app`
- Update GitHub OAuth app with this URL

## 🔧 Environment Variables Reference

### Required for All Deployments

```bash
# Database
DATABASE_URL="postgresql://postgres:password@host:5432/database"

# Authentication
AUTH_SECRET="your-32-plus-character-secret-key"
AUTH_GITHUB_ID="your_github_oauth_client_id"
AUTH_GITHUB_SECRET="your_github_oauth_client_secret"

# Maintenance
MAINTENANCE="NOTMAINTENANCE"

# AI Provider (at least one required)
OPENAI_API_KEY="sk-..."
# OR
GOOGLE_GENERATIVE_AI_API_KEY="AI..."
# OR
ANTHROPIC_API_KEY="sk-ant-..."
```

### Optional Variables

```bash
# Redis for view counting
UPSTASH_REDIS_REST_URL="https://..."
UPSTASH_REDIS_REST_TOKEN="..."

# Analytics
NEXT_PUBLIC_GA_ID="G-..."

# Additional AI providers
MISTRAL_API_KEY="..."
GROQ_API_KEY="..."
COHERE_API_KEY="..."
```

## 🛠️ Post-Deployment Steps

### 1. Test Your Deployment

- ✅ Visit your deployed URL
- ✅ Test GitHub authentication
- ✅ Try generating a UI component
- ✅ Check that database operations work

### 2. Set Up Custom Domain (Optional)

**For Vercel:**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update GitHub OAuth URLs

**For Netlify:**
1. Go to Site Settings → Domain management
2. Add custom domain
3. Update DNS records
4. Update GitHub OAuth URLs

### 3. Monitor Your Application

- **Vercel**: Built-in analytics and monitoring
- **Netlify**: Analytics dashboard
- **Railway**: Metrics and logs in dashboard

## 🚨 Troubleshooting

### Common Issues

**Build Failures:**
- Check that all environment variables are set
- Ensure Node.js version is 18+
- Verify database connection string

**Authentication Issues:**
- Verify GitHub OAuth callback URLs match your domain
- Check AUTH_SECRET is set and long enough
- Ensure AUTH_GITHUB_ID and AUTH_GITHUB_SECRET are correct

**Database Connection:**
- Verify DATABASE_URL is accessible from your deployment platform
- Check Supabase allows connections from your deployment IP
- Ensure database schema is up to date

**AI Provider Issues:**
- Verify API keys are valid and have sufficient credits
- Check API key permissions and rate limits
- Ensure at least one AI provider is properly configured

## 🎉 Success!

Once deployed, your v0.diy application will be:

- ✅ **Accessible worldwide** at your deployment URL
- ✅ **Automatically scaled** by your platform
- ✅ **Continuously deployed** from your GitHub repository
- ✅ **Ready for users** to create and share UI components

Enjoy your deployed v0.diy application! 🚀

---

**Need help?** Check the platform-specific documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Railway Docs](https://docs.railway.app)