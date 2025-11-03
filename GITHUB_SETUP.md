# GitHub Pages Setup Guide (Option A - GitHub Actions)

## ✅ Step 1: Git is Already Initialized

Your repository has been initialized and all files have been committed!

## 📝 Step 2: Create GitHub Repository

1. **Go to GitHub:**
   - Visit: https://github.com/new

2. **Repository Settings:**
   - **Repository name:** `dankels` (or your preferred name)
   - **Visibility:** ✅ **Public** (required for free GitHub Pages)
   - **Important:** ❌ Do NOT check "Add a README file"
   - **Important:** ❌ Do NOT add .gitignore
   - **Important:** ❌ Do NOT choose a license
   - Leave everything unchecked!

3. **Click:** "Create repository"

## 🔗 Step 3: Connect Local Repository to GitHub

**Option A: Use the setup script (Recommended):**
```bash
./setup-github.sh
```

The script will:
- Ask for your GitHub username
- Ask for repository name (defaults to "dankels")
- Update configuration files automatically
- Add the remote and push your code

**Option B: Manual setup:**

Replace `YOUR_USERNAME` with your GitHub username:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/dankels.git

# Update vite.config.js (if repo name is different from 'dankels')
# Edit vite.config.js and change '/dankels/' to '/your-repo-name/'

# Update package.json homepage
# Edit package.json and replace YOUR_USERNAME with your GitHub username

# Commit config changes
git add vite.config.js package.json
git commit -m "Update config for GitHub Pages"

# Push to GitHub
git push -u origin main
```

## ⚙️ Step 4: Enable GitHub Pages with GitHub Actions

1. **Go to your repository on GitHub:**
   - Visit: https://github.com/YOUR_USERNAME/dankels

2. **Navigate to Settings:**
   - Click on **Settings** tab (top menu)

3. **Go to Pages:**
   - Click **Pages** in the left sidebar

4. **Configure Source:**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - If you don't see "GitHub Actions" option, wait a moment for the workflow file to be recognized

5. **Save:** The page will save automatically

## 🚀 Step 5: Automatic Deployment

Once you've enabled GitHub Actions:

1. **Workflow will run automatically:**
   - Every time you push to the `main` branch
   - The workflow will build and deploy your site

2. **Check deployment status:**
   - Go to **Actions** tab in your repository
   - You'll see the deployment workflow running
   - Wait for it to complete (usually 2-3 minutes)

3. **View your site:**
   - After deployment completes, your site will be available at:
   - `https://YOUR_USERNAME.github.io/dankels`
   - (Replace YOUR_USERNAME with your GitHub username)

## 📋 Verification Checklist

- [ ] GitHub repository created (Public)
- [ ] Local repository connected to GitHub
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] Workflow completed successfully
- [ ] Site is accessible at your GitHub Pages URL

## 🔄 Future Updates

To update your site:

```bash
# Make your changes
git add .
git commit -m "Your commit message"
git push origin main
```

The GitHub Actions workflow will automatically rebuild and redeploy your site!

## 🆘 Troubleshooting

### Workflow not showing in Pages settings?
- Make sure the `.github/workflows/deploy.yml` file is in your repository
- Wait a few minutes after pushing
- Try refreshing the Settings → Pages page

### Site shows 404?
- Check that repository name matches the base path in `vite.config.js`
- Ensure repository is Public
- Wait 5-10 minutes after first deployment

### Build fails?
- Check the Actions tab for error messages
- Ensure `package.json` has all dependencies
- Make sure Node.js version is compatible

## 📞 Need Help?

Check the Actions tab in your repository for detailed build logs and any error messages.

