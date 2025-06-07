import { z } from "zod";


export const validationLeagueFormSchema = z.object({
    leagueName: z
        .string()
        .min(1, "リーグ名は必須です。"),
    players: z
        .array(z.string()).min(1,"プレイヤーは名を入力してください").length(8, "プレイヤーは8人登録してください。")
        .refine((players)=>{
            return new Set(players).size === players.length;
        }, "プレイヤー名は重複できません。")
        })



export type LeagueFormValues = z.infer<typeof validationLeagueFormSchema>;