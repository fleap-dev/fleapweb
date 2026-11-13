import * as React from "react"
import {
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  PrinterIcon,
  Share2Icon,
} from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

interface Props {
  title: string
  // The post's Markdown, served by src/pages/blog/[slug].md.ts.
  markdownUrl: string
}

type Action = "copy" | "share"

// The Share section of a post's margin: download or copy the Markdown, share
// the link, or print. Rendered by src/pages/blog/[slug].astro.
export function ShareActions({ title, markdownUrl }: Props) {
  const [done, setDone] = React.useState<Action | null>(null)

  const flash = (action: Action) => {
    setDone(action)
    setTimeout(() => setDone(null), 2000)
  }

  // Safari only allows clipboard writes during the click, so the fetch goes
  // into the ClipboardItem as a promise instead of being awaited first.
  const copyMarkdown = async () => {
    const text = fetch(markdownUrl)
      .then((response) => response.text())
      .then((markdown) => new Blob([markdown], { type: "text/plain" }))
    await navigator.clipboard.write([new ClipboardItem({ "text/plain": text })])
    flash("copy")
  }

  // The system share sheet where there is one, otherwise copy the link.
  const shareLink = async () => {
    const url = location.href.split("#")[0]
    if (navigator.share) {
      await navigator.share({ title, url }).catch(() => {})
      return
    }
    await navigator.clipboard.writeText(url)
    flash("share")
  }

  const buttonClass = "w-full justify-start"

  return (
    <TooltipProvider delay={300}>
      <div className="grid grid-cols-2 gap-1.5 md:grid-cols-1">
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                href={markdownUrl}
                download
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  buttonClass
                )}
              />
            }
          >
            <DownloadIcon data-icon="inline-start" />
            Download
          </TooltipTrigger>
          <TooltipContent side="right">
            Save this note as a Markdown file
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="outline"
                className={buttonClass}
                onClick={copyMarkdown}
              />
            }
          >
            {done === "copy" ? (
              <CheckIcon data-icon="inline-start" />
            ) : (
              <CopyIcon data-icon="inline-start" />
            )}
            {done === "copy" ? "Copied" : "Copy as Markdown"}
          </TooltipTrigger>
          <TooltipContent side="right">
            Copy this note's Markdown to the clipboard
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="outline"
                className={buttonClass}
                onClick={shareLink}
              />
            }
          >
            {done === "share" ? (
              <CheckIcon data-icon="inline-start" />
            ) : (
              <Share2Icon data-icon="inline-start" />
            )}
            {done === "share" ? "Link copied" : "Share link"}
          </TooltipTrigger>
          <TooltipContent side="right">Send a link to this note</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="outline"
                className={buttonClass}
                onClick={() => window.print()}
              />
            }
          >
            <PrinterIcon data-icon="inline-start" />
            Print
          </TooltipTrigger>
          <TooltipContent side="right">
            Print this note or save it as a PDF
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
