"use client";

import DialogComponent from "@/components/DialogComponent";
import { OperationContext } from "@/providers/OperationProvider";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import React, { useState, useEffect, useContext } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { getSession } from "next-auth/react";
import ToggleImage from "../../components/ToggleImage";
import { loadUserImageInfo } from "@/storage/dbwrapper";
import { UserImageInfo } from "@/types/model";
import { createCommentReport } from "@/webfetch/comment_relation_api";
export default function CreateCommentReportDialog() {
  const [userImageInfo, setUserImageInfo] = useState<UserImageInfo>();
  const {
    mutationUpdateComment,
    setMutationUpdateComment,
    setOperationCommentID,
    createCommentReportOpen,
    setCreateCommentReportOpen,
    operationCommentID,
  } = useContext(OperationContext);

  const formik = useFormik({
    initialValues: {
      comment_id: 0,
      report_content: "",
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        loadUserImageInfo(session.user_id, setUserImageInfo);
      }
    });
  }, []);

  async function handleSubmit(values: any) {
    const id = toast(`上传评论举报...`, {
      type: toast.TYPE.INFO,
      isLoading: false,
      autoClose: 2000,
    });
    values.comment_id = operationCommentID;

    const data = await createCommentReport(
      {
        comment_id: values.comment_id,
        report_content: values.report_content,
      },
      id
    );
    if (data) {
      setCreateCommentReportOpen(false);
      toast.update(id, {
        render: `添加举报成功`,
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        autoClose: 500,
      });
      setOperationCommentID(values.comment_id);
      setMutationUpdateComment(!mutationUpdateComment);
      formik.resetForm();
    }
  }

  return (
    <DialogComponent
      showDialog={createCommentReportOpen}
      setShowDialog={setCreateCommentReportOpen}
    >
      <header className="">
        <div className="my-4 items-center justify-center mx-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-row space-x-4 my-2 py-4  items-center">
              <ToggleImage
                src={userImageInfo?.image_string ?? ""}
                show={userImageInfo?.image_string ? true : false}
                className="h-10 w-10 md:h-14 md:w-14 rounded-full"
              />
              <textarea
                id="report_content"
                autoComplete="report_content"
                placeholder={`举报原因`}
                className="grow rounded-md border  p-2 resize-none dark:bg-slate-800/25 bg-slate-100/75 placeholder:text-slate-400/75 dark:placeholder:text-slate-700  text-xs md:text-base border-sky-400 dark:border-sky-800 focus:border-sky-400 focus:ring-sky-400 dark:focus:ring-sky-800 focus:ring-1"
                {...formik.getFieldProps("report_content")}
              />
              <button
                type="submit"
                className="inline-flex items-center px-2 py-2 md:p-4 font-semibold leading-6  text-sm md:text-lg shadow rounded-md text-slate-100 dark:text-slate-300 border-2 border-sky-400 bg-sky-500 dark:bg-transparent dark:border-sky-800 scale-95 hover:scale-100"
              >
                <BsFillSendFill className="w-6 h-6 mr-2 dark:text-sky-500" />
                提交
              </button>
            </div>
          </form>
        </div>
      </header>
    </DialogComponent>
  );
}
