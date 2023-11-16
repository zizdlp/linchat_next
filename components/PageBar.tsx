interface PageBarProps {
  currentPage: number;
  pageNumber: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
export default function PageBar(props: PageBarProps) {
  if (props.pageNumber <= 1) {
    return <></>;
  }
  return (
    <div className="flex items-center justify-start bg-transparent  py-1 ">
      <div className="items-start justify-start ">
        <span className="text-sm">
          <span className="mr-2">共{props.pageNumber}页</span>{" "}
          <span
            onClick={() => {
              props.setCurrentPage(props.currentPage - 1);
            }}
            className={`${
              props.currentPage == 1 && "hidden"
            } cursor-pointer mr-0.5`}
          >
            上一页
          </span>
          <span
            onClick={() => {
              props.setCurrentPage(1);
            }}
            className={`mx-0.5 cursor-pointer ${
              props.currentPage == 1 && "hidden"
            }`}
          >
            1
          </span>
          <span className={`${props.currentPage - 2 <= 1 && "hidden"}`}>
            ...
          </span>
          <span
            onClick={() => {
              props.setCurrentPage(props.currentPage - 2);
            }}
            className={`mx-0.5 cursor-pointer ${
              props.currentPage - 2 <= 1 && "hidden"
            }`}
          >
            {props.currentPage - 2}
          </span>
          <span
            onClick={() => {
              props.setCurrentPage(props.currentPage - 1);
            }}
            className={`mx-0.5 cursor-pointer ${
              props.currentPage - 1 <= 1 && "hidden"
            }`}
          >
            {props.currentPage - 1}
          </span>
          <span className="mx-0.5 cursor-pointer text-sky-500">
            {props.currentPage}
          </span>
          <span
            onClick={() => {
              props.setCurrentPage(props.currentPage + 1);
            }}
            className={`mx-0.5 cursor-pointer ${
              props.currentPage + 1 >= props.pageNumber && "hidden"
            }`}
          >
            {props.currentPage + 1}
          </span>
          <span
            onClick={() => {
              props.setCurrentPage(props.currentPage + 1);
            }}
            className={`mx-0.5 cursor-pointer ${
              props.currentPage + 2 >= props.pageNumber && "hidden"
            }`}
          >
            {props.currentPage + 2}
          </span>
          <span
            className={`${
              props.currentPage + 3 >= props.pageNumber && "hidden"
            }`}
          >
            ...
          </span>
          <span
            onClick={() => {
              props.setCurrentPage(props.pageNumber);
            }}
            className={`mx-0.5 cursor-pointer ${
              props.currentPage == props.pageNumber && "hidden"
            }`}
          >
            {props.pageNumber}
          </span>
          <span
            onClick={() => {
              props.setCurrentPage(props.currentPage + 1);
            }}
            className={`${
              props.currentPage == props.pageNumber && "hidden"
            } cursor-pointer ml-0.5`}
          >
            下一页
          </span>{" "}
        </span>
      </div>
    </div>
  );
}
