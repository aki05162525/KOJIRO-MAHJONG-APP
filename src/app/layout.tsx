import { Provider as ChakraProvider } from "@/components/ui/provider";
import "./globals.css";
import { Header } from "@/components/blocks/header";
import { css } from "../../styled-system/css";
import StoreProvider from "./StoreProvider";
import type React from "react";

//スマホサイズで開発
const layoutStyle = css({
  maxWidth: "480px",
  margin: "0 auto", // 中央寄せ
  minHeight: "100vh", // 画面全体の高さを確保
  backgroundColor: "stone.50", // あとでかえる
});

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={layoutStyle}>
        <StoreProvider>
          <ChakraProvider>
            <Header />
            <div
              className={css({
                padding: "6",
              })}
            >
              {children}
            </div>
          </ChakraProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
