"use client";

import { Button, Flex, Heading } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

//リーグの定義
interface Player {
  id: string;
  name: string;
}

interface League {
  id: string;
  name: string;
  players: Player[];
}

export default function Home() {
  const [leagues, setLeagues] = useState<League[]>([]);

  // ローカルストレージからリーグデータを取得
  useEffect(() => {
    const storedLeagues = localStorage.getItem("leagues");
    if (storedLeagues) {
      setLeagues(JSON.parse(storedLeagues)); // JSONをオブジェクトに変換
    }

    console.log("リーグデータ:", storedLeagues); // ここでデータが取得できているか確認
  }, []);

  return (
    <Flex justify="space-between">
      <Heading size="3xl" fontWeight="bold">
        リーグ一覧
      </Heading>
      <Button asChild variant="surface" rounded="full">
        <a href="./leagues/new">
          {" "}
          <Plus />
          リーグ追加
        </a>
      </Button>
    </Flex>
  );
}
