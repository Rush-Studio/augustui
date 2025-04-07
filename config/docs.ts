import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/docs/components",
    },
    {
      title: "Templates",
      href: "/templates",
      event: "header_cta_clicked",
    },
    {
      title: "Showcase",
      href: "/showcase",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [
            {
              title: "Next.js",
              href: `/docs/installation/next`,
              items: [],
            },
            {
              title: "Vite",
              href: `/docs/installation/vite`,
              items: [],
            },
            {
              title: "Remix",
              href: `/docs/installation/remix`,
              items: [],
            },
            {
              title: "Astro",
              href: `/docs/installation/astro`,
              items: [],
            },
            {
              title: "Laravel",
              href: `/docs/installation/laravel`,
              items: [],
            },
            {
              title: "Gatsby",
              href: `/docs/installation/gatsby`,
              items: [],
            },
            {
              title: "Manual",
              href: `/docs/installation/manual`,
              items: [],
            },
          ],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
      ],
    },
    {
      title: "Templates",
      items: [
        {
          title: "Portfolio",
          href: `/docs/templates/portfolio`,
          items: [],
          label: "",
          event: "template_portfolio_clicked",
        },
        {
          title: "Waitlist",
          href: `/docs/templates/waitlist`,
          items: [],
          label: "",
          event: "template_waitlist_clicked",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Social Dock",
          href: `/docs/components/social-dock`,
          items: [],
          label: "",
        },
        {
          title: "Cascade Cards",
          href: `/docs/components/cascade-cards`,
          items: [],
          label: "",
        },
        {
          title: "Hover Vibe Card",
          href: `/docs/components/hover-vibe-card`,
          items: [],
          label: "",
        },
        {
          title: "Parallax Hover Card",
          href: `/docs/components/parallax-hover-card`,
          items: [],
          label: "",
        },
      ],
    },
    {
      title: "Special Effects",
      items: [
        {
          title: "Swipe Flicker",
          href: `/docs/components/swipe-flicker`,
          items: [],
          label: "",
        },
        {
          title: "Shape Shifter",
          href: `/docs/components/shape-shifter`,
          items: [],
          label: "",
        },
        {
          title: "Perspective Pile",
          href: `/docs/components/perspective-pile`,
          items: [],
          label: "",
        },
        {
          title: "Star Wars Prologue",
          href: `/docs/components/starwars-prologue`,
          items: [],
          label: "",
        },
        {
          title: "ShadeShift Visibility",
          href: `/docs/components/shadeshift-visibility`,
          items: [],
          label: "",
        },
        {
          title: "Velvet View",
          href: `/docs/components/velvet-view`,
          items: [],
          label: "",
        },
      ],
    },
    {
      title: "Text Animations",
      items: [
        {
          title: "Typing Animation",
          href: `/docs/components/typing-animation`,
          items: [],
          label: "",
        },
        {
          title: "Letter Decoder",
          href: `/docs/components/letter-decoder`,
          items: [],
          label: "",
        },
        {
          title: "Shimmer Text",
          href: `/docs/components/shimmer-text`,
          items: [],
          label: "",
        },
        {
          title: "Whisper Text",
          href: `/docs/components/whisper-text`,
          items: [],
          label: "",
        },
      ],
    },
    {
      title: "Buttons",
      items: [
        {
          title: "Nudge Button",
          href: `/docs/components/nudge-button`,
          items: [],
          label: "",
        },
        {
          title: "Phantom Hover",
          href: `/docs/components/phantom-hover`,
          items: [],
          label: "",
        },
        {
          title: "Glazing Button",
          href: `/docs/components/glazing-button`,
          items: [],
          label: "",
        },
      ],
    },
    {
      title: "Backgrounds",
      items: [
        {
          title: "Tectonic Waves",
          href: `/docs/components/tectonic-waves`,
          items: [],
          label: "",
        },
        {
          title: "Scramble Appear",
          href: `/docs/components/scramble-appear`,
          items: [],
          label: "",
        },
        {
          title: "Luminous Veil",
          href: `/docs/components/luminous-veil`,
          items: [],
          label: "",
        },
      ],
    },
  ],
};
