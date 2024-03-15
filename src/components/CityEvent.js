import Link from "next/link";
import RightArrow from "./icons/RightArrow";

function CityEvent({ id, title, image, description, url }) {
  return (
    <div className="w-full">
      <div className={`h-56 lg:h-[555px] relative bg-neutral-900/[0.98] rounded-lg`}>
        <img className="h-full w-full object-cover mix-blend-overlay" src={image} alt="" />
        <Link href={url}>
          <a className="hover:border-b-8 border-white hover:decoration-white absolute flex justify-center items-center gap-4 top-1/2 left-1/4 lg:left-1/3 rounded-sm">
            <h4 className="text-lg text-white font-bold lg:text-4xl text-center pb-4">
              {title}
            </h4>
            <RightArrow width="15px" height="15px"/>
          </a>
        </Link>
        
      </div>
      <p className="text-sm text-center text-[#333333] mt-8 lg:text-xl">{description}</p>
    </div>
  );
}

export default CityEvent;
