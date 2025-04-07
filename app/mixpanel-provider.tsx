"use client";
import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initMixpanel } from "../lib/mixpanelClient";
import { trackEvent } from "../lib/events";

function MixpanelPageview({ isInitialized }: { isInitialized: boolean }): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only track pageview if Mixpanel is initialized
    if (pathname && isInitialized) {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      trackEvent({ name: "pageview", properties: { url } });
    }
  }, [pathname, searchParams, isInitialized]);

  return null;
}

export default function MixpanelProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initMixpanel();
    setIsInitialized(true);
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <MixpanelPageview isInitialized={isInitialized} />
      </Suspense>
      {children}
    </>
  );
}
