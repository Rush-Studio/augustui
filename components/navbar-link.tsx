"use client";

import { trackEvent } from "@/lib/events";
import { Button } from "./ui/button";
import Link from "next/link";

export default function NavbarLink({
  href,
  title,
  event,
}: {
  href?: string;
  title: string;
  event?: string;
}) {
  return (
    <Button
      variant="link"
      asChild
      key={href}
      onClick={() =>
        event &&
        trackEvent({ name: "header_nav_click", properties: { item: event } })
      }
    >
      <Link
        href={href || ""}
        className="text-[15px] text-primary/80 transition-colors hover:text-primary"
      >
        {title}
      </Link>
    </Button>
  );
}
