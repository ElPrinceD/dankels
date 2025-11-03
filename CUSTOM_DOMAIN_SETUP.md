# Custom Domain Setup for dankels.com

## ✅ Configuration Complete

Your project has been configured for the custom domain `dankels.com`. Here's what was done:

### Changes Made:

1. **vite.config.js** - Set `base: '/'` for custom domain
2. **public/CNAME** - Created with `dankels.com`
3. **package.json** - Updated homepage to `https://dankels.com`
4. **GitHub Actions Workflow** - Updated to copy CNAME file to dist during build

## 📋 Next Steps - DNS Configuration

To connect your custom domain to GitHub Pages, you need to configure DNS records:

### Option 1: Apex Domain (dankels.com) - Recommended

Add these **A records** in your DNS provider:

```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600 (or default)
```

### Option 2: Subdomain (www.dankels.com)

Add a **CNAME record**:

```
Type: CNAME
Name: www
Value: elprinced.github.io
TTL: 3600 (or default)
```

## 🔧 GitHub Pages Settings

1. **Go to your repository:** https://github.com/elprinced/dankels
2. **Settings → Pages**
3. **Custom domain:** Enter `dankels.com`
4. **Enforce HTTPS:** ✅ Check this box (recommended)
5. **Save**

## ✅ Verification

After DNS propagation (can take up to 24-48 hours):

1. **Check DNS propagation:**
   ```bash
   dig dankels.com +short
   # Should return GitHub IPs: 185.199.108.153, etc.
   ```

2. **Verify SSL certificate:**
   - GitHub will automatically provision an SSL certificate
   - It may take a few minutes after DNS is configured

3. **Test your site:**
   - Visit: https://dankels.com
   - Should redirect to your GitHub Pages site

## 🚀 Deployment

After DNS is configured:

1. **Push your changes:**
   ```bash
   git push origin main
   ```

2. **GitHub Actions will:**
   - Build your site
   - Copy CNAME file to dist
   - Deploy to GitHub Pages
   - Your site will be available at https://dankels.com

## 📝 Notes

- **DNS Propagation:** Can take 24-48 hours, but usually faster (1-2 hours)
- **SSL Certificate:** GitHub provides free SSL certificates via Let's Encrypt
- **HTTPS:** Always use HTTPS. GitHub will redirect HTTP to HTTPS
- **CNAME File:** Automatically included in every deployment via GitHub Actions

## 🆘 Troubleshooting

### Domain not working?
1. Check DNS records are correct
2. Wait for DNS propagation (use `dig` or online DNS checker)
3. Verify CNAME file exists in GitHub Pages branch
4. Check GitHub Pages settings for custom domain

### SSL certificate issues?
- Wait 10-15 minutes after DNS is configured
- GitHub automatically provisions certificates
- Make sure "Enforce HTTPS" is enabled in GitHub Pages settings

### Still having issues?
- Check GitHub Pages deployment logs in Actions tab
- Verify the CNAME file content matches your domain exactly
- Ensure DNS records point to GitHub's IPs

