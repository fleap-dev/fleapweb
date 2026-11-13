import * as React from "react"
import { FileTextIcon, FolderIcon, SettingsIcon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Block, Grid, Row, Section } from "./section"

export function Overlays() {
  // Controlled so cmdk doesn't scroll its first item into view on mount.
  const [command, setCommand] = React.useState("none")

  return (
    <Section
      id="overlays"
      title="Overlays"
      description="Each button opens the overlay it is named after."
    >
      <Grid>
        <Block title="Modal" description="Dialog, alert dialog, sheet, drawer.">
          <Row>
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                Dialog
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Subscribe to updates</DialogTitle>
                  <DialogDescription>
                    One email when something new is published. Nothing else.
                  </DialogDescription>
                </DialogHeader>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="dialog-email">Email</FieldLabel>
                    <Input id="dialog-email" placeholder="you@example.com" />
                  </Field>
                </FieldGroup>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>
                    Cancel
                  </DialogClose>
                  <Button>Subscribe</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="outline" />}>
                Alert dialog
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete this draft?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This can't be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep it</AlertDialogCancel>
                  <AlertDialogAction variant="destructive">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Sheet
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Contents</SheetTitle>
                  <SheetDescription>
                    Jump to a section of this page.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Drawer>
              <DrawerTrigger render={<Button variant="outline" />}>
                Drawer
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Cite this paper</DrawerTitle>
                  <DrawerDescription>Copy the BibTeX entry.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Copy BibTeX</Button>
                  <DrawerClose render={<Button variant="outline" />}>
                    Close
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Row>
        </Block>

        <Block title="Anchored" description="Popover, hover card, tooltip.">
          <Row>
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Popover
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>Co-authors</PopoverTitle>
                  <PopoverDescription>
                    Three people worked on this paper.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>

            <HoverCard>
              <HoverCardTrigger render={<Button variant="link" />}>
                Hover card
              </HoverCardTrigger>
              <HoverCardContent className="flex flex-col gap-1">
                <span className="text-sm font-medium">Felipe Paixão</span>
                <span className="text-xs text-muted-foreground">
                  Software Engineering researcher.
                </span>
              </HoverCardContent>
            </HoverCard>

            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                Tooltip
              </TooltipTrigger>
              <TooltipContent>Copy citation</TooltipContent>
            </Tooltip>
          </Row>
        </Block>

        <Block title="Menus" description="Dropdown and context menu.">
          <Row>
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                Dropdown menu
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Paper</DropdownMenuLabel>
                  <DropdownMenuItem>
                    Copy link <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Download PDF</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuCheckboxItem checked>
                    Show abstract
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuItem variant="destructive">
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </Row>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-24 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuGroup>
                <ContextMenuItem>
                  Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Reload</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem>View source</ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        </Block>

        <Block
          title="Command"
          description="Search-driven navigation, shown inline."
        >
          <Command
            value={command}
            onValueChange={setCommand}
            className="rounded-lg border"
          >
            <CommandInput placeholder="Search the site…" />
            <CommandList>
              <CommandEmpty>Nothing found.</CommandEmpty>
              <CommandGroup heading="Pages">
                <CommandItem>
                  <FileTextIcon />
                  Papers
                </CommandItem>
                <CommandItem>
                  <FolderIcon />
                  Projects
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <SettingsIcon />
                  Appearance
                  <CommandShortcut>⌘,</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Block>
      </Grid>
    </Section>
  )
}
