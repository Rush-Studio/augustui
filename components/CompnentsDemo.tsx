import { allPages } from "content-collections";
import { notFound } from "next/navigation";
import { Mdx } from "./mdx-components";
import { cn } from "@/lib/utils";
import { josefinSans } from "@/lib/fonts";
const PAGE = "/home";

export default function ComponentsDemo() {
  const page = allPages.find((page) => page.slug === PAGE);

  if (!page) {
    notFound();
  }

  return (
    <section
      id="component-demos"
      className="container mx-auto mt-16 max-w-5xl py-8 sm:py-14"
    >
      <h2
        className={cn(
          "mb-2 text-center text-3xl font-bold leading-[1.2] tracking-tighter text-foreground sm:text-4xl lg:text-5xl",
          josefinSans.className,
        )}
      >
        Building Blocks of Awesome 😎
      </h2>
      <h3 className="mx-auto mb-6 text-balance text-center text-base font-medium tracking-tight text-foreground/80 sm:mb-8 sm:text-lg">
        Here’s a taste of the components that bring your app to life!
      </h3>
      {page && <Mdx code={page.body.code} />}
    </section>
  );
}
