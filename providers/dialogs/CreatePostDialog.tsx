"use client";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { createPostValidate } from "../../utils/validate";
import { createPost } from "@/webfetch/post_api";

import DialogComponent from "../../components/DialogComponent";
import { useContext, useRef } from "react";
import { OperationContext } from "@/providers/OperationProvider";

export default function CreatePostDialog() {
  const {
    createPostOpen,
    setCreatePostOpen,
    mutationCreatePost,
    setMutationCreatePost,
  } = useContext(OperationContext);

  const cancelButtonRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      visible: "private",
      post_title: "",
      shape: 0,
      model: 0,
      seed: -1,
      prompt: "",
    },
    validate: createPostValidate,
    onSubmit: handleSubmit,
  });
  async function handleSubmit(values: any) {
    setCreatePostOpen(false);
    const id = toast(`帖子创建中...`, {
      type: toast.TYPE.INFO,
      isLoading: true,
    });

    const data = await createPost(
      {
        visible: values.visible == "public" ? true : false,
        caption: values.post_title,
        shape: values.shape == "square" ? 1 : values.shape == "rect" ? 2 : 0,
        model:
          values.model == "real"
            ? 1
            : values.model == "2D"
            ? 2
            : values.model == "3D"
            ? 3
            : 0,
        seed: values.seed,
        prompt: values.prompt,
      },
      id
    );
    if (data) {
      toast.update(id, {
        render: `帖子创建成功，请等待任务排队处理通知`,
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        autoClose: 1000,
      });
      formik.resetForm();
      setMutationCreatePost(!mutationCreatePost);
    }
  }
  return (
    <DialogComponent
      showDialog={createPostOpen}
      setShowDialog={setCreatePostOpen}
    >
      <form
        className="w-fll flex lg:block md:overflow-hidden grow  justify-center overflow-auto  items-center  px-4 py-4  text-slate-700"
        onSubmit={formik.handleSubmit}
      >
        <div className="sm:overflow-hidden sm:rounded-md w-full">
          <div className="grid grid-cols-6 gap-4 gap-x-8 p-2">
            <div className="col-span-6 justify-center flex-center">
              <label
                htmlFor="post_title"
                className="block text-center pt-2 pb-6 text-2xl font-bold text-gray-700 dark:text-slate-50"
              >
                文本转图像
              </label>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="prompt"
                className="block text-sm font-medium text-gray-700 dark:text-slate-200"
              >
                提示词
              </label>
              <div className="flex content-center	">
                <textarea
                  id="prompt"
                  rows={3}
                  className="resize-none mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-slate-800/50 dark:text-slate-200 dark:border-gray-700 placeholder-slate-400 dark:placeholder-slate-600 "
                  {...formik.getFieldProps("prompt")}
                />
              </div>
              {formik.errors.prompt && formik.touched.prompt ? (
                <span className="text-pink-600 text-sm">
                  {formik.errors.prompt as string}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="post_title"
                className="block text-sm font-medium text-gray-700 dark:text-slate-200"
              >
                帖子描述
              </label>
              <div className="flex content-center	">
                <textarea
                  id="post_title"
                  rows={3}
                  className="resize-none mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-slate-800/50 dark:text-slate-200 dark:border-gray-700 placeholder-slate-400 dark:placeholder-slate-600 "
                  {...formik.getFieldProps("post_title")}
                />
              </div>
              {formik.errors.post_title && formik.touched.post_title ? (
                <span className="text-pink-600 text-sm">
                  {formik.errors.post_title as string}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="model"
                className="block text-sm font-medium text-gray-700  dark:text-slate-200 "
              >
                帖子风格
              </label>

              <select
                id="model"
                name="model"
                autoComplete="model"
                className="mt-1 block w-full rounded-md border  border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-slate-800/50 dark:text-slate-200 dark:border-gray-700 placeholder-slate-400 dark:placeholder-slate-600"
                value={formik.values.model}
                onChange={formik.handleChange}
              >
                <option value="" label="选择图像风格">
                  Select image style to generate
                </option>
                <option value="real" label="写实风">
                  real
                </option>
                <option value="2D" label="扁平卡通风">
                  2D
                </option>
                <option value="3D" label="3D卡通风">
                  3D
                </option>
              </select>
              {formik.errors.model && (
                <span className="text-pink-600 text-sm">
                  {formik.errors.model as string}
                </span>
              )}
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="seed"
                className="block text-sm font-medium text-gray-700  dark:text-slate-200"
              >
                种子
              </label>
              <div className="flex content-center	">
                <input
                  type="number"
                  id="seed"
                  autoComplete="seed"
                  placeholder={`选择随机数种子`}
                  className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-slate-800/50 dark:text-slate-200 dark:border-gray-700  placeholder-slate-400 dark:placeholder-slate-600 "
                  {...formik.getFieldProps("seed")}
                />
              </div>

              {formik.errors.seed && (
                <span className="text-pink-600 text-sm">
                  {formik.errors.seed as string}
                </span>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="shape"
                className="block text-sm font-medium text-gray-700  dark:text-slate-200 "
              >
                图片形状
              </label>
              <select
                id="shape"
                name="shape"
                autoComplete="shape"
                className="mt-1 block w-full rounded-md border  border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-slate-800/50 dark:text-slate-200 dark:border-gray-700 placeholder-slate-400 dark:placeholder-slate-600"
                value={formik.values.shape}
                onChange={formik.handleChange}
              >
                <option value="" label="选择需要生成的图片形状">
                  Select image shape to generate
                </option>
                <option value="rect" label="长方型">
                  长方形
                </option>
                <option value="square" label="正方形">
                  正方形
                </option>
              </select>
              {formik.errors.shape && (
                <span className="text-pink-600 text-sm">
                  {formik.errors.shape as string}
                </span>
              )}
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
              {formik.errors.visible && (
                <span className="text-pink-600 text-sm">
                  {formik.errors.visible as string}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6 p-4 sm:px-6 sm:py-5 lg:p-4 xl:px-6 xl:py-5">
            <button
              type="reset"
              ref={cancelButtonRef}
              className="text-base font-medium rounded-lg bg-slate-100 text-slate-900 py-3 text-center cursor-pointer dark:bg-gray-700/75 dark:text-slate-200 dark:highlight-white/10"
              onClick={() => setCreatePostOpen(false)}
            >
              取消
            </button>
            <button
              type="submit"
              className="text-base font-medium rounded-lg bg-sky-500 dark:bg-sky-800 text-white py-3 text-center cursor-pointer dark:highlight-white/20"
            >
              创建
            </button>
          </div>
        </div>
      </form>
    </DialogComponent>
  );
}
