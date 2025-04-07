import CascadeCards from "@/registry/augustui/cascade-cards";
import { Sparkles } from "lucide-react";

const cards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Featured",
    description: "Discover amazing content",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Popular",
    description: "Trending this week",
    date: "2 days ago",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
  },
];

export default function CascadeCardsDemo() {
  return (
    <div className="mr-72 mt-auto">
      <CascadeCards cards={cards} hoverEffect="top" />
    </div>
  );
}
