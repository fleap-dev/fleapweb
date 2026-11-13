import * as React from "react"

import { cn } from "@/lib/utils"

// Layout primitives for the /design showcase. Not used by the public site.

// A top-level showcase section with an anchor id.
export function Section({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="flex scroll-mt-20 flex-col gap-8 py-12">
      <header className="flex flex-col gap-1">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="max-w-prose text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </header>
      {children}
    </section>
  )
}

// One component block: name, when to use it, and the rendered examples.
export function Block({
  title,
  description,
  wide,
  className,
  children,
}: {
  title: string
  description?: string
  wide?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-3",
        wide && "md:col-span-2",
        className
      )}
    >
      <div className="flex flex-col gap-0.5">
        <h3 className="font-heading text-sm font-semibold">{title}</h3>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-4 rounded-xl border p-6">
        {children}
      </div>
    </div>
  )
}

// Two-column grid of blocks.
export function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-8 md:grid-cols-2">{children}</div>
}

// Small mono caption for labeling rows inside a block.
export function Caption({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs text-muted-foreground">{children}</span>
  )
}

export function Row({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {children}
    </div>
  )
}
