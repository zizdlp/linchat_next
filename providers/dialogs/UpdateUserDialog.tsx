"use client";
import { useContext, useRef } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { updateUser } from "@/webfetch/user_api";

import { useState } from "react";
import { HiFingerPrint } from "react-icons/hi";
import { updateUserValidate } from "../../utils/validate";
import { fileToBase64 } from "../../utils/util";
import DialogComponent from "../../components/DialogComponent";
import { OperationContext } from "../OperationProvider";
export default function UpdateUserDialog() {
  const {
    updateUserOpen,
    setUpdateUserOpen,
    mutationUpdateUser,
    setMutationUpdateUser,
  } = useContext(OperationContext);

  const cancelButtonRef = useRef(null);
  const [show, setShow] = useState({ password: false, cpassword: false });
  const formik = useFormik({
    initialValues: {
      motto: "",
      password: "",
      visible: "",
      image_string: "",
    },
    validate: updateUserValidate,
    onSubmit: onSubmit,
  });
  async function onSubmit(values: any) {
    // 手动检查表单的有效性
    const errors = updateUserValidate(values);
    if (Object.keys(errors).length > 0) {
      return;
    }
    const id = toast(`更新用户信息...`, {
      type: toast.TYPE.INFO,
      isLoading: true,
    });
    fileToBase64(values.image_string)
      .then((base64String) => {
        values.image_string = base64String;
      })
      .catch((rejected) => {
        console.log("fileToBase64 error");
      });
    const data = await updateUser(values, id);
    if (data) {
      toast.update(id, {
        render: `更新成功`,
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        autoClose: 1000,
      });
      setMutationUpdateUser(!mutationUpdateUser);
      setUpdateUserOpen(false);
      formik.resetForm();
    }
  }
  return (
    <DialogComponent
      showDialog={updateUserOpen}
      setShowDialog={setUpdateUserOpen}
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
                  修改用户信息
                </label>
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="repo_name"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                >
                  个性签名：
                </label>
                <div className="flex content-center	">
                  <input
                    type="text"
                    id="motto"
                    autoComplete="motto"
                    placeholder={`自我介绍或者签名`}
                    className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:placeholder-slate-600 dark:text-slate-300 appearance-none dark:bg-slate-800/50  focus:outline-none  dark:border-gray-700 placeholder-slate-400"
                    {...formik.getFieldProps("motto")}
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="repo_name"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-200 pb-2"
                >
                  更新头像:
                </label>
                <div className="flex content-center	">
                  <input
                    title="Choose a image please"
                    type="file"
                    onChange={(event) => {
                      if (event.currentTarget.files != undefined) {
                        const selectedFile = event.currentTarget.files[0];
                        if (selectedFile) {
                          const fileExtension = selectedFile.name
                            .split(".")
                            .pop()
                            ?.toLowerCase();
                          if (fileExtension === "png") {
                            formik.setFieldValue("image_string", selectedFile);
                          } else {
                            alert("请上传png格式图片");
                            // 或者清除选择的文件
                            event.currentTarget.value = "";
                            formik.setFieldValue("image_string", null);
                          }
                        }
                      }
                    }}
                    className="block w-full text-sm text-slate-500 file:text-sm file:font-semibold file:py-2 file:px-4 file:bg-sky-50 dark:file:bg-slate-700 file:text-sky-700 dark:file:text-slate-200 file:rounded-full file:border-0 file:mr-4 hover:file:bg-sky-100 focus:none focus:outline-sky-200 focus:rounded-full dark:focus:outline-1 dark:focus:outline-slate-700	focus:outline-dashed"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="visible"
                  className="block text-sm font-medium text-gray-700  dark:text-slate-200"
                >
                  可见性:
                </label>
                <select
                  id="visible"
                  name="visible"
                  autoComplete="visible"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-slate-800/50 dark:text-slate-200 dark:border-gray-700"
                  value={formik.values.visible}
                  onChange={formik.handleChange}
                >
                  <option value={""} label="修改用户类型">
                    修改用户类型
                  </option>
                  <option value={"public"} label="对他人可见">
                    对他人可见
                  </option>
                  <option value={"private"} label="对他人隐身">
                    对他人隐身
                  </option>
                </select>

                {formik.errors.visible && (
                  <span className="text-pink-600 text-sm">
                    {formik.errors.visible as string}
                  </span>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="repo_name"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                >
                  密码:
                </label>
                <div className="flex content-center	">
                  <input
                    type={`${show.password ? "text" : "password"}`}
                    id="password"
                    autoComplete="password"
                    placeholder={`请填入新密码`}
                    className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:placeholder-slate-600 dark:text-slate-300 appearance-none dark:bg-slate-800/50  focus:outline-none  dark:border-gray-700 placeholder-slate-400"
                    {...formik.getFieldProps("password")}
                  />
                  <span
                    className="icon flex items-center px-4"
                    onClick={() =>
                      setShow({ ...show, password: !show.password })
                    }
                  >
                    <HiFingerPrint size={25} />
                  </span>
                </div>
                {formik.errors.password && formik.touched.password ? (
                  <span className="text-pink-600 text-sm">
                    {formik.errors.password as string}
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
                onClick={() => setUpdateUserOpen(false)}
              >
                取消
              </button>
              <button
                type="submit"
                className="text-base font-medium rounded-lg bg-sky-500 dark:bg-sky-800 text-white py-3 text-center cursor-pointer dark:highlight-white/20"
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
