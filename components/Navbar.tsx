import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { josefinSans } from "@/lib/fonts";
import { MobileNav } from "./MobileNav";
import GithubButton from "./github-button";
import { docsConfig } from "@/config/docs";
import NavbarLink from "./navbar-link";
import AugustUI from "./icons/AugustUI";

export function Navbar() {
  return (
    <nav
      className={cn(
        "fixed inset-x-0 z-50 h-16 border-b border-border bg-background/90 shadow-sm backdrop-blur-md transition-all duration-300",
      )}
      style={{
        top: "var(--announcement-height, 0px)",
      }}
    >
      <div className="mx-auto h-full max-w-[1560px] px-6">
        <div className="flex h-full items-center justify-between">
          <div className="flex w-full justify-between gap-10">
            <Link href="/" className="group hidden items-center gap-2 md:flex">
              <AugustUI className="size-6" />
              <span
                className={cn(
                  josefinSans.className,
                  "translate-y-[2px] text-2xl font-semibold tracking-tight",
                )}
              >
                AugustUI
              </span>
            </Link>
            <MobileNav />

            <div className="hidden items-center gap-12 md:flex">
              {docsConfig.mainNav.map((item) => (
                <NavbarLink key={item.href} {...item} />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <GithubButton />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
