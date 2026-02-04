import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Switch } from "./switch"

type SwitchProps = React.ComponentProps<typeof Switch>

const meta = {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    labelPosition: {
      control: "select",
      options: ["start", "end"],
    },
  },
} satisfies Meta<SwitchProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "通知を受け取る",
    labelPosition: "start",
  },
}

export const Checked: Story = {
  args: {
    label: "通知を受け取る",
    labelPosition: "start",
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: "通知を受け取る",
    labelPosition: "start",
    disabled: true,
  },
}
