# Deployment Guide for GitHub Pages

## Prerequisites
- GitHub account
- Git installed on your machine
- Node.js and npm installed

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `dankels` (or your preferred name)
3. Make it **Public** (required for free GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 2: Initialize Git and Push Code

Run these commands in your project directory:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Dankels Company Limited landing page"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/dankels.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 3: Update Repository Name in Config

Before deploying, update the repository name in `vite.config.js`:

If your repository is named `dankels`, the base should be `/dankels/`
If your repository is named something else, update it accordingly.

## Step 4: Enable GitHub Pages

### Option A: Using GitHub Actions (Recommended)

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to main branch

### Option B: Using gh-pages Package

1. Install gh-pages if not already installed:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json` homepage:
```json
"homepage": "https://YOUR_USERNAME.github.io/dankels"
```

3. Deploy:
```bash
npm run deploy
```

## Step 5: Access Your Site

After deployment, your site will be available at:
- `https://YOUR_USERNAME.github.io/dankels`

**Note:** It may take a few minutes for the site to be available after first deployment.

## Troubleshooting

### If the site shows 404:
1. Check that the repository name matches the base path in `vite.config.js`
2. Ensure the repository is set to **Public**
3. Wait 5-10 minutes after first deployment

### If styles/assets don't load:
1. Verify the `base` path in `vite.config.js` matches your repository name
2. Rebuild and redeploy: `npm run build && npm run deploy`

### Using Custom Domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Update DNS settings as per GitHub Pages documentation

