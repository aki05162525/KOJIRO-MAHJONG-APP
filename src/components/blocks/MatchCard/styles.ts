import { cva } from "../../../../styled-system/css/cva.mjs";

export const matchCardRecipe = cva({
  variants: {
    component: {
      // カードの外枠
      cardContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "300px",
        backgroundColor: "white",
      },
      //ルールとボタンを横並びに配置
      header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      recordButton: {
        padding: "4px 8px",
        borderRadius: "4px",
        backgroundColor: "neutral.200",
        color: "black",
      },
      // 2列のグリッドレイアウト
      playerContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
      },
      // 各プレイヤー情報を表示するボックスのスタイル
      playerBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "8px",
        borderRadius: "8px",
        backgroundColor: "gray.200",
      },
    },
  },
  defaultVariants: {
    component: "cardContainer",
  },
});

export const textStyle = cva({
  // base: {

  // },
  variants: {
    type: {
      // ルール名表示用
      ruleName: {
        fontSize: "16px",
        fontWeight: "bold",
      },
      // 家（東家、南家など）の表示用
      direction: {
        fontSize: "12px",
        color: "black", //色かえる
      },
      // プレイヤー名用
      playerName: {
        marginTop: "4px",
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
  },
  defaultVariants: {
    type: "playerName",
  },
});
