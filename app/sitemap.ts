import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thecapitalguru.net';

  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const standardPages = [
    '',
    '/about',
    '/membership',
    '/results',
    '/contact',
    '/faq',
    '/resources',
    '/blog',
    '/legal/terms',
    '/legal/privacy'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...standardPages, ...blogUrls];
}
