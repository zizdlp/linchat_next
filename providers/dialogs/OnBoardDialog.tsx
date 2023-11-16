"use client";
import { useContext, useRef, useState } from "react";
import DialogComponent from "../../components/DialogComponent";
import { OperationContext } from "../OperationProvider";
import {
  MdOutlineNotificationsNone,
  MdTask,
  MdDone,
  MdAdd,
} from "react-icons/md";
import { SiWelcometothejungle } from "react-icons/si";
import OnBoardNotification from "@/components/onboards/OnBoardNotification";
import OnBoardCreatePost from "@/components/onboards/OnBoardCreatePost";
import OnBoardDone from "@/components/onboards/OnBoardDone";
import { BiLockAlt } from "react-icons/bi";
import OnBoardLock from "@/components/onboards/OnBoardLock";
import { markUserOnBoarded } from "@/webfetch/user_api";
import { useRouter } from "next/navigation";
import { UserStateContext } from "../UserStateProvider";
import OnBoardWelcome from "@/components/onboards/OnBoardWelcome";
export default function OnBoardDialog() {
  const [step, setStep] = useState(0);
  const [mockOpen, setMockOpen] = useState(true);
  const { currentUserID } = useContext(UserStateContext);
  const {
    onBoardOpen,
    setOnBoardOpen,
    mutationUpdateUser,
    setMutationUpdateUser,
  } = useContext(OperationContext);
  const router = useRouter();
  const IconText = ({
    Icon,
    currentStep,
  }: {
    Icon: any;
    currentStep: number;
  }) => (
    <li
      onClick={() => {
        setStep(currentStep);
      }}
      className={`flex w-full items-center ${
        step == currentStep
          ? "text-blue-600 dark:text-blue-500 after:border-blue-100 dark:after:border-blue-800"
          : currentStep < step
          ? "text-green-600 dark:text-green-500 after:border-green-100 dark:after:border-green-800"
          : "after:border-gray-100 dark:after:border-gray-700"
      }  after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block `}
    >
      <span
        className={`${
          step == currentStep
            ? "bg-blue-100 dark:bg-blue-800"
            : currentStep < step
            ? "bg-green-100 dark:bg-green-800"
            : "bg-gray-100 dark:bg-gray-700"
        } flex items-center justify-center w-10 h-10   rounded-full lg:h-12 lg:w-12   shrink-0`}
      >
        <Icon />
      </span>
    </li>
  );
  return (
    <DialogComponent showDialog={onBoardOpen} setShowDialog={setMockOpen}>
      <header className="justify-center px-4 py-4 overflow-auto relative flex text-slate-500 flex-row items-center border-b border-slate-300/75 dark:border-slate-800/75">
        <ol className="flex items-center w-full">
          <IconText
            Icon={step <= 0 ? SiWelcometothejungle : MdDone}
            currentStep={0}
          />
          <IconText Icon={step <= 1 ? MdAdd : MdDone} currentStep={1} />
          <IconText
            Icon={step <= 2 ? MdOutlineNotificationsNone : MdDone}
            currentStep={2}
          />
          <IconText Icon={step <= 3 ? BiLockAlt : MdDone} currentStep={3} />

          <li
            className={`${
              step == 4 && "text-blue-600 dark:text-blue-500"
            } flex items-center w-full `}
            onClick={() => {
              setStep(4);
            }}
          >
            <span
              className={`${
                step == 4
                  ? "bg-blue-100 dark:bg-blue-800"
                  : "bg-gray-100 dark:bg-gray-700"
              }  flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12  shrink-0`}
            >
              <MdTask />
            </span>
          </li>
        </ol>
      </header>
      <div>
        {step == 0 && <OnBoardWelcome />}
        {step == 1 && <OnBoardCreatePost />}
        {step == 2 && <OnBoardNotification />}
        {step == 3 && <OnBoardLock />}
        {step == 4 && <OnBoardDone />}
      </div>
      <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6 p-4 sm:px-6 sm:py-5 lg:p-4 xl:px-6 xl:py-5 border-t border-slate-300/75 dark:border-slate-800/75">
        <button
          className="text-base font-medium rounded-lg bg-slate-100 text-slate-900 py-3 text-center cursor-pointer dark:bg-gray-700/75 dark:text-slate-200 dark:highlight-white/10"
          onClick={() => {
            if (step >= 1) {
              setStep(step - 1);
            }
          }}
        >
          上一步
        </button>
        <button
          className="text-base font-medium rounded-lg bg-sky-500 dark:bg-sky-800 text-white py-3 text-center cursor-pointer dark:highlight-white/20"
          onClick={() => {
            if (step < 4) {
              setStep(step + 1);
            } else {
              markUserOnBoarded({}).then((data) => {
                if (data) {
                  setMutationUpdateUser(!mutationUpdateUser);
                  setOnBoardOpen(false);
                  router.push(`/workspace/${currentUserID}`);
                }
              });
            }
          }}
        >
          {step == 4 && <>完成</>}
          {step < 4 && <>下一步</>}
        </button>
      </div>
    </DialogComponent>
  );
}
