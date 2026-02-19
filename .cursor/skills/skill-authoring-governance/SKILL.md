---
name: skill-authoring-governance
description: 人向けREADME方針とAI向け実行ルールを混在させずにSkillを作成・保守する。SKILL.mdの新規作成・改訂時に使う。
---

# Skill作成ガバナンス

## 目的
方針と実行ルールを分離し、運用の矛盾を防ぐ。

## 必須の分離ルール
1. 人向け方針は `README.md` に書く（範囲、責務、運用モデル）。
2. AI向け実行ルールは `.cursor/skills/**/SKILL.md` に書く（判断手順、ガードレール、確認）。
3. README と Skills は補完関係にし、重複記載を避ける。

## 命名ルール
- 小文字の kebab-case を使う。
- リポジトリ接頭辞は使わない。
- ワークフローに紐づく具体名を使う。

## ガードレール
- 1 Skill 1主要ワークフローを守る。
- description には「何をするか」と「いつ使うか」を明記する。
