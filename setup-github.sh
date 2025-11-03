#!/bin/bash

# Setup script for GitHub repository

echo "🚀 GitHub Repository Setup for Dankels Landing Page"
echo "===================================================="
echo ""

# Get GitHub username and repo name
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter repository name (default: dankels): " REPO_NAME
REPO_NAME=${REPO_NAME:-dankels}

echo ""
echo "📝 Instructions:"
echo "1. Go to https://github.com/new"
echo "2. Repository name: $REPO_NAME"
echo "3. Make it PUBLIC (required for free GitHub Pages)"
echo "4. DO NOT initialize with README, .gitignore, or license"
echo "5. Click 'Create repository'"
echo ""
read -p "Press Enter after you've created the repository..."

# Add remote
echo ""
echo "🔗 Adding remote repository..."
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git 2>/dev/null || git remote set-url origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# Update vite.config.js with repo name
echo "⚙️  Updating vite.config.js..."
sed -i.bak "s|base: process.env.NODE_ENV === 'production' ? '/dankels/' : '/'|base: process.env.NODE_ENV === 'production' ? '/$REPO_NAME/' : '/'|" vite.config.js 2>/dev/null || sed -i '' "s|base: process.env.NODE_ENV === 'production' ? '/dankels/' : '/'|base: process.env.NODE_ENV === 'production' ? '/$REPO_NAME/' : '/'|" vite.config.js

# Update package.json homepage
echo "⚙️  Updating package.json..."
sed -i.bak "s|https://YOUR_USERNAME.github.io/dankels|https://$GITHUB_USERNAME.github.io/$REPO_NAME|" package.json 2>/dev/null || sed -i '' "s|https://YOUR_USERNAME.github.io/dankels|https://$GITHUB_USERNAME.github.io/$REPO_NAME|" package.json

# Commit changes
echo "💾 Committing configuration changes..."
git add vite.config.js package.json
git commit -m "Update config for GitHub Pages deployment" 2>/dev/null || echo "No changes to commit"

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your repository: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "2. Click 'Settings' → 'Pages'"
echo "3. Under 'Source', select 'GitHub Actions'"
echo "4. The GitHub Actions workflow will automatically deploy your site"
echo ""
echo "🌍 Your site will be available at:"
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME"
echo ""
echo "⏱️  Note: It may take 5-10 minutes for the site to be available after first deployment."

