"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { Label } from "./label"
import { cn } from "../../lib/utils"

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
  label?: React.ReactNode
  labelProps?: Omit<React.ComponentProps<typeof Label>, "htmlFor" | "children">
  labelPosition?: "start" | "end"
}

function Switch({
  className,
  id: idProp,
  label,
  labelProps,
  labelPosition = "start",
  ...props
}: SwitchProps) {
  const autoId = React.useId()
  const id = idProp ?? (label ? autoId : undefined)

  const switchElement = (
    <SwitchPrimitive.Root
      data-slot="switch"
      id={id}
      className={cn(
        "peer inline-flex h-[20px] w-[36px] shrink-0 items-center rounded-full border-0 transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--usage-active-border) disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-(--usage-button-primary) data-[state=unchecked]:bg-(--primitive-neutral-400)",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-white pointer-events-none block size-[20px] rounded-full ring-0 transition-transform",
          "data-[state=checked]:translate-x-[16px] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )

  if (!label) {
    return switchElement
  }

  return (
    <div
      className={cn(
        "flex items-center cursor-pointer gap-(--parts-gap-column-sm)",
        labelPosition === "start" && "flex-row-reverse"
      )}
    >
      {switchElement}
      <Label htmlFor={id} {...labelProps} className="cursor-pointer">
        {label}
      </Label>
    </div>
  )
}

export { Switch }
