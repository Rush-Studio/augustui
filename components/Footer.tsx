import Link from "next/link";
import { Button } from "./ui/button";
import Twitter from "./icons/Twitter";
import { Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background py-3 md:py-4">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-4 md:flex-row">
        <div className="flex flex-col items-center gap-2 text-center text-xs md:items-start md:text-left">
          <p className="max-w-[480px] text-muted-foreground">
            We&apos;re part of the{" "}
            <Link
              href="https://fiftyseven.is"
              className="text-primary hover:underline"
            >
              FiftySeven
            </Link>{" "}
            family along with{" "}
            <Link
              href="https://1kit.dev"
              className="text-primary hover:underline"
            >
              1Kit.dev
            </Link>
            ,{" "}
            <Link
              href="https://airloop.dev"
              className="text-primary hover:underline"
            >
              AirLoop
            </Link>
            ,{" "}
            <Link
              href="https://checkstack.co"
              className="text-primary hover:underline"
            >
              Checkstack
            </Link>{" "}
            &{" "}
            <Link
              href="https://frli.co"
              className="text-primary hover:underline"
            >
              FRLI
            </Link>
          </p>
          <p className="text-muted-foreground">
            A{" "}
            <Link
              href="https://rushstudio.co"
              className="text-primary hover:underline"
            >
              Rush Studio
            </Link>{" "}
            product
          </p>
        </div>

        <nav className="flex items-center gap-2 md:gap-4">
          <Button variant="link" asChild className="h-8 px-2">
            <Link
              href="/docs"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Docs
            </Link>
          </Button>
          <Button variant="link" asChild className="h-8 px-2">
            <Link
              href="/docs"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Components
            </Link>
          </Button>
          <Button variant="link" asChild className="h-8 px-2">
            <Link
              href="https://github.com/Rush-Studio/AugustUI"
              className="flex items-center text-muted-foreground hover:text-foreground"
            >
              <Github className="size-4" />
            </Link>
          </Button>
          <Button variant="link" asChild className="h-8 px-2">
            <Link
              href="https://x.com/augustui"
              className="flex items-center text-muted-foreground hover:text-foreground"
            >
              <Twitter className="size-4" />
            </Link>
          </Button>
        </nav>
      </div>
    </footer>
  );
}
