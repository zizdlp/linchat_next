"use client";

import React, { createContext, useState } from "react";
export const SearchDialogContext = createContext<{
  searchDialogOpen: boolean;
  setSearchDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  searchDialogOpen: true,
  setSearchDialogOpen: () => {},
});

export default function SearchDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);

  // Context values passed to consumer
  const value = {
    searchDialogOpen, // <------ Expose Value to Consumer
    setSearchDialogOpen, // <------ Expose Setter to Consumer
  };
  return (
    <SearchDialogContext.Provider value={value}>
      {children}
    </SearchDialogContext.Provider>
  );
}
