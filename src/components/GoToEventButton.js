import Link from "next/link";
import RightArrow from "./icons/RightArrow";

function GoToEventButton({ url }) {
  return (
    <Link href={url}>
      <button className="flex justify-center items-center bg-green-500 rounded-full w-[60px] h-[60px]">
        <RightArrow width="30px" height="30px" />
      </button>
    </Link>
  );
}

export default GoToEventButton;
