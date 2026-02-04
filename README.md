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
- `npm run sync:ds`: AリポからBリポへ一括同期
- `npm run sync:ds:file -- <path>`: A→B 単体ファイル同期
- `npm run check:deps`: A/B の依存差分を確認

## Design System

このスターターはAリポの実装を取り込み、Bリポ内に実体とCSS正本を持ちます。

### Aリポからの同期
同期対象は `fabrica-product-starter/sync-list.json` で管理します。

```bash
# 一括同期
npm run sync:ds

# ファイル単体同期例
npm run sync:ds:file -- src/components/ui/button.tsx
```

```bash
# 依存差分チェック
npm run check:deps
```

