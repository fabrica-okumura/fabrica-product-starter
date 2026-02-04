import * as React from "react"

import { cn } from "../../lib/utils"

const SectionContainer = React.forwardRef<HTMLElement, React.ComponentProps<"section">>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        data-slot="section-container"
        className={cn(
          "rounded-xl border border-(--usage-section-border) bg-white p-5",
          className
        )}
        {...props}
      />
    )
  },
)

SectionContainer.displayName = "SectionContainer"

export { SectionContainer }

