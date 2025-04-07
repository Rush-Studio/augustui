import { Navbar } from "@/components/Navbar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="main-content">{children}</main>
    </>
  );
}
