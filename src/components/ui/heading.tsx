"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const headingVariants = cva("font-bold", {
  variants: {
    variant: {
      // page_title: "text-[length:var(--font-size-usage-pagetitle)] leading-[1.25]",
      page_title: "text-[length:var(--text-5xl)] leading-[1.25]",
      h1: "text-[length:var(--text-4xl)] leading-[1.25]",
      h2: "text-[length:var(--text-3xl)] leading-[1.3]",
      h3: "text-[length:var(--text-2xl)] leading-[1.35]",
      h4: "text-[length:var(--text-xl)] leading-[1.4]",
      h5: "text-[length:var(--text-base)] leading-[1.45]",
      h6: "text-[length:var(--text-xs)] leading-[1.5] uppercase tracking-wide",
    },
  },
  defaultVariants: {
    variant: "h2",
  },
})

interface HeadingProps
  extends React.ComponentProps<"h2">,
    VariantProps<typeof headingVariants> {
  asChild?: boolean
}

function Heading({
  className,
  variant = "h2",
  asChild = false,
  ...props
}: HeadingProps) {
  const Comp = asChild ? Slot : "h2"

  return (
    <Comp
      data-slot="heading"
      className={cn(headingVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Heading, headingVariants }

