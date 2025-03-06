"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useFieldArray, useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { useState } from "react";

// フォームの型定義
interface LeagueFormValues {
  leagueName: string;
  players: {
    id: string;
    name: string;
  }[];
}

export default function NewLeague() {
  const [newPlayerName, setNewPlayerName] = useState("");

  // react-hook-formの設定
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<LeagueFormValues>({
    defaultValues: {
      leagueName: "",
      players: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "players",
  });

  const addPlayer = () => {
    if (newPlayerName.trim() === "") return; // 空白なら追加しない

    append({
      id: Date.now().toString(), // 一意なIDを生成
      name: newPlayerName,
    });

    setNewPlayerName(""); // 入力欄をリセット
  };

  return (
    <Box maxW="2xl" mx="auto" py={8}>
      <Heading size="3xl" fontWeight="bold" textAlign="center" mb={4}>
        リーグ登録
      </Heading>

      {/* リーグ名入力 */}
      <Box mb={8}>
        <Input placeholder="リーグ名を入力" />
      </Box>

      {/* プレイヤー追加 */}
      <Box mb={8}>
        <Input
          value={newPlayerName}
          placeholder="プレイヤー名を入力"
          onChange={(e) => setNewPlayerName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addPlayer();
            }
          }}
        />
        <Button onClick={addPlayer} mt={2}>
          <Plus />
          追加
        </Button>
      </Box>

      {/* プレイヤーリスト */}
      <VStack align="stretch">
        {fields.map((player) => (
          <Box key={player.id} borderWidth={2} p={2}>
            {player.name}
          </Box>
        ))}
      </VStack>

      {/* ボタン */}
      <Flex justifyContent="space-between" pt={4}>
        <Button variant="outline">
          <a href="../../">戻る</a>
        </Button>

        <Button colorScheme="blue">
          <a href="../../">登録する</a>
        </Button>
      </Flex>
    </Box>
  );
}
