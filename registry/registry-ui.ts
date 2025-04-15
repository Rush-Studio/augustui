import { type Registry } from "shadcn/registry";

const ui: Registry["items"] = [
  {
    name: "typing-animation",
    type: "registry:ui",
    title: "Typing Animation",
    description:
      "A typing animation component that animates text as it's typed and retyped.",
    dependencies: ["motion", "react"],
    files: [
      {
        path: "registry/augustui/typing-animation.tsx",
        type: "registry:ui",
        target: "components/augustui/typing-animation.tsx",
      },
    ],
  },
  {
    name: "social-dock",
    type: "registry:ui",
    title: "Social Dock",
    description:
      "A social dock component that displays a list of social media icons.",
    dependencies: ["motion", "react"],
    files: [
      {
        path: "registry/augustui/social-dock.tsx",
        type: "registry:ui",
        target: "components/augustui/social-dock.tsx",
      },
    ],
  },
  {
    name: "tectonic-waves",
    type: "registry:ui",
    title: "Tectonic Waves",
    description:
      "A tectonic waves component that animates the waves like tectonic plates.",
    dependencies: ["motion", "react"],
    files: [
      {
        path: "registry/augustui/tectonic-waves.tsx",
        type: "registry:ui",
        target: "components/augustui/tectonic-waves.tsx",
      },
    ],
  },
  {
    name: "luminous-veil",
    type: "registry:ui",
    title: "Luminous Veil",
    description:
      "A refined background component featuring soft, cascading light beams for an elegant and immersive experience.",
    dependencies: ["motion", "react"],
    files: [
      {
        path: "registry/augustui/luminous-veil.tsx",
        type: "registry:ui",
        target: "components/augustui/luminous-veil.tsx",
      },
    ],
  },
  {
    name: "scramble-appear",
    type: "registry:ui",
    title: "Scramble Appear",
    description:
      "A dynamic text effect that scrambles and blinks each letter into place for the added intrigue and elegance.",
    dependencies: ["motion", "react"],
    files: [
      {
        path: "registry/augustui/scramble-appear.tsx",
        type: "registry:ui",
        target: "components/augustui/scramble-appear.tsx",
      },
    ],
  },
  {
    name: "letter-decoder",
    type: "registry:ui",
    title: "Letter Decoder",
    description: "A letter decoder component that decodes text as it's typed.",
    dependencies: ["react"],
    files: [
      {
        path: "registry/augustui/letter-decoder.tsx",
        type: "registry:ui",
        target: "components/augustui/letter-decoder.tsx",
      },
    ],
  },
  {
    name: "shimmer-text",
    type: "registry:ui",
    title: "Shimmer Text",
    description: "A shimmer text component that shimmers text.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/shimmer-text.tsx",
        type: "registry:ui",
        target: "components/augustui/shimmer-text.tsx",
      },
    ],
  },
  {
    name: "nudge-button",
    type: "registry:ui",
    title: "Nudge Button",
    description: "A nudge button component that nudes text.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/nudge-button.tsx",
        type: "registry:ui",
        target: "components/augustui/nudge-button.tsx",
      },
    ],
  },
  {
    name: "swipe-flicker",
    type: "registry:ui",
    title: "Swipe Flicker",
    description: "A swipe flicker component that flickers images.",
    dependencies: ["react", "next/image"],
    files: [
      {
        path: "registry/augustui/swipe-flicker.tsx",
        type: "registry:ui",
        target: "components/augustui/swipe-flicker.tsx",
      },
    ],
  },
  {
    name: "phantom-hover",
    type: "registry:ui",
    title: "Phantom Hover",
    description: "A phantom hover component that hovers over the element.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/phantom-hover.tsx",
        type: "registry:ui",
        target: "components/augustui/phantom-hover.tsx",
      },
    ],
  },
  {
    name: "shape-shifter",
    type: "registry:ui",
    title: "Shape Shifter",
    description:
      "A shape shifter component that shifts the shape of the element.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/shape-shifter.tsx",
        type: "registry:ui",
        target: "components/augustui/shape-shifter.tsx",
      },
    ],
  },
  {
    name: "glazing-button",
    type: "registry:ui",
    title: "Glazing Button",
    description: "A glazing button component that glazes the button.",
    dependencies: ["react"],
    files: [
      {
        path: "registry/augustui/glazing-button.tsx",
        type: "registry:ui",
        target: "components/augustui/glazing-button.tsx",
      },
    ],
  },
  {
    name: "whisper-text",
    type: "registry:ui",
    title: "Whisper Text",
    description: "A whisper text component that whispers text.",
    dependencies: ["react"],
    files: [
      {
        path: "registry/augustui/whisper-text.tsx",
        type: "registry:ui",
        target: "components/augustui/whisper-text.tsx",
      },
    ],
  },
  {
    name: "perspective-pile",
    type: "registry:ui",
    title: "Perspective Pile",
    description: "A perspective pile component that displays a list of images.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/perspective-pile.tsx",
        type: "registry:ui",
        target: "components/augustui/perspective-pile.tsx",
      },
    ],
  },
  {
    name: "cascade-cards",
    type: "registry:ui",
    title: "Cascade Cards",
    description: "A cascade cards component that displays a list of cards.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/cascade-cards.tsx",
        type: "registry:ui",
        target: "components/augustui/cascade-cards.tsx",
      },
    ],
  },
  {
    name: "starwars-prologue",
    type: "registry:ui",
    title: "Star Wars Prologue",
    description: "A star wars prologue component that displays a list of text.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/starwars-prologue.tsx",
        type: "registry:ui",
        target: "components/augustui/starwars-prologue.tsx",
      },
    ],
  },
  {
    name: "hover-vibe-card",
    type: "registry:ui",
    title: "Hover Vibe Card",
    description: "A hover vibe card component that displays a list of text.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/hover-vibe-card.tsx",
        type: "registry:ui",
        target: "components/augustui/hover-vibe-card.tsx",
      },
    ],
  },
  {
    name: "parallax-hover-card",
    type: "registry:ui",
    title: "Parallax Hover Card",
    description:
      "A parallax hover card component that displays a list of text.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/parallax-hover-card.tsx",
        type: "registry:ui",
        target: "components/augustui/parallax-hover-card.tsx",
      },
    ],
  },
  {
    name: "shadeshift-visibility",
    type: "registry:ui",
    title: "ShadeShift Visibility",
    description:
      "A shade shift visibility component that displays a list of text.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/shadeshift-visibility.tsx",
        type: "registry:ui",
        target: "components/augustui/shadeshift-visibility.tsx",
      },
    ],
  },
  {
    name: "velvet-view",
    type: "registry:ui",
    title: "Velvet View",
    description: "A velvet view component that displays a list of text.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/velvet-view.tsx",
        type: "registry:ui",
        target: "components/augustui/velvet-view.tsx",
      },
    ],
  },
  {
    name: "slide-deck",
    type: "registry:ui",
    title: "Slide Deck",
    description: "A slide deck component that displays a list of images.",
    dependencies: ["react", "motion"],
    files: [
      {
        path: "registry/augustui/slide-deck.tsx",
        type: "registry:ui",
        target: "components/augustui/slide-deck.tsx",
      },
    ],
  },
];

export { ui };
