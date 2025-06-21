import type { Meta, StoryObj } from "@storybook/react";
import { RecordedMatchCard } from "./RecordedMatchCard";

const meta: Meta<typeof RecordedMatchCard> = {
  title: "Components/Match/RecordedMatchCard",
  component: RecordedMatchCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "記録済み試合の情報を表示するカードコンポーネント。プレイヤーの得点、順位、座席位置を表示します。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    displayName: {
      description: "試合の表示名",
      control: "text",
    },
    players: {
      description: "プレイヤー情報の配列",
    },
    onClick: {
      description: "カードクリック時のコールバック関数",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトストーリー
export const Default: Story = {
  args: {
    displayName: "初期卓A",
    players: [
      {
        name: "りゅうと",
        seat: 0, // 東家
        rank: 1,
        point: 70.4,
      },
      {
        name: "なるみ",
        seat: 1, // 南家
        rank: 3,
        point: 16.8,
      },
      {
        name: "りゅうじろう",
        seat: 2, // 西家
        rank: 2,
        point: 52.4,
      },
      {
        name: "あきひろ",
        seat: 3, // 北家
        rank: 4,
        point: 0.4,
      },
    ],
  },
};

// 高得点の試合
export const HighScoreMatch: Story = {
  args: {
    displayName: "初期卓B",
    players: [
      {
        name: "プレイヤー1",
        seat: 0,
        rank: 1,
        point: 120.5,
      },
      {
        name: "プレイヤー2",
        seat: 1,
        rank: 2,
        point: 80.2,
      },
      {
        name: "プレイヤー3",
        seat: 2,
        rank: 3,
        point: -50.3,
      },
      {
        name: "プレイヤー4",
        seat: 3,
        rank: 4,
        point: -150.4,
      },
    ],
  },
};

// マイナス点が多い試合
export const LowScoreMatch: Story = {
  args: {
    displayName: "荒れ卓",
    players: [
      {
        name: "ツモ太郎",
        seat: 0,
        rank: 1,
        point: 45.2,
      },
      {
        name: "リーチ花子",
        seat: 1,
        rank: 2,
        point: 10.8,
      },
      {
        name: "ドラ次郎",
        seat: 2,
        rank: 3,
        point: -25.6,
      },
      {
        name: "フリテン三郎",
        seat: 3,
        rank: 4,
        point: -30.4,
      },
    ],
  },
};

// クリックイベント付き
export const WithClickHandler: Story = {
  args: {
    ...Default.args,
    onClick: () => alert("詳細画面へ遷移します"),
  },
};
