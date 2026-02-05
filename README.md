# Fabrica Product Starter

プロダクト新規作成用のスターターです。fabrica-design-system から必要なファイルなどを同期して運用します。

## 用語（前提）

本ドキュメントでは **Aリポ＝fabrica-design-system**、**Bリポ＝fabrica-product-starter**（本リポ）とします。以下、Aリポ・Bリポで表記します。  
Aリポと Bリポは **同階層にクローン（ダウンロード）して作業する** ことを想定しています（例: 親フォルダの下に `fabrica-design-system` と `fabrica-product-starter` を並べます）。

設計・技術スタック・docsサイト構成・配布方針などの詳細は、**Aリポの README** を参照してください。

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

## リポジトリ構成（Bリポ）

```
.
├── .storybook/           # Storybook（Bリポ用）
├── src/
│   ├── app/              # layout.tsx 等は Aリポから同期可能
│   ├── components/ui/    # Aリポと同じ階層（同期対象）
│   ├── components/shared/
│   ├── lib/
│   ├── styles/           # Aリポから同期
│   └── tokens/           # Aリポから同期
├── public/               # Bリポ専用（Aリポとは同期しない）
├── sync-list.json        # A→B 同期対象一覧
├── sync-from-ds.mjs      # 同期スクリプト
└── package.json
```

## Design System

Bリポは Aリポの実装を取り込み、Bリポ内に実体とCSS正本を持ちます。

### Aリポからの同期
同期対象は Bリポの `sync-list.json` で管理します。

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

## MCP（Aリポのデザインシステム）

Cursor 上で Aリポの MCP サーバーを使うと、AI がコンポーネント仕様やドキュメントを参照しやすくなります。

### 前提

- Aリポが、Bリポのひとつ上層で同じ階層にクローンされていること（例: `../fabrica-design-system`）
- Aリポの MCP サーバーをビルド済みであること（未実施の場合は `../fabrica-design-system/mcp-server` で `npm install` のあと `npm run build` を実行）

### 設定

- **`.cursor/mcp.json`** に Aリポ用の MCP 設定が含まれています。
- Bリポの **`package.json`** の `mcp` スクリプトが、Aリポの `mcp-server` を起動するようになっています。

Cursor の MCP 一覧に「fabrica-design-system」が表示され、接続エラーがなければ設定は有効です。

### 使い方

1. Cursor の MCP 設定で「fabrica-design-system」が有効になっていることを確認してください。
2. チャットやエージェントで、デザインシステムのコンポーネント名や仕様を質問したり、実装例を求めたりしてください。
3. MCP が提供するツールやリソースを通じて、AI が Aリポの情報を参照して回答します。

MCP の接続に失敗する場合は、上記「前提」を満たしているか、`npm run mcp` が Bリポのルートで正常に実行できるかを確認してください。

