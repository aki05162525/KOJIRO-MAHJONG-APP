import { z } from "zod";

export const validationLeagueFormSchema = z.object({
  leagueName: z.string().min(1, "リーグ名は必須です。"),
  players: z
    .array(
      z.object({
        name: z.string().min(1, "プレイヤー名は必須です。"),
      }),
    )
    .min(1, "プレイヤーを入力してください")
    .length(8, "プレイヤーは8人登録してください。")
    .refine((players) => {
      const names = players.map((p) => p.name);
      return new Set(names).size === names.length;
    }, "プレイヤー名は重複できません。"),
});

export type LeagueFormValues = z.infer<typeof validationLeagueFormSchema>;
