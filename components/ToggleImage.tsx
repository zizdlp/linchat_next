import Image from "next/image";
interface ToggleImageProps {
  show: boolean;
  className: string;
  src: string;
}

export default function ToggleImage(props: ToggleImageProps) {
  if (props.show) {
    return (
      <Image
        src={`data:image/png;base64,${props.src}`}
        alt="image"
        className={`${props.className}`}
        width={50}
        height={50}
      />
    );
  } else {
    return (
      <div
        className={`${props.className} "animate-pulse bg-slate-300 dark:bg-slate-700`}
      />
    );
  }
}
