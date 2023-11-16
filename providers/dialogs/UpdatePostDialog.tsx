"use client";
import { useContext, useRef } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { updatePostValidate } from "../../utils/validate";
import DialogComponent from "../../components/DialogComponent";
import { OperationContext } from "../OperationProvider";
import { updatePost } from "@/webfetch/post_api";
export default function UpdatePostDialog() {
  const {
    updatePostOpen,
    setUpdatePostOpen,
    mutationUpdatePost,
    setMutationUpdatePost,
    operationPostID,
  } = useContext(OperationContext);

  const cancelButtonRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      post_id: 0,
      caption: "",
      visible: "",
    },
    validate: updatePostValidate,
    onSubmit: onSubmit,
  });
  async function onSubmit(values: any) {
    const id = toast(`更新帖子信息...`, {
      type: toast.TYPE.INFO,
      isLoading: true,
    });
    values.post_id = operationPostID;
    const data = await updatePost(values, id);
    if (data) {
      toast.update(id, {
        render: `更新帖子成功`,
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        autoClose: 1000,
      });
      setMutationUpdatePost(!mutationUpdatePost);
      setUpdatePostOpen(false);
      formik.resetForm();
    }
  }
  return (
    <DialogComponent
      showDialog={updatePostOpen}
      setShowDialog={setUpdatePostOpen}
    >
      <header className="justify-center px-4 py-4 overflow-auto relative flex text-slate-500 flex-row items-center border-b border-slate-300/75 dark:border-slate-800/75">
        <form
          className="flex grow  justify-center overflow-auto  items-center "
          onSubmit={formik.handleSubmit}
        >
          <div className="sm:overflow-hidden sm:rounded-md w-full">
            <div className="grid grid-cols-6 gap-4 gap-x-8 p-2">
              <div className="col-span-6 justify-center flex-center">
                <label
                  htmlFor="repo_name"
                  className="block text-center pt-2 pb-6 text-2xl font-bold text-gray-700 dark:text-slate-50"
                >
                  修改帖子信息
                </label>
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="repo_name"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                >
                  帖子描述
                </label>
                <div className="flex content-center	">
                  <input
                    type="text"
                    id="caption"
                    autoComplete="caption"
                    placeholder={`修改帖子描述`}
                    className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:placeholder-slate-600 dark:text-slate-300 appearance-none dark:bg-slate-800/50  focus:outline-none  dark:border-gray-700 placeholder-slate-400"
                    {...formik.getFieldProps("caption")}
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="visible"
                  className="block text-sm font-medium text-gray-700  dark:text-slate-200 "
                >
                  可见性
                </label>
                <select
                  id="visible"
                  name="visible"
                  autoComplete="visible"
                  className="mt-1 block w-full rounded-md border  border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-slate-800/50 dark:text-slate-200 dark:border-gray-700 placeholder-slate-400 dark:placeholder-slate-600"
                  value={formik.values.visible}
                  onChange={formik.handleChange}
                >
                  <option value="" label="选择帖子可见性">
                    Select if public visible...
                  </option>
                  <option value="public" label="他人可见">
                    public
                  </option>
                  <option value="private" label="他人不可见">
                    private
                  </option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6 p-4 sm:px-6 sm:py-5 lg:p-4 xl:px-6 xl:py-5">
              <button
                type="reset"
                ref={cancelButtonRef}
                className="text-base font-medium rounded-lg bg-slate-100 text-slate-900 py-3 text-center cursor-pointer dark:bg-gray-700/75 dark:text-slate-200 dark:highlight-white/10"
                onClick={() => setUpdatePostOpen(false)}
              >
                Decline
              </button>
              <button
                type="submit"
                className="text-base font-medium rounded-lg bg-sky-500 dark:bg-sky-800 text-white py-3 text-center cursor-pointer dark:highlight-white/20"
              >
                Accept
              </button>
            </div>
          </div>
        </form>
      </header>
    </DialogComponent>
  );
}
