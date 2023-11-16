"use client";
import { useEffect, useRef } from "react";
import ProfileComponent from "../users/ProfileComponent";
import { ListPostInfo, ListUserInfo } from "@/types/model";
import PostComponent from "../posts/PostComponent";
interface CardWrapperProps {
  ListModelInfo: ListUserInfo | ListPostInfo;
  newLimit: any;
  isLast: boolean;
}
export default function CardWrapper(props: CardWrapperProps) {
  /**
   * Select the Card component with useRef
   */
  // const cardRef = useRef();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isPostInfo = "post_id" in props.ListModelInfo;
  /**
   * Implement Intersection Observer to check if the last Card in the array is visible on the screen, then set a new limit
   */
  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (props.isLast && entry.isIntersecting) {
        props.newLimit();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  }, [props.isLast, props.newLimit]);

  return (
    <div ref={cardRef}>
      {isPostInfo ? (
        <PostComponent ListPostInfo={props.ListModelInfo as ListPostInfo} />
      ) : (
        <ProfileComponent ListUserInfo={props.ListModelInfo as ListUserInfo} />
      )}
    </div>
  );
}
