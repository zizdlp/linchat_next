import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
type DialogCompentProps = {
  children: React.ReactNode;
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function DialogComponent(props: DialogCompentProps) {
  function closeModal() {
    props.setShowDialog(false);
  }
  return (
    <Transition appear show={props.showDialog} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-transparent backdrop-blur-sm backdrop-brightness-50 bg-opacity-50 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto dark:text-slate-300 md:p-20 flex flex-col  justify-start pt-4 md:justify-center lg:p-28">
          <div className="mx-4 md:mx-[max(0px,calc(50%-25rem))] ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex overflow-hidden  flex-col  border-slate-200/5 dark:border-slate-800/75 border rounded-md md:rounded-lg bg-white dark:bg-slate-800/75 ">
                {props.children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
