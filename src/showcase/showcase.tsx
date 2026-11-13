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

// Every token and installed component on one screen, so design-system edits
// can be reviewed at a glance. Rendered by src/pages/design.astro, which owns
// the page header and the margin index of these sections.
export function Showcase() {
  return (
    <TooltipProvider>
      <div className="journal-sections pb-12">
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
