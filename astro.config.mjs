import { defineConfig } from 'astro/config';

const siteUrl = process.env.SITE_URL || 'https://your-github-username.github.io';
const repoName = process.env.REPO_NAME || 'portfolio';
const isUserSite = process.env.USER_SITE === 'true';
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: siteUrl,
  base: isDev ? '/' : isUserSite ? '/' : `/${repoName}`,
});
