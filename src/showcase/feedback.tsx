import { CircleAlertIcon, InfoIcon, SearchXIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "@/components/ui/toast"

import { Block, Grid, Row, Section } from "./section"

export function Feedback() {
  return (
    <Section id="feedback" title="Feedback">
      <Grid>
        <Block
          title="Alert"
          description="Callouts inside content: notes, warnings, errors."
        >
          <Alert>
            <InfoIcon />
            <AlertTitle>Preprint available</AlertTitle>
            <AlertDescription>
              The camera-ready version will replace this in March.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <CircleAlertIcon />
            <AlertTitle>Artifact link is broken</AlertTitle>
            <AlertDescription>The DOI no longer resolves.</AlertDescription>
            <AlertAction>
              <Button size="xs" variant="outline">
                Report
              </Button>
            </AlertAction>
          </Alert>
        </Block>

        <Block title="Toast" description="Short, transient confirmation.">
          <Row>
            <Button
              variant="outline"
              onClick={() =>
                toast.add({
                  title: "Citation copied",
                  description: "BibTeX is on your clipboard.",
                })
              }
            >
              Show toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.promise(
                  new Promise((resolve) => window.setTimeout(resolve, 1500)),
                  {
                    loading: "Preparing download…",
                    success: "Download ready.",
                    error: "Download failed.",
                  }
                )
              }
            >
              Loading toast
            </Button>
          </Row>
        </Block>

        <Block title="Progress and spinner" description="Work in flight.">
          <Progress value={64}>
            <ProgressLabel>Uploading dataset</ProgressLabel>
            <ProgressValue />
          </Progress>
          <Progress value={0} />
          <Progress value={100} />
          <Row className="text-sm text-muted-foreground">
            <Spinner />
            Loading
          </Row>
        </Block>

        <Block title="Skeleton" description="Placeholder while content loads.">
          <Card>
            <CardHeader className="flex items-center gap-3">
              <Skeleton className="size-10 rounded-full" />
              <div className="flex flex-1 flex-col gap-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>
        </Block>

        <Block
          title="Empty"
          description="When there is nothing to show yet."
          wide
        >
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchXIcon />
              </EmptyMedia>
              <EmptyTitle>No notes match “monads”</EmptyTitle>
              <EmptyDescription>
                Try a broader term, or browse everything.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm" variant="outline">
                Clear search
              </Button>
            </EmptyContent>
          </Empty>
        </Block>
      </Grid>
    </Section>
  )
}
