// Content collections. Add a post by dropping a Markdown file in
// src/content/blog/; its filename becomes the URL (/blog/<filename>). Every
// post opens with a cover image, kept next to the Markdown file and referenced
// by a relative path in the frontmatter (`cover.src`).
import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: z.object({ src: image(), alt: z.string() }),
    }),
})

export const collections = { blog }
