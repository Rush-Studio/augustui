import { josefinSans } from "@/lib/fonts";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { allShowcases } from "content-collections";
import { MarqueeShowcase } from "./MarqueeShowcase";

export function Showcase() {
  return (
    <section
      id="showcase"
      className="container mx-auto max-w-[1320px] rounded-xl bg-secondary py-14"
    >
      <div className="mx-auto max-w-[95%]">
        <div className="px-4 sm:px-6">
          <h2
            className={`${josefinSans.className} mb-4 text-center text-2xl font-bold text-primary sm:text-3xl md:text-4xl`}
          >
            From Pixels to Perfection 🤌
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-primary/60 sm:text-base md:mb-12">
            Explore stunning websites and applications built with our UI
            components — powering everything from sleek dashboards to dynamic
            e-commerce experiences.
          </p>
        </div>

        {/* Gallery Ticker */}
        <MarqueeShowcase items={allShowcases} />

        <div className="mt-6 px-4 text-center sm:px-6 md:mt-10">
          <Link
            href="/showcase"
            className="inline-flex items-center text-sm font-medium text-[#E84E36] hover:text-[#E84E36]/80 sm:text-base"
          >
            Take a peek
            <ChevronRightIcon className="ml-1 size-4 sm:size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
