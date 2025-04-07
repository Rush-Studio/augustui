import { Button } from "@/components/ui/button";
import { Github, Star } from "lucide-react";
import Link from "next/link";

export default async function GithubButton() {
  let stars = 0;

  try {
    const response = await fetch(
      "https://api.github.com/repos/Rush-Studio/augustui",
      {
        headers: process.env.GITHUB_OAUTH_TOKEN
          ? {
              Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
              "Content-Type": "application/json",
            }
          : {},
        next: {
          revalidate: 3600,
        },
      },
    );

    if (response.ok) {
      const data = await response.json();
      stars = data.stargazers_count || stars;
    }
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
  }

  return (
    <Button
      asChild
      className="flex w-fit hover:shadow-md sm:flex md:hidden lg:flex"
    >
      <Link
        href="https://github.com/Rush-Studio/augustui"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <Github className="relative z-10 size-4" />
        <span className="relative z-10 border-r border-background/80 pr-2">
          Star on Github
        </span>
        <div className="relative z-10 flex items-center">
          <Star className="size-3.5 fill-current text-yellow-400" />
          <span className="ml-1">{stars}</span>
        </div>
      </Link>
    </Button>
  );
}
