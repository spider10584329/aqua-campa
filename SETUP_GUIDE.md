# Supabase Database Setup Guide

## 🚀 Quick Setup Steps

### 1. Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project

### 2. Get Your Credentials
After creating your project, you'll need these values:
- **Project URL**: Found in Settings > API
- **Anon Key**: Found in Settings > API  
- **Service Role Key**: Found in Settings > API (keep this secret!)

### 3. Update Environment Variables
Edit your `.env.local` file with your actual Supabase credentials:

```env
# Replace these with your actual Supabase values
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Set your admin credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password-here
```

### 4. Set Up Database Table
1. Go to your Supabase dashboard
2. Click on "SQL Editor" in the sidebar
3. Copy and paste the contents of `database/setup.sql`
4. Click "Run" to execute the SQL

### 5. Test the Setup
1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000` and test the contact form
3. Go to `http://localhost:3000/admin/login` to access admin panel
4. Use your admin credentials to log in
5. View submitted contacts in the dashboard

## 📱 Admin Access

- **Login URL**: `/admin/login`
- **Dashboard URL**: `/admin/dashboard` (auto-redirects after login)
- **Default Username**: admin (change in .env.local)
- **Default Password**: Set in .env.local

## 🔒 Security Features

- ✅ **Row Level Security (RLS)** enabled
- ✅ **Admin authentication** required for dashboard
- ✅ **Environment variables** for sensitive data
- ✅ **Input validation** on all forms
- ✅ **Secure cookies** for admin sessions

## 📊 Database Schema

The `contact_submissions` table includes:
- `id` (UUID, Primary Key)
- `name` (VARCHAR)
- `phone` (VARCHAR)
- `email` (VARCHAR)
- `reason` (VARCHAR)
- `message` (TEXT)
- `created_at` (TIMESTAMP)

## 🌐 Deployment Ready

This setup works perfectly with:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Any hosting platform** that supports Next.js

Just make sure to set your environment variables in your hosting platform's settings!
