# Fabrica Product Starter

プロダクト新規作成用のスターターです。
Next.jsベースで、`@fabrica_communications/design-system` の利用を前提に構成しています。

## 利用対象
- **通常の開発者**: このスターターリポジトリのみを使って開発します。
- **デザインシステム担当**: `@fabrica_communications/design-system` を更新・配布し、必要に応じてスターターへ反映します。

## 必要バージョン
- Node.js v22 以上
- npm

## 初期セットアップ

```bash
npm install
npm run dev
```

## よく使うスクリプト
- `npm run dev`: Next.js 開発サーバーを起動
- `npm run build`: 本番ビルドを作成
- `npm run lint`: Lint チェック

## Design System

このスターターは `@fabrica_communications/design-system` を利用します。

### デザインシステムを更新する場合（npm）
`package.json` の `@fabrica_communications/design-system` のバージョンを更新し、再インストールします。

```bash
npm install
```

必要に応じて、`package.json` のバージョンを指定してください。

### npmjs を使う場合

npmjs を利用する場合は `npm login` を一度実行してください。
