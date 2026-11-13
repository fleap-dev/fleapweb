import {
  ChevronsUpDownIcon,
  ExternalLinkIcon,
  FileTextIcon,
} from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/code-block"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useHighlightedCode } from "@/hooks/use-highlighted-code"

import { Block, Caption, Grid, Section } from "./section"

const papers = [
  {
    title: "Simplicity as a design constraint",
    venue: "ICSE",
    year: 2026,
    status: "Accepted",
  },
  {
    title: "How developers reason about refactoring",
    venue: "FSE",
    year: 2025,
    status: "Published",
  },
  {
    title: "A replication of build-failure studies",
    venue: "MSR",
    year: 2025,
    status: "Published",
  },
  {
    title: "Mining tool adoption at scale",
    venue: "EMSE",
    year: 2024,
    status: "Published",
  },
]

const chartData = [
  { year: "2021", papers: 1, projects: 2 },
  { year: "2022", papers: 2, projects: 3 },
  { year: "2023", papers: 3, projects: 2 },
  { year: "2024", papers: 2, projects: 4 },
  { year: "2025", papers: 4, projects: 3 },
  { year: "2026", papers: 3, projects: 5 },
]

const chartConfig = {
  papers: { label: "Papers", color: "var(--chart-2)" },
  projects: { label: "Projects", color: "var(--chart-4)" },
} satisfies ChartConfig

const snippet = `// Keep it simple.
export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}`

const tags = Array.from(
  { length: 30 },
  (_, i) => `note-${String(i + 1).padStart(2, "0")}`
)

export function DataDisplay() {
  const lines = useHighlightedCode(snippet, "ts")

  return (
    <Section id="data-display" title="Data display">
      <Grid>
        <Block
          title="Card"
          description="A self-contained piece of content: a paper, a project, a post."
        >
          <Card>
            <CardHeader>
              <CardTitle>Simplicity as a design constraint</CardTitle>
              <CardDescription>
                ICSE 2026 · with three co-authors
              </CardDescription>
              <CardAction>
                <Badge variant="secondary">Accepted</Badge>
              </CardAction>
            </CardHeader>
            <CardContent className="text-sm">
              We study how teams decide what not to build, and what it costs
              them when they get it wrong.
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">Read paper</Button>
              <Button size="sm" variant="outline">
                Artifact
              </Button>
            </CardFooter>
          </Card>
          <Card size="sm">
            <CardHeader>
              <CardTitle>Small card</CardTitle>
              <CardDescription>Header only, compact spacing.</CardDescription>
            </CardHeader>
          </Card>
        </Block>

        <Block title="Item" description="Rows in a list: links, files, people.">
          <ItemGroup>
            <Item variant="outline">
              <ItemMedia variant="icon">
                <FileTextIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Simplicity as a design constraint</ItemTitle>
                <ItemDescription>ICSE 2026</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="icon-sm" variant="ghost" aria-label="Open">
                  <ExternalLinkIcon />
                </Button>
              </ItemActions>
            </Item>
            <ItemSeparator />
            <Item>
              <ItemContent>
                <ItemTitle className="line-clamp-1">
                  A deliberately long title to see how a list row handles text
                  that keeps going well past the width of its container
                </ItemTitle>
                <ItemDescription>Default variant, no media.</ItemDescription>
              </ItemContent>
            </Item>
            <Item variant="muted" size="sm">
              <ItemContent>
                <ItemTitle>Muted, small</ItemTitle>
              </ItemContent>
            </Item>
          </ItemGroup>
        </Block>

        <Block
          title="Table"
          description="Tabular data, like a publication list."
          wide
        >
          <Table>
            <TableCaption>Selected publications.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead className="text-right">Year</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {papers.map((paper) => (
                <TableRow key={paper.title}>
                  <TableCell className="max-w-64 truncate font-medium">
                    {paper.title}
                  </TableCell>
                  <TableCell>{paper.venue}</TableCell>
                  <TableCell className="text-right tabular-nums">
                    {paper.year}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        paper.status === "Accepted" ? "default" : "outline"
                      }
                    >
                      {paper.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Block>

        <Block
          title="Code block"
          description="Code samples with highlighting and copy."
          wide
        >
          <CodeBlock>
            <CodeBlockHeader>
              <CodeBlockTitle>slugify.ts</CodeBlockTitle>
              <CodeBlockActions>
                <CodeBlockCopyButton value={snippet} />
              </CodeBlockActions>
            </CodeBlockHeader>
            <CodeBlockContent lineNumbers>
              {lines.map((line, index) => (
                <CodeBlockLine key={index}>{line}</CodeBlockLine>
              ))}
            </CodeBlockContent>
          </CodeBlock>
          <CodeBlock size="sm">
            <CodeBlockContent>
              pnpm dlx shadcn@latest add button
            </CodeBlockContent>
          </CodeBlock>
        </Block>

        <Block title="Chart" description="Uses chart-1…5 tokens." wide>
          <ChartContainer config={chartConfig} className="h-56 w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="year"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="papers" fill="var(--color-papers)" radius={4} />
              <Bar dataKey="projects" fill="var(--color-projects)" radius={4} />
            </BarChart>
          </ChartContainer>
        </Block>

        <Block
          title="Avatar"
          description="People, with a fallback when the image fails."
        >
          <div className="flex items-center gap-3">
            <Avatar size="sm">
              <AvatarFallback>FP</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/fleap-dev.png"
                alt="Felipe"
              />
              <AvatarFallback>FP</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarImage src="/missing.png" alt="Missing" />
              <AvatarFallback>MI</AvatarFallback>
              <AvatarBadge />
            </Avatar>
          </div>
          <AvatarGroup>
            {["AL", "GH", "BL"].map((initials) => (
              <Avatar key={initials}>
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+4</AvatarGroupCount>
          </AvatarGroup>
        </Block>

        <Block
          title="Accordion and collapsible"
          description="Progressive disclosure."
        >
          <Accordion defaultValue={["what"]}>
            <AccordionItem value="what">
              <AccordionTrigger>What is this site?</AccordionTrigger>
              <AccordionContent>
                A home for my papers, projects and notes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="why">
              <AccordionTrigger>Why rebuild it?</AccordionTrigger>
              <AccordionContent>
                The old one was never finished. This one starts simple.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Collapsible className="flex flex-col gap-2">
            <CollapsibleTrigger
              render={<Button variant="ghost" size="sm" className="w-fit" />}
            >
              Show abstract
              <ChevronsUpDownIcon data-icon="inline-end" />
            </CollapsibleTrigger>
            <CollapsibleContent className="text-sm text-muted-foreground">
              We look at what teams leave out, and why it matters.
            </CollapsibleContent>
          </Collapsible>
        </Block>

        <Block title="Carousel" description="A row of items, one at a time.">
          <Carousel className="mx-auto w-full max-w-48">
            <CarouselContent>
              {["Papers", "Projects", "Notes"].map((label) => (
                <CarouselItem key={label}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <span className="font-heading text-xl font-semibold">
                        {label}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Block>

        <Block
          title="Scroll area, aspect ratio, separator"
          description="Layout helpers."
        >
          <ScrollArea className="h-32 rounded-md border">
            <div className="flex flex-col p-3 text-sm">
              {tags.map((tag, index) => (
                <div key={tag}>
                  {index > 0 && <Separator className="my-2" />}
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>
          <Caption>16 / 9</Caption>
          <AspectRatio ratio={16 / 9} className="rounded-md bg-muted" />
          <div className="flex h-5 items-center gap-3 text-sm">
            Papers
            <Separator orientation="vertical" />
            Projects
            <Separator orientation="vertical" />
            Notes
          </div>
        </Block>

        <Block title="Resizable" description="Panels the reader can resize.">
          <ResizablePanelGroup
            orientation="horizontal"
            className="min-h-32 rounded-lg border"
          >
            <ResizablePanel defaultSize="40%">
              <div className="flex h-full items-center justify-center text-sm">
                Outline
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="60%">
              <div className="flex h-full items-center justify-center text-sm">
                Content
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Block>
      </Grid>
    </Section>
  )
}
