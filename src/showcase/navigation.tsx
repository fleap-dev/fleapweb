import {
  BookOpenIcon,
  FileTextIcon,
  FolderIcon,
  HomeIcon,
  NotebookPenIcon,
} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Block, Grid, Section } from "./section"

const sections = [
  { title: "Home", icon: HomeIcon },
  { title: "Papers", icon: FileTextIcon, badge: "12" },
  { title: "Projects", icon: FolderIcon, badge: "5" },
  { title: "Notes", icon: NotebookPenIcon },
  { title: "Reading list", icon: BookOpenIcon },
]

export function Navigation() {
  return (
    <Section id="navigation" title="Navigation">
      <Grid>
        <Block
          title="Tabs"
          description="Switch between views of the same content."
        >
          <Tabs defaultValue="papers">
            <TabsList>
              <TabsTrigger value="papers">Papers</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="notes" disabled>
                Notes
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="papers"
              className="text-sm text-muted-foreground"
            >
              Peer-reviewed work, newest first.
            </TabsContent>
            <TabsContent
              value="projects"
              className="text-sm text-muted-foreground"
            >
              Things I build in the open.
            </TabsContent>
          </Tabs>
          <Tabs defaultValue="all">
            <TabsList variant="line">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="2026">2026</TabsTrigger>
              <TabsTrigger value="2025">2025</TabsTrigger>
            </TabsList>
          </Tabs>
        </Block>

        <Block
          title="Breadcrumb"
          description="Where a page sits in the hierarchy."
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Papers</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Simplicity in practice</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-48 truncate">
                  A very long paper title that has to be truncated somewhere
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Block>

        <Block
          title="Pagination"
          description="Move through long, ordered lists."
        >
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Block>

        <Block
          title="Menubar"
          description="App-style menus. Rarely needed on a content site."
        >
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarItem>
                    New note <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>Open…</MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarItem disabled>Export PDF</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarCheckboxItem checked>
                    Show sidebar
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>Show outline</MenubarCheckboxItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Block>

        <Block
          title="Navigation menu"
          description="Top-level site navigation with optional flyouts."
          wide
          className="pb-48"
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Research</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-80 gap-1">
                    {[
                      ["Papers", "Peer-reviewed publications."],
                      ["Artifacts", "Datasets and replication packages."],
                      ["Talks", "Slides and recordings."],
                    ].map(([title, description]) => (
                      <li key={title}>
                        <NavigationMenuLink render={<a href="#" />}>
                          <div className="flex flex-col gap-1">
                            <span className="font-medium">{title}</span>
                            <span className="text-muted-foreground">
                              {description}
                            </span>
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<a href="#" />}
                  className={navigationMenuTriggerStyle()}
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<a href="#" />}
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Block>

        <Block
          title="Sidebar"
          description="Persistent section navigation."
          wide
        >
          <SidebarProvider className="min-h-0 overflow-hidden rounded-lg border">
            <Sidebar collapsible="none">
              <SidebarHeader className="font-heading text-sm font-semibold">
                fleap.dev
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Sections</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {sections.map((item, index) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton isActive={index === 1}>
                            <item.icon />
                            <span>{item.title}</span>
                          </SidebarMenuButton>
                          {item.badge && (
                            <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                          )}
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset className="p-6 text-sm text-muted-foreground">
              Page content sits here.
            </SidebarInset>
          </SidebarProvider>
        </Block>
      </Grid>
    </Section>
  )
}
