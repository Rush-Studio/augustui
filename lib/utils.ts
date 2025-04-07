import { env } from "@/env.mjs";
import clsx, { ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function humanize(name: string): string {
  return name
    .replace(/-/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
}

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase(),
  );

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function constructMetadata({
  title = "AugustUI - Modern UI Components",
  description = "Discover August UI, a modern component library built with React, Tailwind CSS, and (Framer) Motion. Create responsive, customizable, and elegant web apps effortlessly.",
  image = absoluteUrl("/og"),
  ...props
}: {
  title?: string;
  description?: string;
  image?: string;
  [key: string]: Metadata[keyof Metadata];
}): Metadata {
  return {
    title,
    description,
    keywords: [
      "React",
      "Tailwind CSS",
      "Motion",
      "Landing Page",
      "Components",
      "Next.js",
      "React component library",
      "Tailwind CSS components",
      "modern UI components",
      "customizable UI library",
      "Motion UI animations",
      "responsive web design",
      "React UI kit",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@goyalsamarth",
    },
    icons: {
      icon: "/favicon/favicon.ico",
      shortcut: "/favicon/favicon.ico",
      apple: "/favicon/apple-touch-icon.png",
      other: [
        {
          rel: "mask-icon",
          url: "/favicon/favicon.svg",
          color: "#E84E36",
        },
      ],
    },
    metadataBase: new URL("https://augustui.com"),
    authors: [
      {
        name: "goyalsamarth",
        url: "https://twitter.com/goyalsamarth",
      },
    ],
    creator: "goyalsamarth",
    ...props,
  };
}
