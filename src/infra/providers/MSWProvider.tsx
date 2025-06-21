"use client";

import type React from "react";
import { useEffect, useState } from "react";

export default function MSWProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const initMSW = async () => {
      // 環境変数でモックの使用を制御
      if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
        const { initMocks } = await import("@/mocks");
        await initMocks();
        setMswReady(true);
      } else {
        setMswReady(true);
      }
    };

    initMSW();
  }, []);

  if (!mswReady) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
