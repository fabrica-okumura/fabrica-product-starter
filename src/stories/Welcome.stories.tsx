import type { Meta, StoryObj } from "@storybook/nextjs";

/**
 * B リポ用のプレースホルダーです。ストーリーファイルは A リポで管理しており、B では不要なため同期していません。
 * B 専用コンポーネントのストーリーが必要になったら、このフォルダまたは src/components 配下の *.stories.tsx に追加してください。
 */
const meta: Meta = {
  title: "B リポ / Welcome",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const NoStoriesSynced: StoryObj = {
  render: () => (
    <div style={{ padding: "2rem", maxWidth: "40rem", lineHeight: 1.7 }}>
      <h1 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
        Storybook（B リポ）
      </h1>
      <p>
        UI コンポーネントのストーリーは A リポ（fabrica-design-system）で管理しており、B には同期していません。
      </p>
      <p>
        B 専用コンポーネントのストーリーを追加する場合は、
        <code style={{ background: "#eee", padding: "0.2em 0.4em" }}>
          {"src/components/**/*.stories.tsx"}
        </code>{" "}
        または{" "}
        <code style={{ background: "#eee", padding: "0.2em 0.4em" }}>
          src/stories/
        </code>{" "}
        にファイルを追加してください。
      </p>
    </div>
  ),
};
