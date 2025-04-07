import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import ComponentsDemo from "@/components/CompnentsDemo";

export default function Home() {
  return (
    <div className="px-2 md:px-0">
      <Hero />
      <Showcase />
      <ComponentsDemo />
    </div>
  );
}
