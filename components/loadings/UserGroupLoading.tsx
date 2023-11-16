import ListGroupWrapper from "../wrappers/ListGroupWrapper";
import MasonryWrapper from "../wrappers/MasonryWrapper";
export default function UserGroupLoading() {
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
      </header>
      <MasonryWrapper>
        {listModelInfo.map((model, index) => (
          <div
            key={index}
            className="relative rounded-md my-4 w-full bg-slate-200 dark:bg-slate-600 h-[10rem] animate-pulse"
          ></div>
        ))}
      </MasonryWrapper>
    </ListGroupWrapper>
  );
}
