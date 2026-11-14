// Site-wide content and metadata. Pages and layouts read from here, so editing
// copy or links shouldn't require touching markup.

export type SiteLink = {
  label: string
  href: string
}

// A paper shown under "Featured papers" on the home page.
export type Paper = {
  title: string
  venue: string
  year: number
  href?: string
}

export const site = {
  name: "Felipe Paixão",
  title: "fleap.dev",
  description:
    "Software Engineering researcher. I build complex things as simply as possible.",
  email: "fleap@fleap.dev",
  links: [
    { label: "GitHub", href: "https://github.com/fleap-dev" },
  ] satisfies SiteLink[],
  // Shown in this order under "Featured papers".
  papers: [
    {
      title:
        "Automated Detection of Configuration-Specific Security Vulnerabilities via Patch Analysis",
      venue: "FSE",
      year: 2026,
      href: "https://doi.org/10.1145/3808126",
    },
    {
      title:
        "Characterizing and Modeling the GitHub Security Advisories Review Pipeline",
      venue: "MSR",
      year: 2026,
      href: "https://doi.org/10.1145/3793302.3793360",
    },
    {
      title:
        "ARGUS: A Context-Aware Software Architecture for Smart Environments",
      venue: "ICSA",
      year: 2026,
      href: "https://ieeexplore.ieee.org/document/11612812",
    },
  ] satisfies Paper[],
}
