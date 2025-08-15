# 🚀 v0.diy Setup Guide

This guide will help you set up your v0.diy project with all the necessary API keys and services.

## 📋 Prerequisites

- Node.js 18.x or later
- PostgreSQL database (local or cloud)
- Git
- GitHub account

## 🔧 Required Setup Steps

### 1. Database Setup (REQUIRED)

You need a PostgreSQL database. Choose one of these options:

#### Option A: Supabase (Recommended - Free & Easy)
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string
5. Replace `DATABASE_URL` in your `.env` file

#### Option B: Neon (Serverless PostgreSQL)
1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Replace `DATABASE_URL` in your `.env` file

#### Option C: Local PostgreSQL
1. Install PostgreSQL locally
2. Create a database named `v0diy`
3. Update the connection string with your credentials

### 2. Authentication Setup (REQUIRED)

#### GitHub OAuth App
1. Go to [GitHub Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in:
   - Application name: `v0.diy Local`
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and Client Secret
5. Update `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET` in your `.env` file

#### Auth Secret
1. Generate a random 32+ character string at [generate-secret.vercel.app/32](https://generate-secret.vercel.app/32)
2. Update `AUTH_SECRET` in your `.env` file

### 3. AI Provider Setup (At least one REQUIRED)

You need at least one AI provider. Here are the easiest options:

#### Option A: OpenAI (Recommended)
1. Go to [platform.openai.com](https://platform.openai.com)
2. Create an account and add billing
3. Go to API Keys and create a new key
4. Update `OPENAI_API_KEY` in your `.env` file

#### Option B: Anthropic Claude
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account and add billing
3. Go to API Keys and create a new key
4. Update `ANTHROPIC_API_KEY` in your `.env` file

#### Option C: Google AI (Gemini) - Free Tier Available
1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Create an account
3. Go to "Get API Key" and create a new key
4. Update `GOOGLE_GENERATIVE_AI_API_KEY` in your `.env` file

#### Option D: GitHub Models (Free)
1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Create a new token (no permissions needed)
3. Update `GITHUB_OPENAI_API_KEY` and `GITHUB_MISTRAL_API_KEY` with the same token

## 🚀 Installation & Running

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Generate Prisma client:**
   ```bash
   pnpm prisma generate
   ```

3. **Push database schema:**
   ```bash
   pnpm prisma db push
   ```

4. **Build the project:**
   ```bash
   pnpm build
   ```

5. **Start the development server:**
   ```bash
   pnpm dev
   ```

6. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 🔍 Optional Services

### Redis for View Counting
1. Go to [upstash.com](https://upstash.com)
2. Create a Redis database
3. Copy the REST URL and Token
4. Update `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`

### Google Analytics
1. Set up Google Analytics
2. Get your GA4 Measurement ID
3. Update `NEXT_PUBLIC_GA_ID`

## 🛠️ Troubleshooting

### Database Connection Issues
- Make sure your database is running
- Check your connection string format
- Ensure your database allows connections from your IP

### Build Errors
- Make sure all required environment variables are set
- Try deleting `.next` folder and rebuilding
- Check that your Node.js version is 18.x or later

### Authentication Issues
- Verify your GitHub OAuth app settings
- Make sure the callback URL matches exactly
- Check that AUTH_SECRET is set and long enough

## 📝 Environment Variables Checklist

### Required:
- [ ] `DATABASE_URL` - PostgreSQL connection string
- [ ] `AUTH_SECRET` - Random 32+ character string
- [ ] `AUTH_GITHUB_ID` - GitHub OAuth App Client ID
- [ ] `AUTH_GITHUB_SECRET` - GitHub OAuth App Client Secret
- [ ] At least one AI provider API key

### Optional:
- [ ] `UPSTASH_REDIS_REST_URL` - Redis for view counting
- [ ] `UPSTASH_REDIS_REST_TOKEN` - Redis token
- [ ] `NEXT_PUBLIC_GA_ID` - Google Analytics

## 🎉 You're Ready!

Once you have the required environment variables set up, you should be able to:
1. Sign in with GitHub
2. Generate UI components using AI
3. View and manage your creations
4. Fork other users' components

Enjoy building with v0.diy! 🚀