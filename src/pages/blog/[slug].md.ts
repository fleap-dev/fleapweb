// The Markdown source of each post, at /blog/<slug>.md. The post page's Share
// section downloads it and copies it to the clipboard.
import type { APIRoute, GetStaticPaths } from "astro"
import { getCollection, type CollectionEntry } from "astro:content"

export const getStaticPaths = (async () => {
  const posts = await getCollection("blog")
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }))
}) satisfies GetStaticPaths

export const GET: APIRoute<{ post: CollectionEntry<"blog"> }> = ({ props }) => {
  const { title, description } = props.post.data
  const markdown = `# ${title}\n\n> ${description}\n\n${props.post.body?.trim() ?? ""}\n`
  return new Response(markdown, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
