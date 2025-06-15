import type { LeagueFormValues } from "@/domain/validation/league-form";
import { FormErrorMessage } from "@/components/elements/form-error-message";
import { Box, Input, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const LeagueNameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LeagueFormValues>();

  return (
    <Box mb={8}>
      <Input placeholder="リーグ名を入力" {...register("leagueName")} />
      <FormErrorMessage message={errors.leagueName?.message} />
    </Box>
  );
};
