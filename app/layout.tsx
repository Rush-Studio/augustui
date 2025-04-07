import "./globals.css";
import type { Metadata, Viewport } from "next";
import { absoluteUrl, cn, constructMetadata } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Provider as JotaiProvider } from "jotai";
import MixpanelProvider from "./mixpanel-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { inter } from "@/lib/fonts";
import { AnnouncementBar } from "@/components/AnnouncementBar";

export const metadata: Metadata = constructMetadata({
  title: "AugustUI - Modern UI Components",
  description:
    "Discover August UI, a modern component library built with React, Tailwind CSS, and (Framer) Motion. Create responsive, customizable, and elegant web apps effortlessly.",
  image: absoluteUrl("/og"),
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "relative flex w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background antialiased selection:bg-red-500 selection:text-white",
        )}
      >
        <MixpanelProvider>
          <JotaiProvider>
            <ThemeProvider attribute="class" defaultTheme="system">
              <TooltipProvider>
                <AnnouncementBar />
                {children}
                {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
                  <GoogleAnalytics
                    gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
                  />
                )}
              </TooltipProvider>
            </ThemeProvider>
          </JotaiProvider>
        </MixpanelProvider>
      </body>
    </html>
  );
}
