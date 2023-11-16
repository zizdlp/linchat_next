"use client";

import React, { createContext, useState } from "react";
export const OperationContext = createContext<{
  createCommentOpen: boolean; // open create comment dialog
  setCreateCommentOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onBoardOpen: boolean; // open create comment dialog
  setOnBoardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateUserOpen: boolean; // open create comment dialog
  setUpdateUserOpen: React.Dispatch<React.SetStateAction<boolean>>;

  updatePostOpen: boolean; // open create comment dialog
  setUpdatePostOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deletePostOpen: boolean; // open create comment dialog
  setDeletePostOpen: React.Dispatch<React.SetStateAction<boolean>>;

  createCommentReportOpen: boolean; // open create comment report dialog
  setCreateCommentReportOpen: React.Dispatch<React.SetStateAction<boolean>>;

  createPostReportOpen: boolean; // open create post dialog
  setCreatePostReportOpen: React.Dispatch<React.SetStateAction<boolean>>;

  CreateSystemNotificationOpen: boolean;
  setCreateSystemNotificationOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  createPostOpen: boolean; // open create comment dialog
  setCreatePostOpen: React.Dispatch<React.SetStateAction<boolean>>;

  mutationCreateComment: boolean; // create comment
  setMutationCreateComment: React.Dispatch<React.SetStateAction<boolean>>;

  mutationCreatePost: boolean; // create comment
  setMutationCreatePost: React.Dispatch<React.SetStateAction<boolean>>;

  mutationUpdateUser: boolean; // create comment
  setMutationUpdateUser: React.Dispatch<React.SetStateAction<boolean>>;

  mutationUpdatePost: boolean; // create comment
  setMutationUpdatePost: React.Dispatch<React.SetStateAction<boolean>>;
  mutationDeletePost: boolean; // create comment
  setMutationDeletePost: React.Dispatch<React.SetStateAction<boolean>>;

  mutationDeleteComment: boolean; // delete comment
  setMutationDeleteComment: React.Dispatch<React.SetStateAction<boolean>>;
  mutationUpdateComment: boolean; // update comment
  setMutationUpdateComment: React.Dispatch<React.SetStateAction<boolean>>;

  operationPostID: number;
  setOperationPostID: React.Dispatch<React.SetStateAction<number>>;
  operationCommentID: number;
  setOperationCommentID: React.Dispatch<React.SetStateAction<number>>;
  operationRootID: number;
  setOperationRootID: React.Dispatch<React.SetStateAction<number>>;
  operationParentID: number;
  setOperationParentID: React.Dispatch<React.SetStateAction<number>>;
}>({
  createCommentOpen: false,
  setCreateCommentOpen: () => {},
  onBoardOpen: false,
  setOnBoardOpen: () => {},
  updateUserOpen: false,
  setUpdateUserOpen: () => {},
  updatePostOpen: false,
  setUpdatePostOpen: () => {},
  deletePostOpen: false,
  setDeletePostOpen: () => {},
  createCommentReportOpen: false,
  setCreateCommentReportOpen: () => {},

  createPostOpen: false,
  setCreatePostOpen: () => {},

  createPostReportOpen: false,
  setCreatePostReportOpen: () => {},

  mutationCreateComment: false,
  setMutationCreateComment: () => {},

  mutationUpdateUser: false,
  setMutationUpdateUser: () => {},

  mutationUpdatePost: false,
  setMutationUpdatePost: () => {},
  mutationDeletePost: false,
  setMutationDeletePost: () => {},

  mutationCreatePost: false,
  setMutationCreatePost: () => {},
  mutationUpdateComment: false,
  setMutationUpdateComment: () => {},
  mutationDeleteComment: false,
  setMutationDeleteComment: () => {},

  operationPostID: 0,
  setOperationPostID: () => {},
  operationCommentID: 0,
  setOperationCommentID: () => {},
  operationParentID: 0,
  setOperationParentID: () => {},
  operationRootID: 0,
  setOperationRootID: () => {},

  CreateSystemNotificationOpen: false,
  setCreateSystemNotificationOpen: () => {},
});

export default function OperationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [createCommentOpen, setCreateCommentOpen] = useState(false);
  const [onBoardOpen, setOnBoardOpen] = useState(false);
  const [updateUserOpen, setUpdateUserOpen] = useState(false);
  const [updatePostOpen, setUpdatePostOpen] = useState(false);
  const [deletePostOpen, setDeletePostOpen] = useState(false);
  const [createPostOpen, setCreatePostOpen] = useState(false);
  const [createCommentReportOpen, setCreateCommentReportOpen] = useState(false);
  const [createPostReportOpen, setCreatePostReportOpen] = useState(false);
  const [mutationCreateComment, setMutationCreateComment] = useState(false);
  const [mutationUpdateUser, setMutationUpdateUser] = useState(false);
  const [mutationUpdatePost, setMutationUpdatePost] = useState(false);
  const [mutationDeletePost, setMutationDeletePost] = useState(false);
  const [mutationCreatePost, setMutationCreatePost] = useState(false);
  const [mutationUpdateComment, setMutationUpdateComment] = useState(false);
  const [mutationDeleteComment, setMutationDeleteComment] = useState(false);
  const [operationPostID, setOperationPostID] = useState(0);
  const [operationParentID, setOperationParentID] = useState(0);
  const [operationCommentID, setOperationCommentID] = useState(0);
  const [operationRootID, setOperationRootID] = useState(0);

  const [CreateSystemNotificationOpen, setCreateSystemNotificationOpen] =
    useState(false);
  // Context values passed to consumer
  const value = {
    createCommentOpen,
    setCreateCommentOpen,
    onBoardOpen,
    setOnBoardOpen,
    createPostOpen,
    setCreatePostOpen,
    updateUserOpen,
    setUpdateUserOpen,
    updatePostOpen,
    setUpdatePostOpen,
    deletePostOpen,
    setDeletePostOpen,
    createCommentReportOpen,
    setCreateCommentReportOpen,
    createPostReportOpen,
    setCreatePostReportOpen,
    mutationCreateComment,
    setMutationCreateComment,
    mutationCreatePost,
    setMutationCreatePost,
    mutationUpdateUser,
    setMutationUpdateUser,
    mutationUpdatePost,
    setMutationUpdatePost,
    mutationDeletePost,
    setMutationDeletePost,
    mutationUpdateComment,
    setMutationUpdateComment,
    mutationDeleteComment,
    setMutationDeleteComment,
    operationPostID,
    setOperationPostID,
    operationParentID,
    setOperationParentID,
    operationCommentID,
    setOperationCommentID,
    operationRootID,
    setOperationRootID,
    CreateSystemNotificationOpen,
    setCreateSystemNotificationOpen,
  };
  return (
    <OperationContext.Provider value={value}>
      {children}
    </OperationContext.Provider>
  );
}
