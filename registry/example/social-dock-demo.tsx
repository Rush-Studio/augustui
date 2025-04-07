import Discord from "@/components/icons/Discord";
import Twitter from "@/components/icons/Twitter";
import SocialDock from "../augustui/social-dock";
import { Linkedin, Github } from "lucide-react";

export default function SocialDockDemo() {
  return (
    <SocialDock
      items={[
        {
          link: "https://github.com/Rush-Studio",
          target: "_blank",
          Icon: <Github size={22} />,
        },
        {
          link: "https://x.com/Rush_Studio",
          target: "_blank",
          Icon: <Twitter className="size-5" />,
        },
        {
          link: "https://dsc.gg/rushstudio",
          target: "_blank",
          Icon: <Discord className="size-6" />,
        },
        {
          link: "https://linkedin.com/in/rush-studio",
          target: "_blank",
          Icon: <Linkedin className="size-5" />,
        },
      ]}
    />
  );
}
