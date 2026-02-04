"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const textVariants = cva("text-[var(--color-color-body-text)]", {
  variants: {
    size: {
      xs: "text-[length:var(--font-size-usage-caption)]",
      sm: "text-[length:var(--font-size-usage-parts-sm)]",
      base: "text-[length:var(--font-size-usage-default)]",
      lg: "text-[length:var(--font-size-usage-parts-md)]",
      xl: "text-[length:var(--font-size-usage-parts-lg)]",
      "2xl": "text-[length:var(--font-size-usage-title-sm)]",
    },
    lineHeight: {
      tight: "leading-[1.25]",
      normal: "leading-[1.4]",
      relaxed: "leading-[1.5]",
      loose: "leading-[1.6]",
    },
  },
  defaultVariants: {
    size: "base",
    lineHeight: "normal",
  },
})

function Text({
  className,
  size,
  lineHeight,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "p"

  return (
    <Comp
      data-slot="text"
      className={cn(textVariants({ size, lineHeight }), className)}
      {...props}
    />
  )
}

export { Text, textVariants }

