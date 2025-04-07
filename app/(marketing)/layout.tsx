import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="main-content flex-1 px-2 sm:px-0">{children}</main>
      <Footer />
    </>
  );
}
