import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "danger";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset transition-colors",
        {
          "bg-primary/10 text-primary ring-primary/20": variant === "default",
          "bg-secondary/10 text-secondary ring-secondary/20": variant === "secondary",
          "bg-green-500/10 text-green-600 ring-green-500/20": variant === "success",
          "bg-yellow-500/10 text-yellow-600 ring-yellow-500/20": variant === "warning",
          "bg-red-500/10 text-red-600 ring-red-500/20": variant === "danger",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
