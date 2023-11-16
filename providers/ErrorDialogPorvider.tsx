"use client";

import React, { createContext, useState } from "react";
export const ErrorDialogContext = createContext<{
  errorDialogOpen: boolean;
  setErrorDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  redirectUrl: string;
  redirectPage: string;
  setRedirectUrl: React.Dispatch<React.SetStateAction<string>>;
  setRedirectPage: React.Dispatch<React.SetStateAction<string>>;
}>({
  errorDialogOpen: true,
  setErrorDialogOpen: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
  redirectUrl: "",
  setRedirectUrl: () => {},
  redirectPage: "",
  setRedirectPage: () => {},
});

export default function ErrorDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const [redirectPage, setRedirectPage] = useState("");

  // Context values passed to consumer
  const value = {
    errorDialogOpen, // <------ Expose Value to Consumer
    setErrorDialogOpen, // <------ Expose Setter to Consumer
    errorMessage,
    setErrorMessage,
    redirectUrl,
    setRedirectUrl,
    redirectPage,
    setRedirectPage,
  };
  return (
    <ErrorDialogContext.Provider value={value}>
      {children}
    </ErrorDialogContext.Provider>
  );
}
