import { Button, Flex, Heading } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import Link from "next/link";

export const LeagueListHeader = () => {
  return (
    <Flex justify="space-between">
      <Heading size="3xl" fontWeight="bold">
        リーグ一覧
      </Heading>
      <Button asChild variant="surface" rounded="full">
        <Link href="/leagues/new">
          <Plus />
          リーグ追加
        </Link>
      </Button>
    </Flex>
  );
};
