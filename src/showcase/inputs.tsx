import * as React from "react"
import { AtSignIcon, SearchIcon, SendIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

import { Block, Caption, Grid, Section } from "./section"
import { previewState, StateMatrix } from "./state-matrix"

const venues = ["ICSE", "FSE", "ASE", "MSR", "ICSME", "SANER", "EMSE", "TOSEM"]

const topics = [
  { label: "Pick a topic", value: null },
  { label: "Software evolution", value: "evolution" },
  { label: "Code review", value: "review" },
  { label: "Developer tooling", value: "tooling" },
  { label: "Empirical studies", value: "empirical" },
]

const fieldStates = ["default", "hover", "focus", "disabled", "invalid"]

export function Inputs() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2026, 10, 13)
  )

  return (
    <Section id="inputs" title="Inputs">
      <Block
        title="Input and textarea"
        description="Free text. Always wrapped in a Field with a label."
        wide
      >
        <StateMatrix
          rows={["input", "textarea"] as const}
          states={fieldStates}
          render={(row, state) => {
            const props = {
              "aria-invalid": state === "invalid" || undefined,
              ...previewState(state),
            }
            return row === "input" ? (
              <Input placeholder="you@example.com" {...props} />
            ) : (
              <Textarea placeholder="Your message" rows={2} {...props} />
            )
          }}
        />
      </Block>

      <Grid>
        <Block
          title="Field"
          description="Label, control, description and error as one unit."
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" placeholder="Ada Lovelace" />
              <FieldDescription>
                How you'd like to be addressed.
              </FieldDescription>
            </Field>
            <Field data-invalid>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" defaultValue="ada@" aria-invalid />
              <FieldError>Enter a complete email address.</FieldError>
            </Field>
            <Field data-disabled>
              <FieldLabel htmlFor="org">Organization</FieldLabel>
              <Input id="org" placeholder="Not editable" disabled />
            </Field>
            <FieldSeparator>Optional</FieldSeparator>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                placeholder="What would you like to talk about?"
              />
            </Field>
          </FieldGroup>
        </Block>

        <Block
          title="Input group"
          description="Inputs with addons, prefixes and inline buttons."
        >
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search papers" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="fleap.dev" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <AtSignIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="username" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>Check</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupTextarea placeholder="Write a note…" />
            <InputGroupAddon align="block-end">
              <InputGroupButton
                variant="default"
                size="icon-sm"
                className="ml-auto"
                aria-label="Send"
              >
                <SendIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Block>

        <Block
          title="Select and native select"
          description="Pick one from a list. Native for long, simple lists."
        >
          <Field>
            <FieldLabel>Topic</FieldLabel>
            <Select items={topics}>
              <SelectTrigger className="w-56">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {topics.map((topic) => (
                    <SelectItem key={topic.label} value={topic.value}>
                      {topic.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="year">Year</FieldLabel>
            <NativeSelect id="year">
              <NativeSelectOptGroup label="Recent">
                <NativeSelectOption value="2026">2026</NativeSelectOption>
                <NativeSelectOption value="2025">2025</NativeSelectOption>
              </NativeSelectOptGroup>
              <NativeSelectOptGroup label="Older">
                <NativeSelectOption value="2024">2024</NativeSelectOption>
                <NativeSelectOption value="2023">2023</NativeSelectOption>
              </NativeSelectOptGroup>
            </NativeSelect>
          </Field>
        </Block>

        <Block
          title="Combobox"
          description="Searchable select for longer lists."
        >
          <Field>
            <FieldLabel>Venue</FieldLabel>
            <Combobox items={venues}>
              <ComboboxInput placeholder="Search venues" />
              <ComboboxContent>
                <ComboboxEmpty>No venue found.</ComboboxEmpty>
                <ComboboxList>
                  {(item: string) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
        </Block>

        <Block
          title="Checkbox, radio and switch"
          description="Binary and single-choice controls."
        >
          <FieldSet>
            <FieldLegend variant="label">Notify me about</FieldLegend>
            <FieldGroup className="gap-3">
              <Field orientation="horizontal">
                <Checkbox id="papers" defaultChecked />
                <FieldLabel htmlFor="papers">New papers</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="projects" />
                <FieldLabel htmlFor="projects">New projects</FieldLabel>
              </Field>
              <Field orientation="horizontal" data-invalid>
                <Checkbox id="terms" aria-invalid />
                <FieldLabel htmlFor="terms">Accept terms</FieldLabel>
              </Field>
              <Field orientation="horizontal" data-disabled>
                <Checkbox id="talks" disabled />
                <FieldLabel htmlFor="talks">Talks (soon)</FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldLegend variant="label">Frequency</FieldLegend>
            <RadioGroup defaultValue="monthly">
              {["weekly", "monthly", "never"].map((value) => (
                <Field key={value} orientation="horizontal">
                  <RadioGroupItem value={value} id={value} />
                  <FieldLabel htmlFor={value} className="capitalize">
                    {value}
                  </FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Reduced motion</FieldTitle>
              <FieldDescription>
                Turn off decorative animation.
              </FieldDescription>
            </FieldContent>
            <Switch defaultChecked />
          </Field>
          <Caption>Switch sizes</Caption>
          <div className="flex items-center gap-3">
            <Switch size="sm" />
            <Switch />
            <Switch disabled />
          </div>
        </Block>

        <Block title="Slider" description="Choose a value within a range.">
          <Label>Font size</Label>
          <Slider defaultValue={[60]} />
          <Label>Year range</Label>
          <Slider defaultValue={[2019, 2026]} min={2015} max={2026} />
          <Slider defaultValue={[30]} disabled />
        </Block>

        <Block
          title="Input OTP"
          description="One-time codes, one character per slot."
        >
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Block>

        <Block title="Calendar" description="Date picking.">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
            className="rounded-lg border"
          />
        </Block>
      </Grid>
    </Section>
  )
}
