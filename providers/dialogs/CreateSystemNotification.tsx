"use client";
import { Fragment, useRef, useContext } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { OperationContext } from "@/providers/OperationProvider";
import { createSystemNotificationValidate } from "../../utils/validate";
import { createSystemNotification } from "../../webfetch/admin_api";
import DialogComponent from "@/components/DialogComponent";
export default function CreateSystemNotification() {
  const cancelButtonRef = useRef(null);
  const { CreateSystemNotificationOpen, setCreateSystemNotificationOpen } =
    useContext(OperationContext);
  const formik = useFormik({
    initialValues: {
      user_id: 0,
      title: "",
      contents: "",
      redirect_url: "",
    },
    validate: createSystemNotificationValidate,
    onSubmit: handleSubmit,
  });
  function handleSubmit(values: any) {
    const id = toast(`创建系统通知...`, {
      type: toast.TYPE.INFO,
      isLoading: true,
    });

    createSystemNotification(
      {
        user_id: values.user_id,
        title: values.title,
        contents: values.contents,
        redirect_url: values.redirect_url,
      },
      id
    ).then((data) => {
      if (data) {
        toast.update(id, {
          render: `创建成功`,
          type: toast.TYPE.SUCCESS,
          isLoading: false,
          autoClose: 500,
        });
      }
    });
  }
  return (
    <DialogComponent
      showDialog={CreateSystemNotificationOpen}
      setShowDialog={setCreateSystemNotificationOpen}
    >
      <header className=" justify-center px-4 py-4 overflow-auto relative flex  text-slate-700 flex-row items-center border-b border-slate-300/75 dark:border-slate-800/75">
        <form
          className="flex lg:block md:overflow-hidden grow  justify-center overflow-auto  items-center "
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full sm:overflow-hidden sm:rounded-md">
            <div className="grid grid-cols-6 gap-4 gap-x-8 p-2">
              <div className="col-span-6 justify-center flex-center">
                <label
                  htmlFor="post_title"
                  className="block text-center pt-2 pb-6 text-2xl font-bold text-gray-700 dark:text-slate-50"
                >
                  新建系统通知
                </label>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                >
                  标题
                </label>
                <div className="flex content-center	">
                  <textarea
                    id="title"
                    rows={3}
                    className="resize-none mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-slate-800/75 dark:text-slate-200 dark:border-gray-700 placeholder-slate-400 dark:placeholder-slate-600 "
                    {...formik.getFieldProps("title")}
                  />
                </div>
                {formik.errors.title && formik.touched.title ? (
                  <span className="text-pink-600 text-sm">
                    {formik.errors.title as string}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="redirect_url"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                >
                  重定向链接
                </label>
                <div className="flex content-center	">
                  <textarea
                    id="redirect_url"
                    rows={3}
                    className="resize-none mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-slate-800/75 dark:text-slate-200 dark:border-gray-700 placeholder-slate-400 dark:placeholder-slate-600 "
                    {...formik.getFieldProps("redirect_url")}
                  />
                </div>
                {formik.errors.redirect_url && formik.touched.redirect_url ? (
                  <span className="text-pink-600 text-sm">
                    {formik.errors.redirect_url as string}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="user_id"
                  className="block text-sm font-medium text-gray-700  dark:text-slate-200"
                >
                  user_id
                </label>
                <div className="flex content-center	">
                  <input
                    type="number"
                    id="user_id"
                    autoComplete="user_id"
                    placeholder={`user_id`}
                    className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-slate-800/75 dark:text-slate-200 dark:border-gray-700  placeholder-slate-400 dark:placeholder-slate-600 "
                    {...formik.getFieldProps("user_id")}
                  />
                </div>

                {formik.errors.user_id && (
                  <span className="text-pink-600 text-sm">
                    {formik.errors.user_id as string}
                  </span>
                )}
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="contents"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                >
                  内容
                </label>
                <div className="flex content-center	">
                  <textarea
                    id="contents"
                    rows={3}
                    className="resize-none mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-slate-800/75 dark:text-slate-200 dark:border-gray-700 placeholder-slate-400 dark:placeholder-slate-600 "
                    {...formik.getFieldProps("contents")}
                  />
                </div>
                {formik.errors.contents && formik.touched.contents ? (
                  <span className="text-pink-600 text-sm">
                    {formik.errors.contents as string}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6 p-4 sm:px-6 sm:py-5 lg:p-4 xl:px-6 xl:py-5">
              <button
                type="reset"
                ref={cancelButtonRef}
                className="text-base font-medium rounded-lg bg-slate-100 text-slate-900 py-3 text-center cursor-pointer dark:bg-gray-700/75 dark:text-slate-200 dark:highlight-white/10"
                onClick={() => setCreateSystemNotificationOpen(false)}
              >
                取消
              </button>
              <button
                type="submit"
                className="text-base font-medium rounded-lg bg-sky-500 dark:bg-sky-800 text-white py-3 text-center cursor-pointer dark:highlight-white/20"
                onClick={() => setCreateSystemNotificationOpen(false)}
              >
                提交
              </button>
            </div>
          </div>
        </form>
      </header>
    </DialogComponent>
  );
}
