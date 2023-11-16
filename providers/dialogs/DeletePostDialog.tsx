"use client";
import React, { useContext } from "react";
import DialogComponent from "@/components/DialogComponent";
import { deletePost } from "@/webfetch/post_api";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";
import { OperationContext } from "../OperationProvider";
import { UserStateContext } from "../UserStateProvider";
export default function DeletePostDialog() {
  const router = useRouter();

  const {
    deletePostOpen,
    setDeletePostOpen,
    operationPostID,
    mutationDeletePost,
    setMutationDeletePost,
  } = useContext(OperationContext);

  const { currentUserID } = useContext(UserStateContext);
  return (
    <DialogComponent
      showDialog={deletePostOpen}
      setShowDialog={setDeletePostOpen}
    >
      <header className=" justify-center px-4 py-4 overflow-auto relative flex  text-slate-700 flex-row items-center border-b border-slate-300/75 dark:border-slate-800/75">
        <div className="flex lg:block md:overflow-hidden grow  justify-center overflow-auto  items-center ">
          <div className="sm:overflow-hidden sm:rounded-md">
            <div className="grid grid-cols-6 gap-4 gap-x-8 p-2">
              <div className="col-span-6 justify-center flex-center">
                <label
                  htmlFor="post_title"
                  className="block text-center pt-2 pb-6 text-2xl font-bold text-gray-700 dark:text-slate-50"
                >
                  确认删除本帖子?
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6 p-4 sm:px-6 sm:py-5 lg:p-4 xl:px-6 xl:py-5">
              <button
                className="text-base font-medium rounded-lg bg-slate-100 text-slate-900 py-3 text-center cursor-pointer dark:bg-gray-700/75 dark:text-slate-200 dark:highlight-white/10"
                onClick={() => setDeletePostOpen(false)}
              >
                取消
              </button>
              <button
                className="text-base font-medium rounded-lg bg-sky-500 dark:bg-sky-800 text-white py-3 text-center cursor-pointer dark:highlight-white/20"
                onClick={() => {
                  const id = toast(`删除帖子...`, {
                    type: toast.TYPE.INFO,
                    isLoading: true,
                  });

                  deletePost(
                    {
                      post_id: operationPostID,
                    },
                    id
                  ).then((data: any) => {
                    if (data) {
                      toast.update(id, {
                        render: `帖子删除成功`,
                        type: toast.TYPE.SUCCESS,
                        isLoading: false,
                        autoClose: 500,
                      });
                      setMutationDeletePost(!mutationDeletePost);
                      setDeletePostOpen(false);
                      router.push(`/workspace/${currentUserID}/post`);
                    }
                  });
                }}
              >
                删除
              </button>
            </div>
          </div>
        </div>
      </header>
    </DialogComponent>
  );
}
