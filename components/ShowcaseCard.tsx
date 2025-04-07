import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface ShowcaseCardProps {
  title: string;
  image: string;
  href: string;
  affiliation?: string;
  mainShowcase?: boolean;
}
export function ShowcaseCard({
  title,
  image,
  href,
  affiliation,
  mainShowcase = false,
}: ShowcaseCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex cursor-pointer flex-col gap-2 overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="size-full max-h-[300px] rounded-xl object-cover object-top"
      />

      {!mainShowcase && (
        <div className="flex flex-col">
          <div className="group inline-flex cursor-pointer items-center justify-start gap-1 text-xl font-semibold text-neutral-700 duration-200 hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-200">
            {title}
            <ChevronRightIcon className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
          </div>
          <p className="text-sm text-neutral-400">{affiliation}</p>
        </div>
      )}
    </Link>
  );
}
