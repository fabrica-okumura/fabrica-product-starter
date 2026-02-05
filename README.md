# Fabrica Product Starter

プロダクト新規作成用のスターターです。
Next.jsベースで、Bリポ内にコンポーネント実体とCSS正本を持ちつつ、
Aリポ（`fabrica-design-system`）から同期して運用します。

## 必要バージョン
- Node.js v22 以上
- npm

## 初期セットアップ

```bash
npm install
npm run dev
```

もし `npm install` で依存関係の解決に失敗する場合は、  
デザインシステム担当に同期元の状態を確認してください。
## よく使うスクリプト
- `npm run dev`: 開発サーバーを起動
- `npm run storybook`: Storybook を起動
- `npm run sync:ds`: AリポからBリポへ一括同期（新規プロダクト作成時にのみ実施する）
- `npm run sync:ds:file -- <path>`: A→B 単体ファイル同期
- `npm run check:deps`: Aリポ/Bリポ の依存差分を確認（必要に応じてインストールする）

## Design System

このスターターはAリポの実装を取り込み、Bリポ内に実体とCSS正本を持ちます。

### Aリポからの同期
同期対象は `fabrica-product-starter/sync-list.json` で管理します。

```bash
# 一括同期
npm run sync:ds

# ファイル単体同期コマンド例
npm run sync:ds:file -- src/components/ui/button.tsx
```

```bash
# 依存差分チェック
npm run check:deps
```

## MCP（fabrica-design-system）

Cursor 上でデザインシステム（Aリポ）の MCP サーバーを使うと、AI がコンポーネント仕様やドキュメントを参照しやすくなります。

### 前提

- Aリポ（`fabrica-design-system`）が、このリポのひとつ上層で同じ階層にクローンされていること  
  （例: `../fabrica-design-system`）
- fabrica-design-system の MCP サーバーをビルド済みであること（未実施の場合は `../fabrica-design-system/mcp-server` で `npm install` のあと `npm run build` を実行）

### 設定

- **`.cursor/mcp.json`** に `fabrica-design-system` 用の MCP 設定が含まれています。
- このリポの **`package.json`** の `mcp` スクリプトが、Aリポの `mcp-server` を起動するようになっています。

Cursor の MCP 一覧に「fabrica-design-system」が表示され、接続エラーがなければ設定は有効です。

### 使い方

1. Cursor の MCP 設定で「fabrica-design-system」が有効になっていることを確認する。
2. チャットやエージェントで、デザインシステムのコンポーネント名や仕様を質問したり、実装例を求めたりする。
3. MCP が提供するツールやリソースを通じて、AI が Aリポの情報を参照して回答する。

MCP の接続に失敗する場合は、上記「前提」を満たしているか、`npm run mcp` がこのリポのルートで正常に実行できるかを確認してください。

