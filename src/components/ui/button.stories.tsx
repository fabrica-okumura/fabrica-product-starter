import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "./button"
import { Icon as UiIcon } from "./icon"

type ButtonProps = React.ComponentProps<typeof Button>

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "accent", "neutral", "destructive"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "icon", "icon-sm"],
    },
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "default",
    size: "default",
  },
}

export const Accent: Story = {
  args: {
    children: "Accent",
    variant: "accent",
    size: "default",
  },
}

export const Neutral: Story = {
  args: {
    children: "Neutral",
    variant: "neutral",
    size: "default",
  },
}

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
    size: "default",
  },
}

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
}

export const Icon: Story = {
  args: {
    "aria-label": "Search",
    size: "icon",
    children: <UiIcon name="search" />,
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
}

export const Focusable: Story = {
  args: {
    children: "Focusable",
    variant: "neutral",
  },
}
