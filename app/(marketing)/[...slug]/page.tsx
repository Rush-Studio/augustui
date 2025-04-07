import NotFound from "@/app/not-found";

export default function MarketingPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  return <NotFound />;
}
