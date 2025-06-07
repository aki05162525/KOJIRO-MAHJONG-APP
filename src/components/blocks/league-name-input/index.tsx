import type { LeagueFormValues } from "@/application/validation/league-form";
import { Box, Input, Text } from "@chakra-ui/react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

interface LeagueNameInputProps {
  register: UseFormRegister<LeagueFormValues>;
  errors: FieldErrors<LeagueFormValues>;
}

export const LeagueNameInput = ({ register, errors }: LeagueNameInputProps) => {
  return (
    <Box mb={8}>
      <Input placeholder="リーグ名を入力" {...register("leagueName")} />
      {errors.leagueName?.message && (
        <Text color="red.500" fontWeight="bold">
          {errors.leagueName?.message}
        </Text>
      )}
    </Box>
  );
};
