// Estimated minutes to read a Markdown body, at 150 words per minute.
export function readingMinutes(body: string = "") {
  return Math.max(1, Math.ceil(body.split(/\s+/).length / 150))
}
