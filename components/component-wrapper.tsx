"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";
import React from "react";
import { OpenInV0Button } from "./open-in-v0-button";

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export const ComponentWrapper = ({
  className,
  children,
  name,
}: ComponentWrapperProps) => {
  const [key, setKey] = React.useState(0);

  return (
    <div
      className={cn(
        "max-w-screen relative rounded-xl border border-border bg-background",
        className,
      )}
      key={key}
    >
      {/* <div
        className={cn(
          `absolute inset-0 size-full`,
          `bg-[radial-gradient(#00000022_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]`,
          "lab-bg pointer-events-none [background-size:16px_16px]",
        )}
      /> */}
      <div className="absolute right-2 top-2 z-10 flex items-center justify-end gap-2">
        <OpenInV0Button url={`https://augustui.com/r/${name}.json`} />
        <Button
          onClick={() => setKey((prev) => prev + 1)}
          variant="secondary"
          size="icon"
        >
          <RotateCcw aria-label="restart-btn" size={16} />
        </Button>
      </div>
      <div className="flex min-h-[350px] w-full items-center justify-center overflow-hidden rounded-xl">
        {children}
      </div>
    </div>
  );
};
