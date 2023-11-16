"use client";
import { SideBarContext } from "@/providers/SideBarProvider";
import { useContext } from "react";
import Masonry from "react-masonry-css";
interface MasonryWrapperProps {
  children: React.ReactNode;
}

export default function MasonryWrapper(props: MasonryWrapperProps) {
  const { sideBarOpen } = useContext(SideBarContext);
  const breakpointColumnsObj = {
    default: sideBarOpen ? 4 : 5,
    1920: sideBarOpen ? 4 : 5,
    1536: sideBarOpen ? 3 : 4,
    1280: sideBarOpen ? 2 : 3,
    1024: sideBarOpen ? 1 : 2,
    768: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {props.children}
    </Masonry>
  );
}
