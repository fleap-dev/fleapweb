import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DirectionProvider } from "@/components/ui/direction"
import { Input } from "@/components/ui/input"
import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"

import { Actions } from "./actions"
import { Conversation } from "./conversation"
import { DataDisplay } from "./data-display"
import { Feedback } from "./feedback"
import { Foundations } from "./foundations"
import { Inputs } from "./inputs"
import { Navigation } from "./navigation"
import { Overlays } from "./overlays"
import { Block, Section } from "./section"

const anchors = [
  ["foundations", "Foundations"],
  ["actions", "Actions"],
  ["inputs", "Inputs"],
  ["navigation", "Navigation"],
  ["data-display", "Data"],
  ["feedback", "Feedback"],
  ["overlays", "Overlays"],
  ["conversation", "Conversation"],
  ["direction", "RTL"],
] as const

// Toggles the `.dark` class on <html>. The layout sets the initial value from
// the OS color scheme; this lets you flip it while editing tokens.
function ThemeToggle() {
  // Safe to read the DOM here: the showcase renders client-only.
  const [dark, setDark] = React.useState(() =>
    document.documentElement.classList.contains("dark")
  )

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle dark mode"
      onClick={() => {
        const next = !dark
        document.documentElement.classList.toggle("dark", next)
        setDark(next)
      }}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

// The /design page: every token and installed component on one screen, so
// design-system edits can be reviewed at a glance.
export function Showcase() {
  return (
    <TooltipProvider>
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6">
        <header className="sticky top-0 z-10 -mx-6 flex items-center gap-4 border-b bg-background/90 px-6 py-3 backdrop-blur">
          <a href="/" className="font-heading text-sm font-semibold">
            fleap.dev
          </a>
          <span className="text-sm text-muted-foreground">Design system</span>
          <nav className="ml-auto hidden gap-1 lg:flex">
            {anchors.map(([id, label]) => (
              <Button
                key={id}
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={<a href={`#${id}`} />}
              >
                {label}
              </Button>
            ))}
          </nav>
          <ThemeToggle />
        </header>

        <section className="flex flex-col gap-3 py-16">
          <h1 className="font-heading text-4xl font-semibold tracking-tight">
            Design system
          </h1>
          <p className="max-w-prose text-lg text-muted-foreground">
            Every token and component the site can use, rendered with the
            current theme. Change{" "}
            <code className="font-mono text-base">global.css</code> or a
            component's variants and check the result here.
          </p>
        </section>

        <Foundations />
        <Actions />
        <Inputs />
        <Navigation />
        <DataDisplay />
        <Feedback />
        <Overlays />
        <Conversation />

        <Section id="direction" title="Right-to-left">
          <Block
            title="Direction provider"
            description="Layout mirrors for RTL languages."
          >
            <DirectionProvider direction="rtl">
              <div dir="rtl" className="flex items-center gap-2">
                <Input placeholder="ابحث في الأوراق" />
                <Button>بحث</Button>
              </div>
            </DirectionProvider>
          </Block>
        </Section>
      </div>
      <Toaster />
    </TooltipProvider>
  )
}
