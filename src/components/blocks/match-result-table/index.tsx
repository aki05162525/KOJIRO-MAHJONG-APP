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

//テーブル
export const ScoreTable = () => {
  const [scores, setScores] = useState(initialItems);

  // スコアを更新する関数
  const handleScoreChange = (index: number, newValue: number) => {
    const updatedScores = [...scores];
    updatedScores[index].score = newValue;
    setScores(updatedScores);
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
                <NumberInputRoot
                  maxW="100px"
                  value={item.score.toString()}
                  onValueChange={(e) =>
                    handleScoreChange(index, Number(e.value))
                  }
                >
                  <NumberInputField />
                </NumberInputRoot>
                <span>00点</span>
              </div>
            </Table.Cell>
            {/* ポイント（小数1桁で表示） */}
            <Table.Cell textAlign="end">
              {((item.score - 250) / 10).toFixed(1)}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
