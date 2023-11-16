"use client";
import React, { useState, useContext } from "react";
import DialogComponent from "../../components/DialogComponent";
import Link from "next/link";

import { ErrorDialogContext } from "@/providers/ErrorDialogPorvider";

export default function ErrorDialog() {
  const [mockOpen, setMockOpen] = useState(false);
  const {
    errorDialogOpen,
    setErrorDialogOpen,
    setErrorMessage,
    errorMessage,
    redirectUrl,
    redirectPage,
  } = useContext(ErrorDialogContext);
  return (
    <DialogComponent showDialog={errorDialogOpen} setShowDialog={setMockOpen}>
      <header className=" justify-center px-4 py-4 overflow-auto relative flex text-slate-500 flex-row items-center border-b border-slate-300/75 dark:border-slate-800/75">
        <div className="grid grid-cols-6 gap-4 gap-x-8 p-2">
          <div className="col-span-6 justify-center flex-center">
            <label
              htmlFor="repo_name"
              className="block text-center pt-2 pb-6 text-2xl font-bold text-gray-700 dark:text-slate-50"
            >
              错误信息
            </label>
          </div>
          <div className="col-span-6 justify-center flex-center">
            <label
              htmlFor="repo_name"
              className="block text-center pt-2 pb-6 text-2xl font-bold text-gray-700 dark:text-slate-50"
            >
              {errorMessage}
            </label>
          </div>
          <div className="col-span-6 justify-center flex-center">
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6 p-4 sm:px-6 sm:py-5 lg:p-4 xl:px-6 xl:py-5">
              <Link
                onClick={() => {
                  setErrorDialogOpen(false);
                }}
                href="/"
                className="text-base font-medium rounded-lg bg-slate-100 text-slate-900 py-3 text-center cursor-pointer dark:bg-gray-700/75 dark:text-slate-200 dark:highlight-white/10 p-4"
              >
                首页
              </Link>
              <Link
                onClick={() => {
                  setErrorDialogOpen(false);
                }}
                href={redirectUrl}
                className="text-base font-medium rounded-lg bg-sky-500 dark:bg-sky-800 text-white py-3 text-center cursor-pointer dark:highlight-white/20 p-4"
              >
                {redirectPage}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </DialogComponent>
  );
}
