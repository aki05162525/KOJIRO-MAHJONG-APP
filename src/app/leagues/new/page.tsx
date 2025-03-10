"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

// フォームの型定義
interface LeagueFormValues {
  leagueName: string;
  players: {
    id: string;
    name: string;
  }[];
}

export default function NewLeague() {
  const router = useRouter();
  const [newPlayerName, setNewPlayerName] = useState("");

  // react-hook-formの設定
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
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

  //プレイヤー追加
  const addPlayer = () => {
    const trimmedName = newPlayerName.trim(); //スペース付きの入力防止

    if (newPlayerName.trim() === "") return; // 空白なら追加しない

    //重複の名前は追加できない仕様
    const nameChecker = fields.some((player) => player.name === trimmedName);
    if (nameChecker) {
      alert("同じ名前のプレイヤーは追加できません");
      return;
    }

    append({
      id: Date.now().toString(), // 一意なIDを生成
      name: trimmedName,
    });

    setNewPlayerName(""); // 入力欄をリセット
  };

  //データ送信
  const onSubmit = handleSubmit((data) => {
    const newLeague = {
      id: Date.now().toString(),
      name: data.leagueName,
      players: data.players,
    };

    console.log("データ:", newLeague); //確認

    const storedLeagues = localStorage.getItem("leagues");
    const leagues = storedLeagues ? JSON.parse(storedLeagues) : [];
    localStorage.setItem("leagues", JSON.stringify([...leagues, newLeague]));

    // 登録後にリーグ一覧ページへ移動
    router.push("/");
  });

  return (
    <Box maxW="2xl" mx="auto" py={8} color="gray.900">
      <Heading size="3xl" fontWeight="bold" textAlign="center" mb={4}>
        リーグ登録
      </Heading>
      <form onSubmit={onSubmit}>
        {/* リーグ名入力 */}
        <Box mb={8}>
          <Input
            placeholder="リーグ名を入力"
            {...register("leagueName", {
              required: "リーグ名を入力してください",
            })}
          />
          {errors.leagueName?.message && (
            <p className="error-message">
              <Text color="red.500" fontWeight="bold">
                {errors.leagueName?.message}
              </Text>
            </p>
          )}
        </Box>

        {/* プレイヤー追加 */}
        <Box mb={4}>
          <Input
            value={newPlayerName}
            placeholder="プレイヤー名を入力"
            onChange={(e) => setNewPlayerName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addPlayer();
                setTimeout(() => setNewPlayerName(""), 0); // Enterを押したら入力欄が空白になるように設定
              }
            }}
          />
          {/* 16人より大きい場合は追加できない仕様 */}
          <Button onClick={addPlayer} mt={2} disabled={fields.length >= 16}>
            <Plus />
            追加
          </Button>
        </Box>
        {/* 参加プレイヤー数の表示 */}
        <Text fontSize="md" fontWeight="bold" mb={2}>
          参加プレイヤー　{fields.length}/16人
        </Text>

        {/* プレイヤーリスト */}
        <Grid templateColumns="repeat(2, 1fr)" gap="3">
          {fields.map((player, index) => (
            <Flex
              key={player.id}
              borderWidth={2}
              align="center"
              justify="space-between"
            >
              <Text>{player.name}</Text>
              <Button
                onClick={() => remove(index)} // 削除機能を追加
                size="sm"
              >
                <Trash2 />
              </Button>
            </Flex>
          ))}
        </Grid>

        {/* ボタン */}
        <Flex justifyContent="space-between" pt={4}>
          <Button variant="outline" onClick={() => router.push("/")}>
            <a href="../../">戻る</a>
          </Button>

          <Button type="submit">
            {/* <a href="../../">登録する</a> */}
            登録する
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
