import { BookOpenIcon, CodeIcon, MailIcon, SparklesIcon } from "lucide-react"

import { ColorPair } from "./color-pair"
import { Section } from "./section"

const pairs = [
  ["Page", "background", "foreground"],
  ["Card", "card", "card-foreground"],
  ["Popover", "popover", "popover-foreground"],
  ["Primary", "primary", "primary-foreground"],
  ["Secondary", "secondary", "secondary-foreground"],
  ["Muted", "muted", "muted-foreground"],
  ["Accent", "accent", "accent-foreground"],
  ["Destructive on page", "background", "destructive"],
  ["Muted text on page", "background", "muted-foreground"],
  ["Sidebar", "sidebar", "sidebar-foreground"],
  ["Sidebar primary", "sidebar-primary", "sidebar-primary-foreground"],
] as const

const swatches = [
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar-accent",
  "sidebar-border",
]

const typeScale = [
  [
    "font-heading text-4xl font-semibold tracking-tight",
    "Display",
    "Page titles",
  ],
  [
    "font-heading text-2xl font-semibold tracking-tight",
    "Title",
    "Section heads",
  ],
  [
    "font-heading text-xl font-semibold tracking-tight",
    "Subtitle",
    "Sub-sections",
  ],
  ["font-heading text-sm font-semibold", "Label", "Block titles"],
  ["text-lg leading-relaxed", "Lead", "Intro paragraphs"],
  ["text-base leading-relaxed", "Body", "Running text"],
  ["text-sm", "Small", "UI text"],
  ["text-xs text-muted-foreground", "Caption", "Metadata, footers"],
  ["font-mono text-sm", "Mono", "Code, tokens"],
] as const

const radii = [
  ["sm", "rounded-sm", "xs buttons"],
  ["md", "rounded-md", "buttons, inputs"],
  ["lg", "rounded-lg", "panels"],
  ["xl", "rounded-xl", "cards"],
  ["2xl", "rounded-2xl", "large surfaces"],
  ["4xl", "rounded-4xl", "pills"],
] as const

const spacing = [1, 2, 3, 4, 6, 8, 12, 16]

export function Foundations() {
  return (
    <Section
      id="foundations"
      title="Foundations"
      description="Tokens everything else is built from. Edit them in src/styles/global.css."
    >
      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-sm font-semibold">Color roles</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {pairs.map(([name, bg, fg]) => (
            <ColorPair key={name} name={name} background={bg} foreground={fg} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-sm font-semibold">Palette</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {swatches.map((token) => (
            <div key={token} className="flex flex-col gap-1.5">
              <div
                className="h-12 rounded-lg border"
                style={{ backgroundColor: `var(--${token})` }}
              />
              <span className="font-mono text-xs text-muted-foreground">
                --{token}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-sm font-semibold">Typography</h3>
        <div className="flex flex-col divide-y rounded-xl border">
          {typeScale.map(([classes, name, use]) => (
            <div
              key={name}
              className="grid grid-cols-[6rem_1fr] items-baseline gap-4 p-4 md:grid-cols-[6rem_9rem_1fr]"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {name}
              </span>
              <span className="hidden text-xs text-muted-foreground md:block">
                {use}
              </span>
              <span className={`truncate ${classes}`}>
                Building complex things, simply
              </span>
            </div>
          ))}
        </div>
        <p className="max-w-prose leading-relaxed">
          Running text at body size. Most of this site is prose, so line length
          and rhythm matter more than anything else here. It should read well
          with a{" "}
          <a href="#foundations" className="underline underline-offset-4">
            link
          </a>{" "}
          and some{" "}
          <code className="rounded-sm bg-muted px-1 py-0.5 font-mono text-sm">
            inline code
          </code>{" "}
          mixed in, across several lines of a paragraph.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold">Radius</h3>
          <div className="flex flex-wrap gap-4">
            {radii.map(([name, cls, use]) => (
              <div key={name} className="flex flex-col items-center gap-1.5">
                <div
                  className={`size-14 border-2 border-primary bg-muted ${cls}`}
                />
                <span className="font-mono text-xs">{name}</span>
                <span className="text-xs text-muted-foreground">{use}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold">Spacing</h3>
          <div className="flex flex-col gap-1.5">
            {spacing.map((step) => (
              <div key={step} className="flex items-center gap-3">
                <span className="w-6 font-mono text-xs text-muted-foreground">
                  {step}
                </span>
                <div
                  className="h-2 rounded-sm bg-primary"
                  style={{ width: `calc(var(--spacing) * ${step})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold">Elevation</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Flat", "", "page, bands"],
              ["Hairline", "border", "cards"],
              ["Soft", "border shadow-md", "popovers, menus"],
              ["Deep", "shadow-xl", "dialogs"],
            ].map(([name, cls, use]) => (
              <div
                key={name}
                className={`flex h-20 flex-col justify-end rounded-xl bg-card p-3 ${cls}`}
              >
                <span className="text-sm font-medium">{name}</span>
                <span className="text-xs text-muted-foreground">{use}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold">Icons (lucide)</h3>
          {["text-foreground", "text-muted-foreground"].map((color) => (
            <div key={color} className={`flex items-center gap-4 ${color}`}>
              {["size-3", "size-3.5", "size-4", "size-5"].map((size) => (
                <div key={size} className="flex items-center gap-1">
                  <BookOpenIcon className={size} />
                  <CodeIcon className={size} />
                  <MailIcon className={size} />
                  <SparklesIcon className={size} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
