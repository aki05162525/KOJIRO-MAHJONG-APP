import { Button, Flex, Heading } from "@chakra-ui/react";
import { Plus } from "lucide-react";

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
