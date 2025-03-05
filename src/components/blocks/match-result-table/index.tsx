"use client";
import {
  NumberInputField,
  NumberInputRoot,
} from "@/components/ui/number-input";
import { Table } from "@chakra-ui/react";
import { useState } from "react";

//仮に設定
const initialItems = [
  { id: 1, position: "東", player: "りゅうと", score: 250, point: 0 },
  {
    id: 2,
    position: "南",
    player: "なるみ",
    score: 250,
    point: 0,
  },
  {
    id: 3,
    position: "西",
    player: "りゅうじろう",
    score: 250,
    point: 0,
  },
  { id: 4, position: "北", player: "あきひろ", score: 250, point: 0 },
];

//点数入力
const ScoreInput = ({
  value,
  onChange,
}: { value: number; onChange: (value: number) => void }) => {
  return (
    <NumberInputRoot maxW="100px">
      <NumberInputField
        value={Number.isNaN(value) ? 0 : value} // NaN の場合0
        onChange={(e) => {
          const newValue = Number(e.target.value);
          onChange(Number.isNaN(newValue) ? 0 : newValue); //NaN の場合は 0
        }}
      />
    </NumberInputRoot>
  );
};

//テーブル
export const ScoreTable = () => {
  const [scores, setScores] = useState(initialItems);

  // 点数変更時の処理（ポイントを更新）
  // ユーザーが点数を入力すると、`handleScoreChange` が呼ばれる
  const handleScoreChange = (index: number, value: number) => {
    const newScores = [...scores];
    newScores[index].score = value;
    newScores[index].point = (value - 250) / 10; // 仮の計算式
    setScores(newScores);
  };

  return (
    <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>家</Table.ColumnHeader>
          <Table.ColumnHeader>プレイヤー</Table.ColumnHeader>
          <Table.ColumnHeader>点数</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">ポイント</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {scores.map((item, index) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.position}</Table.Cell>
            <Table.Cell>{item.player}</Table.Cell>
            <Table.Cell>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <ScoreInput
                  value={item.score}
                  onChange={(value) => handleScoreChange(index, value)}
                />
                <span>00点</span>
                {/* 00点を横に表示 */}
              </div>
            </Table.Cell>
            {/* ポイント（小数1桁で表示） */}
            <Table.Cell textAlign="end">{item.point.toFixed(1)}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
