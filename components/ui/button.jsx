import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-500 shrink-0 outline-none cursor-pointer focus-visible:outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive disabled:pointer-events-none disabled:opacity-50 dark:aria-invalid:ring-destructive/40  [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border text-accent bg-primary shadow-xs hover:bg-accent hover:text-background dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        icon: "border border-accent text-accent bg-primary shadow-xs hover:bg-accent hover:text-background",
        noBorder: "hover:text-accent",
      },
      size: {
        default: "h-9 px-3",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        noBorder: "h-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
