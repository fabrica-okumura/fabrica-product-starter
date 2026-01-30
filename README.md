# Fabrica Product Starter

プロダクト新規作成用のスターターです。
Next.jsベースで、`@fabrica/design-system` の利用を前提に構成しています。

## 必要バージョン
- Node.js v22 以上
- npm

## Setup

```bash
npm install
npm run dev
```

## Storybook

```bash
npm run storybook
```

## Design System

このスターターは `@fabrica/design-system` を利用します。

### ローカルでデザインシステムを更新する場合
本体リポジトリ側で tarball を作り直して再インストールします。

```bash
cd ../fabrica-design-system
npm pack
cd ../fabrica-product-starter
npm install ../fabrica-design-system/fabrica-design-system-<version>.tgz
```

### Private Registry を使う場合

`.npmrc.example` を `.npmrc` にコピーして、`NPM_TOKEN` を設定してください。
`.npmrc` はGit管理しません。
