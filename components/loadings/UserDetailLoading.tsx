import ListGroupWrapper from "../wrappers/ListGroupWrapper";
import MasonryWrapper from "../wrappers/MasonryWrapper";
export default function UserDetailLoading() {
  const listModelInfo = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  return (
    <ListGroupWrapper>
      <header className="relative z-20 mx-2  animate-pulse">
        <p className="mb-2 bg-slate-200 dark:bg-slate-600 w-48 h-6"></p>
        <p className="bg-slate-200 dark:bg-slate-600 w-96 h-9"></p>
        <div>
          <p className="mt-2  bg-slate-200 dark:bg-slate-600 w-full h-4"></p>
          <p className="mt-2  bg-slate-200 dark:bg-slate-600 w-full h-4"></p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 ">
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
        </div>
        <div className="h-24 flex space-x-4 justify-center mt-4">
          <div className="bg-slate-200 dark:bg-slate-700  w-24 h-24 rounded-full object-cover "></div>
          <div className="bg-slate-200 dark:bg-slate-700 rounded grow "></div>
          <div className="bg-slate-200 dark:bg-slate-700  w-24 h-24 rounded-md object-cover "></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 ">
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 ">
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
        </div>
        <div className="h-24 flex space-x-4 justify-center mt-4">
          <div className="bg-slate-200 dark:bg-slate-700  w-24 h-24 rounded-full object-cover "></div>
          <div className="bg-slate-200 dark:bg-slate-700 rounded grow "></div>
          <div className="bg-slate-200 dark:bg-slate-700  w-24 h-24 rounded-md object-cover "></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 ">
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
        </div>
      </header>
    </ListGroupWrapper>
  );
}
