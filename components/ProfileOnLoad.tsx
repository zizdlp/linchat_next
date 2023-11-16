export default function ProfileOnLoad() {
  return (
    <div className="relative animate-pulse flex flex-col bg-slate-100 rounded-lg px-4 md:px-4 py-6 dark:bg-slate-800 dark:highlight-white/5">
      <div className="flex items-center space-x-4">
        <div className="bg-slate-200 dark:bg-slate-700 w-16 h-16 rounded-full object-cover "></div>
        <div className="flex-auto ">
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="space-y-3 py-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
      <blockquote className="mt-6 text-slate-700 dark:text-slate-300 animate-pulse ">
        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
        <div className="space-y-3 py-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
        </div>
      </blockquote>
    </div>
  );
}
