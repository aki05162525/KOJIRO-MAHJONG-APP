"use client";

import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
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
  const [leagues, setLeagues] = useState<League[]>([]); //リーグ一覧を管理

  // ローカルストレージからリーグデータを取得
  useEffect(() => {
    const storedLeagues = localStorage.getItem("leagues");
    if (storedLeagues) {
      setLeagues(JSON.parse(storedLeagues)); // JSONをオブジェクトに変換
    }

    console.log("リーグデータ:", storedLeagues); // ここでデータが取得できているか確認
  }, []);

  return (
    <div>
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
      {/* リーグリスト */}
      <VStack align="stretch" pt={4}>
        {leagues.length === 0 ? (
          <Text color="gray.500">リーグがまだ登録されていません。</Text>
        ) : (
          leagues.map((league) => (
            <Box
              key={league.id}
              borderWidth={2}
              borderRadius="lg"
              p={4}
              borderColor="gray.300"
              mt={4}
            >
              <Heading as="h2" size="md">
                {league.name}
              </Heading>
              <Text color="gray.500" mt={1}>
                詳細を表示
              </Text>
            </Box>
          ))
        )}
      </VStack>
    </div>
  );
}
