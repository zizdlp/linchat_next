"use client";

import React, { createContext, useState, useEffect } from "react";
import { getSession } from "next-auth/react";

export const UserStateContext = createContext<{
  userStateIn: boolean;
  setUserStateIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentUserID: number;
  setCurrentUserID: React.Dispatch<React.SetStateAction<number>>;
  currentUsername: string;
  setCurrentUsername: React.Dispatch<React.SetStateAction<string>>;
}>({
  userStateIn: true,
  setUserStateIn: () => {},
  currentUserID: 0,
  setCurrentUserID: () => {},
  currentUsername: "",
  setCurrentUsername: () => {},
});

export default function UserStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userStateIn, setUserStateIn] = useState(false);
  const [currentUserID, setCurrentUserID] = useState(0);
  const [currentUsername, setCurrentUsername] = useState("");

  // 1.组件加载时，判断用户状态
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setUserStateIn(true);
        setCurrentUserID(parseInt(session.user_id.toString()));
        setCurrentUsername(session.username);
      }
    });
  }, []);
  // Context values passed to consumer
  const value = {
    userStateIn,
    setUserStateIn,
    currentUserID,
    setCurrentUserID,
    currentUsername,
    setCurrentUsername,
  };
  return (
    <UserStateContext.Provider value={value}>
      {children}
    </UserStateContext.Provider>
  );
}
