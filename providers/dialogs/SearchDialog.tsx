"use client";

import DialogComponent from "@/components/DialogComponent";
import React, { useContext, useState } from "react";
import SearchHeader from "@/components/searchs/SearchHeader";
import SearchFooter from "@/components/searchs/SearchFooter";
import SearchUser from "@/components/searchs/SearchUser";
import SearchPost from "@/components/searchs/SearchPost";
import { SearchDialogContext } from "@/providers/SearchDialogProvider";

import { Tab } from "@headlessui/react";
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
export default function SearchDialog() {
  const { searchDialogOpen, setSearchDialogOpen } =
    useContext(SearchDialogContext);
  const [query, setquery] = useState("");
  const [loading, setloading] = useState(false);

  let categories = ["用户", "帖子"];

  return (
    <DialogComponent
      showDialog={searchDialogOpen}
      setShowDialog={setSearchDialogOpen}
    >
      <SearchHeader
        showDialog={searchDialogOpen}
        setShowDialog={setSearchDialogOpen}
        loading={loading}
        setquery={setquery}
      />

      <div className="px-2 pt-2 md:px-4">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-lg md:rounded-xl bg-slate-200/75 dark:bg-slate-900/75 p-1">
            {categories.map((category, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-xs md:text-sm font-medium  leading-3 md:leading-5  focus:outline-none",
                    selected
                      ? "bg-white dark:bg-slate-700/75 shadow text-blue-700 dark:text-slate-200"
                      : "text-slate-700 dark:text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-900/25 hover:text-blue-800 dark:hover:text-slate-300"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel key={1}>
              <SearchUser
                query={query}
                setloading={setloading}
                setShowDialog={setSearchDialogOpen}
              />
            </Tab.Panel>
            <Tab.Panel key={2}>
              <SearchPost
                query={query}
                setloading={setloading}
                setShowDialog={setSearchDialogOpen}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <SearchFooter />
    </DialogComponent>
  );
}
