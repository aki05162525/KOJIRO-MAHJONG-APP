import {
  type LeagueFormValues,
  validationLeagueFormSchema,
} from "@/application/validation/league-form";
import { LeagueNameInput } from "@/components/blocks/league-name-input";
import { PlayerListInput } from "@/components/blocks/header/player-list-input";
import { PageHeader } from "@/components/layouts/page-header";
import { Box, Button, HStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

export const LeagueNewScreen = () => {
  const router = useRouter();

  const methods = useForm<LeagueFormValues>({
    resolver: zodResolver(validationLeagueFormSchema),
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: LeagueFormValues) => {
    console.log(data);
    router.push("/");
  };

  return (
    <Box maxW="2xl" mx="auto" py={8} color="gray.900">
      <PageHeader title="リーグ登録" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LeagueNameInput />
          <PlayerListInput />
          <HStack justify="space-between">
            <Link href="/">
              <Button variant="outline">戻る</Button>
            </Link>
            <Button type="submit" colorScheme="blue">
              登録する
            </Button>
          </HStack>
        </form>
      </FormProvider>
    </Box>
  );
};
