import { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData()
  const baseUrl = 'https://jetsemrick.com'

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/writing/${post.id}`,
    lastModified: new Date(post.date),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/writing`,
      lastModified: new Date(),
    },
    ...postUrls,
  ]
}

