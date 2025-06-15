## Requirements

- Bun
- Node.js

```shell
mise install
bun install
```

## Run locally

```shell
bun run dev
```

### Run with Mock server

```shell
bun run dev:mock
```

# kojiro-mahjong-app

麻雀リーグ管理アプリケーション

## Architecture

このプロジェクトは **Clean Architecture** と **DDD（ドメイン駆動設計）** の思想に基づいて設計されています。

### Directory Structure

```
src/
├── domain/                    # ドメイン層
│   ├── league.ts             # リーグエンティティ
│   ├── match.ts              # マッチエンティティ
│   └── validation/           # ビジネスルール・バリデーション
│       └── league-form.ts
├── usecases/                  # ユースケース層（アプリケーション層）
│   └── leagues/
│       └── useLeagues.tsx    # リーグ取得ユースケース
├── infra/                     # インフラ層
│   ├── api/
│   │   └── client.ts         # API通信クライアント
│   ├── swr/
│   │   └── config.ts         # SWR設定
│   └── providers/
│       └── MSWProvider.tsx   # モックサーバー設定
├── components/                # プレゼンテーション層（UI層）
│   ├── blocks/               # 再利用可能UIコンポーネント
│   ├── screens/              # 画面コンポーネント
│   └── ui/                   # 基本UIコンポーネント
└── mocks/                     # テスト・開発用モック
    └── league/
```

### 層の責務と依存関係

```
┌─────────────────────────────────────┐
│          Presentation Layer         │  ← UIの表示・ユーザー操作
│         (components/)               │
└─────────────────────────────────────┘
                    │
                    │ 依存
                    ↓
┌─────────────────────────────────────┐
│          Use Case Layer             │  ← アプリケーション固有のロジック
│         (usecases/)                 │     SWR hooks, 状態管理
└─────────────────────────────────────┘
                    │
                    │ 依存
                    ↓
┌─────────────────────────────────────┐
│          Domain Layer               │  ← ビジネス ルール・エンティティ
│         (domain/)                   │     型定義、バリデーション
└─────────────────────────────────────┘
                    ↑
                    │ 実装
                    │
┌─────────────────────────────────────┐
│        Infrastructure Layer         │  ← 外部システムとの通信
│         (infra/)                    │     API, DB, 外部サービス
└─────────────────────────────────────┘
```

### 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **State Management**: SWR (Redux Toolkitから移行)
- **UI Library**: Chakra UI v3
- **Styling**: Panda CSS
- **Validation**: Zod
- **Forms**: React Hook Form
- **Testing**: MSW (Mock Service Worker)
- **Runtime**: Bun
- **Code Quality**: Biome, Lefthook

### 設計判断の理由

1. **SWR採用**:

   - Redux Toolkitよりも軽量（4KB vs 13KB）
   - キャッシュ管理が自動化
   - 小規模プロジェクトに最適

2. **Clean Architecture**:

   - 依存関係の方向が一方向
   - テストしやすい構造
   - 外部ライブラリ変更時の影響を最小化

3. **DDD (Domain-Driven Design)**:
   - ビジネスルールをドメイン層に集約
   - 技術的関心事とビジネス関心事を分離
