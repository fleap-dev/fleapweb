import {
  ArrowRightIcon,
  BoldIcon,
  ChevronDownIcon,
  ItalicIcon,
  MailIcon,
  PlusIcon,
  UnderlineIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Spinner } from "@/components/ui/spinner"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { Block, Caption, Grid, Row, Section } from "./section"
import { previewState, StateMatrix } from "./state-matrix"

const buttonVariants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const

const badgeVariants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const

export function Actions() {
  return (
    <Section id="actions" title="Actions">
      <Block
        title="Button"
        description="Triggers an action. One primary button per group; everything else is outline or ghost."
        wide
      >
        <Row>
          <Button>Read the paper</Button>
          <Button variant="outline">View code</Button>
        </Row>
        <StateMatrix
          rows={buttonVariants}
          states={[
            "default",
            "hover",
            "focus",
            "active",
            "disabled",
            "loading",
          ]}
          render={(variant, state) =>
            state === "loading" ? (
              <Button variant={variant} disabled>
                <Spinner data-icon="inline-start" />
                Saving
              </Button>
            ) : (
              <Button variant={variant} {...previewState(state)}>
                Save draft
              </Button>
            )
          }
        />
        <Caption>Sizes</Caption>
        <Row>
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </Row>
        <Caption>With icon</Caption>
        <Row>
          <Button>
            <MailIcon data-icon="inline-start" />
            Get in touch
          </Button>
          <Button variant="outline">
            Continue
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
          <Button size="icon-xs" variant="outline" aria-label="Add">
            <PlusIcon />
          </Button>
          <Button size="icon-sm" variant="outline" aria-label="Add">
            <PlusIcon />
          </Button>
          <Button size="icon" variant="outline" aria-label="Add">
            <PlusIcon />
          </Button>
          <Button size="icon-lg" variant="outline" aria-label="Add">
            <PlusIcon />
          </Button>
        </Row>
        <Caption>Long label</Caption>
        <Row>
          <Button className="max-w-56">
            <span className="truncate">
              Download the full replication package with all datasets
            </span>
          </Button>
        </Row>
      </Block>

      <Grid>
        <Block
          title="Button group"
          description="Related actions joined into one control."
        >
          <ButtonGroup>
            <Button variant="outline">Paper</Button>
            <Button variant="outline">Slides</Button>
            <Button variant="outline">Artifact</Button>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonGroupText>BibTeX</ButtonGroupText>
            <Button variant="outline">Copy</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>Publish</Button>
            <ButtonGroupSeparator />
            <Button size="icon" aria-label="More options">
              <ChevronDownIcon />
            </Button>
          </ButtonGroup>
        </Block>

        <Block
          title="Toggle and toggle group"
          description="On/off state, or one choice among a few."
        >
          <StateMatrix
            rows={["default", "outline"] as const}
            states={["off", "on", "hover", "focus", "disabled"]}
            render={(variant, state) => (
              <Toggle
                variant={variant}
                aria-label="Bold"
                defaultPressed={state === "on"}
                {...previewState(state)}
              >
                <BoldIcon />
              </Toggle>
            )}
          />
          <ToggleGroup defaultValue={["bold"]} variant="outline" multiple>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup defaultValue={["papers"]}>
            <ToggleGroupItem value="papers">Papers</ToggleGroupItem>
            <ToggleGroupItem value="projects">Projects</ToggleGroupItem>
            <ToggleGroupItem value="notes">Notes</ToggleGroupItem>
          </ToggleGroup>
        </Block>

        <Block title="Badge" description="Short status or category labels.">
          <Row>
            {badgeVariants.map((variant) => (
              <Badge key={variant} variant={variant}>
                {variant}
              </Badge>
            ))}
          </Row>
          <Row>
            <Badge>ICSE 2026</Badge>
            <Badge variant="secondary">Open source</Badge>
            <Badge variant="outline" className="max-w-40">
              <span className="truncate">
                Distinguished artifact award, reusable and available
              </span>
            </Badge>
          </Row>
        </Block>

        <Block title="Kbd" description="Keyboard keys and shortcuts.">
          <Row>
            <Kbd>Esc</Kbd>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
            <span className="text-sm text-muted-foreground">
              Press <Kbd>/</Kbd> to search
            </span>
          </Row>
        </Block>
      </Grid>
    </Section>
  )
}
