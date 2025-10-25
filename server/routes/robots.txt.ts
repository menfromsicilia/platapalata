export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl

  const robots = `# robots.txt for ${siteUrl}

User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml

# Disallow admin or private routes (if any)
# Disallow: /admin/
# Disallow: /api/

# Allow all common bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Crawl-delay for aggressive bots
User-agent: *
Crawl-delay: 1`

  event.node.res.setHeader('Content-Type', 'text/plain')
  return robots
})

