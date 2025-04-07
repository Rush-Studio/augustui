import { allShowcases } from "content-collections";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShowcaseCard } from "@/components/ShowcaseCard";
import { absoluteUrl, cn } from "@/lib/utils";
import { josefinSans } from "@/lib/fonts";
import { BackBreadcrumb } from "@/components/back-breadcrump";
interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPageFromParams({ params }: PageProps) {
  const slug = (await params).slug?.join("/") || "index";
  const page = allShowcases.find((page) => page.slugAsParams === slug);

  if (!page) {
    return null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams({ params });

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | AugustUI`,
    description: page.affiliation,
    openGraph: {
      title: page.title,
      description: page.affiliation,
      type: "article",
      url: absoluteUrl(page.slug),
      images: [
        {
          url: page.image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.affiliation,
      images: [page.image],
      creator: "@goyalsamarth",
    },
  };
}

export async function generateStaticParams() {
  return allShowcases.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams({ params });

  if (!page) {
    notFound();
  }

  return (
    <article className="container mx-auto flex min-h-[calc(100vh-178px)] max-w-2xl flex-col items-center gap-8 pb-14 pt-8">
      <BackBreadcrumb className=" self-start" />
      <div className="flex flex-col items-center">
        <h2
          className={cn(
            `${josefinSans.className} text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground`,
          )}
        >
          {page.title}
        </h2>
        <p className="text-muted-foreground">{page.affiliation}</p>
        <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
          {page.title} uses AugustUI to build their landing page.
        </h3>
        <ShowcaseCard
          title={page.title}
          href={page.href}
          image={page.image}
          affiliation={page.affiliation}
          mainShowcase={true}
        />
      </div>
    </article>
  );
}
