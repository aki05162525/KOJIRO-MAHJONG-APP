import { Box, Button, Input, Text, Grid, Flex } from "@chakra-ui/react";
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { LeagueFormValues } from "@/domain/validation/league-form";

import { useState } from "react";
import { FormErrorMessage } from "@/components/elements/form-error-message";

export const PlayerListInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<LeagueFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "players",
  });

  const [newPlayerName, setNewPlayerName] = useState("");

  const handleAddPlayer = () => {
    append({ name: newPlayerName });
    setNewPlayerName(""); // 追加後に入力フィールドをクリア
  };

  return (
    <div>
      <Box mb={4}>
        <Input
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          placeholder="プレイヤー名を入力"
        />
        <Button
          mt={2}
          onClick={handleAddPlayer}
          disabled={!newPlayerName || fields.length >= 8}
        >
          <Plus />
          追加
        </Button>
      </Box>
      <Text fontSize="md" fontWeight="bold" mb={2}>
        参加プレイヤー　{fields.length}/8人
      </Text>
      <FormErrorMessage message={errors.players?.message} />

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
    </div>
  );
};
