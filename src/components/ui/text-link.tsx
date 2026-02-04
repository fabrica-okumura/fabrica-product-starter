"use client"

import * as React from "react"
import NextLink from "next/link"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

import { Icon, type IconName } from "./icon"

const linkVariants = cva(
  "inline-flex items-center gap-[var(--primitive-spacing-spacing-4)] text-[var(--text-link)] font-medium transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--usage-active-border)]",
  {
    variants: {
      border: {
        none: "",
        underline:
          "border-b border-[var(--text-link)] pb-[calc(var(--primitive-spacing-spacing-2)/2)]",
      },
    },
    defaultVariants: {
      border: "none",
    },
  },
)

type TextLinkVariants = VariantProps<typeof linkVariants>

type LinkBaseProps = React.ComponentPropsWithoutRef<typeof NextLink>

type LinkProps = LinkBaseProps &
  TextLinkVariants & {
    icon?: IconName
    iconPosition?: "left" | "right"
  }

const TextLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      border,
      icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref,
  ) => {
    const iconElement = icon ? (
      <Icon
        name={icon}
        aria-hidden="true"
        width="1em"
        height="1em"
        className="shrink-0"
      />
    ) : null

    return (
      <NextLink ref={ref} className={cn(linkVariants({ border }), className)} {...props}>
        {iconElement && iconPosition === "left" && iconElement}
        <span className="inline-flex items-center">{children}</span>
        {iconElement && iconPosition === "right" && iconElement}
      </NextLink>
    )
  },
)

TextLink.displayName = "TextLink"

export { TextLink, linkVariants }

