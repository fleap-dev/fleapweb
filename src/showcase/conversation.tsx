import { FileTextIcon, SearchIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "@/components/ui/toast"
import { Trace, TraceIcon, TraceLine, TraceTitle } from "@/components/ui/trace"

import { Block, Grid, Section } from "./section"

const thread = [
  { id: "1", role: "user", text: "Is the replication package public?" },
  {
    id: "2",
    role: "assistant",
    text: "Yes. It's linked from the paper page, with the scripts and the raw data.",
  },
  { id: "3", role: "user", text: "Which seed did you use?" },
  {
    id: "4",
    role: "assistant",
    text: "The study name. That way nobody has to wonder whether it was cherry-picked.",
  },
] as const

const formatItems = [
  {
    name: "format",
    required: true,
    choices: [{ value: "talk" }, { value: "paper" }, { value: "both" }],
  },
] as const

// Chat primitives ship with `add --all`. A content site likely won't use them,
// but they inherit the same tokens, so they are shown here for completeness.
export function Conversation() {
  return (
    <Section
      id="conversation"
      title="Conversation"
      description="Chat primitives. Unlikely to appear on the site, but they share the same tokens."
    >
      <Grid>
        <Block
          title="Message thread"
          description="Messages, bubbles and a status marker inside a scroller."
          wide
        >
          <div className="h-72 overflow-hidden rounded-lg border">
            <MessageScrollerProvider>
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent className="p-4">
                    {thread.map((message) => (
                      <MessageScrollerItem
                        key={message.id}
                        messageId={message.id}
                      >
                        <Message
                          align={message.role === "user" ? "end" : "start"}
                        >
                          <MessageContent>
                            <Bubble
                              variant={
                                message.role === "user" ? "default" : "muted"
                              }
                            >
                              <BubbleContent>{message.text}</BubbleContent>
                            </Bubble>
                          </MessageContent>
                        </Message>
                      </MessageScrollerItem>
                    ))}
                    <MessageScrollerItem scrollAnchor={false}>
                      <Marker role="status">
                        <MarkerIcon>
                          <Spinner />
                        </MarkerIcon>
                        <MarkerContent>Thinking…</MarkerContent>
                      </Marker>
                    </MessageScrollerItem>
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton />
              </MessageScroller>
            </MessageScrollerProvider>
          </div>
        </Block>

        <Block title="Bubble variants">
          <BubbleGroup>
            <Bubble>
              <BubbleContent>Default</BubbleContent>
            </Bubble>
            <Bubble variant="secondary">
              <BubbleContent>Secondary</BubbleContent>
            </Bubble>
            <Bubble variant="tinted">
              <BubbleContent>Tinted</BubbleContent>
            </Bubble>
            <Bubble variant="outline">
              <BubbleContent>Outline</BubbleContent>
            </Bubble>
            <Bubble variant="destructive">
              <BubbleContent>Destructive</BubbleContent>
            </Bubble>
          </BubbleGroup>
          <Marker variant="separator">
            <MarkerContent>Yesterday</MarkerContent>
          </Marker>
        </Block>

        <Block title="Attachment and trace">
          <Attachment className="w-full">
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>replication-package.zip</AttachmentTitle>
              <AttachmentDescription>ZIP · 48 MB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label="Remove replication-package.zip">
                <XIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
          <Attachment state="error" className="w-full">
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>dataset.csv</AttachmentTitle>
              <AttachmentDescription>Upload failed</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Trace>
            <TraceLine>
              <TraceIcon>
                <SearchIcon />
              </TraceIcon>
              <TraceTitle>Searched papers</TraceTitle>
            </TraceLine>
            <TraceLine status="running">
              <TraceIcon>
                <Spinner />
              </TraceIcon>
              <TraceTitle>Reading the abstract</TraceTitle>
            </TraceLine>
            <TraceLine status="error">
              <TraceTitle>Could not open the PDF</TraceTitle>
            </TraceLine>
          </Trace>
        </Block>

        <Block
          title="Questionnaire"
          description="Structured questions, one at a time."
          wide
        >
          <Questionnaire
            className="mx-auto max-w-lg"
            defaultItem="format"
            items={formatItems}
            onSubmit={(event) => {
              event.preventDefault()
              toast.add({ title: "Thanks for the answer." })
            }}
          >
            <QuestionnaireItem name="format" required>
              <QuestionnaireTitle>
                What would you like to see more of?
              </QuestionnaireTitle>
              <QuestionnaireDescription>Pick one.</QuestionnaireDescription>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="talk">
                  <span className="font-medium">Talks</span>
                  <QuestionnaireChoiceDescription>
                    Slides and recordings
                  </QuestionnaireChoiceDescription>
                </QuestionnaireChoice>
                <QuestionnaireChoice value="paper">
                  <span className="font-medium">Papers</span>
                  <QuestionnaireChoiceDescription>
                    Long-form research
                  </QuestionnaireChoiceDescription>
                </QuestionnaireChoice>
                <QuestionnaireChoice value="both">
                  <span className="font-medium">Both</span>
                </QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError />
            </QuestionnaireItem>
            <QuestionnaireActions className="w-full">
              <QuestionnaireSubmit>Send</QuestionnaireSubmit>
            </QuestionnaireActions>
          </Questionnaire>
        </Block>
      </Grid>
    </Section>
  )
}
