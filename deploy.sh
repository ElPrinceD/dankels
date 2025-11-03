#!/bin/bash

# GitHub Pages Deployment Script for Dankels Landing Page

echo "🚀 Dankels Landing Page - GitHub Pages Deployment"
echo "=================================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "⚠️  Git not initialized. Initializing..."
    git init
fi

# Check if gh-pages is installed
if ! npm list gh-pages &> /dev/null; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Get repository name from git remote or prompt
REPO_NAME="dankels"
if git remote get-url origin &> /dev/null; then
    REMOTE_URL=$(git remote get-url origin)
    REPO_NAME=$(basename -s .git "$REMOTE_URL")
    echo "📁 Detected repository: $REPO_NAME"
else
    echo "⚠️  No git remote found. Using default: $REPO_NAME"
    echo "   Please update vite.config.js and package.json with your repository name"
fi

# Update vite.config.js base path
echo "⚙️  Updating vite.config.js..."
sed -i.bak "s|base: process.env.NODE_ENV === 'production' ? '/dankels/' : '/'|base: process.env.NODE_ENV === 'production' ? '/$REPO_NAME/' : '/'|" vite.config.js

# Update package.json homepage
echo "⚙️  Updating package.json..."
USERNAME=$(git remote get-url origin 2>/dev/null | sed -n 's/.*github.com[:/]\([^/]*\).*/\1/p')
if [ -z "$USERNAME" ]; then
    USERNAME="YOUR_USERNAME"
fi
sed -i.bak "s|https://YOUR_USERNAME.github.io/dankels|https://$USERNAME.github.io/$REPO_NAME|" package.json

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to gh-pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo ""
echo "✅ Deployment complete!"
echo "🌍 Your site should be available at: https://$USERNAME.github.io/$REPO_NAME"
echo ""
echo "Note: It may take a few minutes for the site to be available."

