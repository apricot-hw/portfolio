import { defineConfig } from 'astro/config';

const siteUrl = process.env.SITE_URL || 'https://apricot-hw.github.io';
const repoName = process.env.REPO_NAME || 'portfolio';
const isUserSite = process.env.USER_SITE === 'true';
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: siteUrl,
  base: isDev ? '/' : isUserSite ? '/' : `/${repoName}/`,
  markdown: {
    syntaxHighlight: false,
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
    },
  },
});
