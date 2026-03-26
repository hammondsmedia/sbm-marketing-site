import { createClient } from 'contentful'

export async function getClientLogos(): Promise<{ title: string; url: string }[]> {
  try {
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) return []
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
    const assets = await client.getAssets({ 'metadata.tags.sys.id[in]': ['clientLogos'] })
    return assets.items
      .map((asset) => {
        const file = asset.fields.file as { url?: string } | undefined
        const url = file?.url
        const title = asset.fields.title as string
        if (!url || !title) return null
        return { title, url: url.startsWith('//') ? `https:${url}` : url }
      })
      .filter((x): x is { title: string; url: string } => x !== null)
  } catch {
    return []
  }
}

// Returns a map of { 'Robert Norris': 'https://images.ctfassets.net/...' }
export async function getTestimonialPhotos(): Promise<Record<string, string>> {
  try {
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) return {}
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
    const assets = await client.getAssets()
    const map: Record<string, string> = {}
    for (const asset of assets.items) {
      const title = asset.fields.title as string
      const file = asset.fields.file as { url?: string } | undefined
      const url = file?.url
      if (title && url) {
        map[title] = url.startsWith('//') ? `https:${url}` : url
      }
    }
    return map
  } catch {
    return {}
  }
}
