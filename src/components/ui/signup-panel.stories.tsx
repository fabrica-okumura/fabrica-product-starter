import type { Meta, StoryObj } from "@storybook/nextjs";

import { SignupPanel } from "./signup-panel";

const meta = {
  title: "Product/SignupPanel",
  component: SignupPanel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Bリポ専用の登録フォーム例。入力欄とアクションの配置を確認できます。",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SignupPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
