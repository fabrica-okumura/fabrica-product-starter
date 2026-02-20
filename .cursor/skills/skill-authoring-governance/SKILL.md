---
name: skill-authoring-governance
description: 人向けREADME方針とAI向け実行ルールを混在させずにSkillを作成・保守する。SKILL.mdの新規作成・改訂時に使う。
---

# Skill作成ガバナンス

## 目的
方針と実行ルールを分離し、README・AGENTS・Skills 間の矛盾を防ぐ。

## 必須の分離ルール
1. 人向け方針は `README.md` に書く（範囲、責務、運用モデル）。
2. AI共通ルールは `AGENTS.md` に書く（全タスク共通の前提）。
3. AI向け実行ルールは `.cursor/skills/**/SKILL.md` に書く（判断手順、ガードレール、確認）。
4. README・AGENTS・Skills は補完関係にし、重複記載を避ける。

## 命名ルール
- 小文字の kebab-case を使う。
- リポジトリ接頭辞は使わない。
- ワークフローに紐づく具体名を使う。

## ガードレール
- 1 Skill 1主要ワークフローを守る。
- description には「何をするか」と「いつ使うか」を明記する。
