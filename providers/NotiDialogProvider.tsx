"use client";

import React, { createContext, useState } from "react";
export const NotiDialogContext = createContext<{
  notiDialogOpen: boolean;
  setNotiDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  unReadCount: number;
  setUnReadCount: React.Dispatch<React.SetStateAction<number>>;
}>({
  notiDialogOpen: true,
  setNotiDialogOpen: () => {},
  unReadCount: 0,
  setUnReadCount: () => {},
});

export default function NotiDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notiDialogOpen, setNotiDialogOpen] = useState(false);
  const [unReadCount, setUnReadCount] = useState(0);

  // Context values passed to consumer
  const value = {
    notiDialogOpen, // <------ Expose Value to Consumer
    setNotiDialogOpen, // <------ Expose Setter to Consumer
    unReadCount,
    setUnReadCount,
  };
  return (
    <NotiDialogContext.Provider value={value}>
      {children}
    </NotiDialogContext.Provider>
  );
}
