import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thecapitalguru.net'

  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const standardPages = [
    '',
    '/about',
    '/membership',
    '/results',
    '/contact',
    '/faq',
    '/resources',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.7,
  }))

  return [...standardPages, ...blogUrls]
}
