import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--usage-active-border)]",
  {
    variants: {
      variant: {
        default: "bg-[var(--usage-button-primary)] text-white hover:bg-[var(--usage-button-primary-hover)] disabled:bg-[var(--usage-button-disabled)] font-bold text-[length:var(--font-size-usage-parts-md)] leading-none",
        accent: "bg-[var(--usage-button-accent)] text-white hover:bg-[var(--usage-button-accent-hover)] disabled:bg-[var(--usage-button-disabled)] font-bold text-[length:var(--font-size-usage-parts-md)] leading-none",
        neutral: "bg-white border border-[var(--primitive-neutral-500)] text-[var(--body-text)] hover:bg-[var(--primitive-neutral-200)] disabled:bg-[var(--usage-button-disabled)] disabled:text-white disabled:border-[var(--usage-button-disabled)] font-normal text-[length:var(--font-size-usage-parts-md)] leading-none",
        destructive:
          "bg-[var(--usage-button-destructive)] text-white hover:bg-[var(--usage-button-destructive-hover)] disabled:bg-[var(--usage-button-disabled)] font-bold text-[length:var(--font-size-usage-parts-md)] leading-none",
      },
      size: {
        default: "px-[var(--primitive-spacing-spacing-24)] py-[var(--primitive-spacing-spacing-8)] rounded-[var(--usage-button-m)] gap-[var(--parts-gap-column-sm)] [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0",
        sm: "px-[var(--primitive-spacing-spacing-8)] py-[var(--primitive-spacing-spacing-4)] rounded-[var(--usage-button-s)] gap-[var(--parts-gap-column-xs)] text-[length:var(--font-size-usage-parts-sm)] [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
        icon: "size-9",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
