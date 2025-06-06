import { PageHeader } from "@/components/layouts/page-header";
import { Box, Button, Heading, HStack, Input } from "@chakra-ui/react";
import { Plus } from "lucide-react";

export const LeagueNewScreen = () => {
  return (
    <Box maxW="2xl" mx="auto" py={8} color="gray.900">
      <PageHeader title="リーグ登録" />

      {/* リーグ名入力 */}
      <Box mb={8}>
        <Input placeholder="リーグ名を入力" />
      </Box>

      {/* プレイヤー入力 */}
      <Box mb={8}>
        <Input placeholder="プレイヤー名を入力" />
      </Box>
      <Button>
        <Plus />
        追加
      </Button>

      <HStack justify="space-between">
        <Button variant="outline">戻る</Button>
        <Button type="submit" colorScheme="blue">
          登録する
        </Button>
      </HStack>
    </Box>
  );
};
