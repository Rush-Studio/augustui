import ParallaxHoverCard, {
  Layer,
} from "@/registry/augustui/parallax-hover-card";

export default function ParallaxHoverCardDemo() {
  const layers: Layer[] = [
    {
      type: "backgroundImage",
      src: "https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Sky",
      depth: 0, // No parallax for background
      className: "z-10",
    },
    {
      type: "heading",
      content: (
        <h2 className="text-2xl font-bold text-white uppercase">
          PARALLAX CARD
        </h2>
      ),
      depth: 0.3,
      className: "z-30",
    },
    {
      type: "foregroundImage",
      src: "/liberty.png",
      alt: "Castle",
      depth: 0.5, // Reduced parallax for foreground
      className: "z-20",
    },
    {
      type: "subheading",
      content: (
        <div className="flex flex-col">
          <p className="text-sm">Status of Liberty</p>
          <p className="text-sm">New York City, USA</p>
        </div>
      ),
      depth: 0,
      className: "z-40",
    },
  ];

  return (
    <div className="flex justify-center items-center max-h-[250px] max-w-[250px]">
      <ParallaxHoverCard layers={layers} />
    </div>
  );
}
