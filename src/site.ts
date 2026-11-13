// Site-wide content and metadata. Pages and layouts read from here, so editing
// copy or links shouldn't require touching markup.

export type SiteLink = {
  label: string
  href: string
}

export const site = {
  name: "Felipe Paixão",
  title: "fleap.dev",
  description:
    "Software Engineering researcher. I build complex things as simply as possible.",
  email: "fleap@fleap.dev",
  links: [
    { label: "GitHub", href: "https://github.com/fleap-dev" },
    { label: "Polaris", href: "https://polaris.fleap.dev" },
  ] satisfies SiteLink[],
}
