"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const GridBackground = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-0 h-full w-full bg-background",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-b from-background to-transparent" />
      <MovingGrid />
    </div>
  );
};

const MovingGrid = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 z-0 h-full w-full animate-[fade-in_2s_ease-in-out]",
          "[--grid-color:theme(colors.gray.100)] dark:[--grid-color:theme(colors.gray.900)]",
          "[background-image:linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)]",
          "bg-[size:20px_20px]",
        )}
      ></div>
      <div className="absolute inset-0 z-0 h-full w-full animate-[fade-in_2s_ease-in-out_1s]">
        <div
          className={cn(
            "h-full w-full animate-[move-horizontal_40s_linear_infinite]",
            "[--grid-color:theme(colors.purple.500/10%)] dark:[--grid-color:theme(colors.purple.500/20%)]",
            "[background-image:linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)]",
            "bg-[size:100px_100px]",
          )}
        />
      </div>
      <div className="absolute inset-0 z-0 h-full w-full animate-[fade-in_2s_ease-in-out_2s]">
        <div
          className={cn(
            "h-full w-full animate-[move-vertical_50s_linear_infinite]",
            "[--grid-color:theme(colors.indigo.500/10%)] dark:[--grid-color:theme(colors.indigo.500/20%)]",
            "[background-image:linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)]",
            "bg-[size:80px_80px]",
          )}
        />
      </div>
    </div>
  );
};

