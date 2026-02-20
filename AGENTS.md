# AGENTS.md

このファイルは、`fabrica-product-starter` で AI が常に守る共通ルールです。

## ルールの役割分担

- `README.md`: 人向けの方針（編集範囲、同期運用、障害時の対処）
- `AGENTS.md`: AI共通ルール（全タスク共通で守る前提）
- `.cursor/skills/**/SKILL.md`: AIの具体手順（トリガー、手順、ガードレール）

同じ内容を重複記載せず、README/AGENTS/Skills を補完関係で運用します。

## 共通ルール

1. Bリポは Aリポの再利用資産を同期して利用する前提で運用する。
2. `sync-list.json` の同期対象を、Bリポ専用の安定編集先として扱わない。
3. Bリポ専用カスタマイズは、同期上書きされない領域へ配置する。
4. 実行手順や判断が必要な場合は、該当 Skill を優先して適用する。
5. 人向け方針を追加・更新する場合は README、AI実行ルールは Skills に記載する。

## 主なSkills

- `consumption-rules`
- `sync-conflict-handling`
- `skill-authoring-governance`
