import { mockProducts } from '~/data/mock-products'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl

  // Статические страницы
  const staticUrls = [
    { loc: '/', lastmod: new Date().toISOString(), priority: 1.0, changefreq: 'daily' },
    { loc: '/games', lastmod: new Date().toISOString(), priority: 0.9, changefreq: 'daily' },
    { loc: '/services', lastmod: new Date().toISOString(), priority: 0.9, changefreq: 'daily' },
    { loc: '/telegram-stars', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'weekly' },
    { loc: '/blog', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'daily' }
  ]

  // Динамические страницы продуктов
  const productUrls = mockProducts.map((product) => {
    const categoryPath = product.category === 'telegram' ? 'telegram-stars' : product.category
    return {
      loc: `/${categoryPath}/${product.slug}`,
      lastmod: new Date().toISOString(),
      priority: product.popular ? 0.8 : 0.7,
      changefreq: 'weekly'
    }
  })

  // TODO: Добавить URL блога когда будет реальный контент
  // const { data: blogPosts } = await useAsyncData('sitemap-blog', () =>
  //   queryContent('/blog').find()
  // )
  // const blogUrls = blogPosts.map(post => ({
  //   loc: post._path,
  //   lastmod: post.date || new Date().toISOString(),
  //   priority: 0.6,
  //   changefreq: 'monthly'
  // }))

  const allUrls = [...staticUrls, ...productUrls]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allUrls
    .map(
      (url) => `  <url>
    <loc>${siteUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})

