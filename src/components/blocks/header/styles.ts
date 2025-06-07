import { css } from "../../../../styled-system/css";

export const headerStyles = css({
  display: "flex",
  padding: "0 10px",
  backgroundColor: "neutral.800",
  height: "60px",
  position: "relative", // 追加: 相対位置指定
  marginBottom: "20px", //headerと余白
});

export const ImageSize = css({
  width: "auto",
  height: "60px",
  // borderRadius: "50%",
  position: "absolute", // 変更: 絶対位置指定
  left: "10px", // 追加: 左端に配置
});

export const titleStyle = css({
  color: "neutral.100", //（to do 色かえる）
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  width: "100%", // 追加: 幅を100%に
  lineHeight: "60px",
});
