import { allShowcases } from "content-collections";
import { ShowcaseCard } from "@/components/ShowcaseCard";
import { josefinSans } from "@/lib/fonts";
import { absoluteUrl, cn } from "@/lib/utils";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Showcase | AugustUI",
    description: "Explore apps powered by AugustUI's sleek components.",
    openGraph: {
      title: "Showcase | AugustUI",
      description: "Explore apps powered by AugustUI's sleek components.",
      type: "website",
      url: absoluteUrl("/showcase"),
      images: [
        {
          url: "/og?title=Showcase&description=Explore%20apps%20powered%20by%20AugustUI's%20sleek%20components.",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Showcase | AugustUI",
      description: "Explore apps powered by AugustUI's sleek components.",
      images: [
        "/og?title=Showcase&description=Explore%20apps%20powered%20by%20AugustUI's%20sleek%20components.",
      ],
      creator: "@goyalsamarth",
    },
  };
}

export default function Page() {
  return (
    <article className="container mx-auto min-h-[calc(100vh-177px)] max-w-[120ch] py-14">
      <h2
        className={cn(
          "mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground",
          josefinSans.className,
        )}
      >
        Designed to Impress 🤩
      </h2>
      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Explore apps powered by AugustUI’s sleek components.
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {allShowcases.map((showcase, idx) => (
          <ShowcaseCard
            key={showcase.slug}
            {...showcase}
            href={showcase.slug}
          />
        ))}
      </div>
    </article>
  );
}
