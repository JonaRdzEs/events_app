import Link from "next/link";
import RightArrow from "./icons/RightArrow";

function GoToEventButton({ url }) {
  return (
    <Link href={url}>
      <button className="flex justify-center items-center bg-green-500 rounded-full w-12 h-12 md:w-[60px] md:h-[60px]">
        <RightArrow width="25px" height="25px" />
      </button>
    </Link>
  );
}

export default GoToEventButton;
