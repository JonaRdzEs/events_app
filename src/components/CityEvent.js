import Link from "next/link";
import RightArrow from "./icons/RightArrow";

function CityEvent({ id, title, image, description, url }) {
  return (
    <div>
      <div className={`h-[555px] relative bg-neutral-900/[0.98] rounded-lg`}>
        <img className="h-full w-full object-cover mix-blend-overlay" src={image} alt="" />
        <Link href={url}>
          <a className="hover:border-b-8 border-white hover:decoration-white absolute flex justify-center items-center gap-4 top-1/2 left-1/3 rounded-sm">
            <h4 className="text-white font-bold text-4xl text-center pb-4">
              {title}
            </h4>
            <RightArrow />
          </a>
        </Link>
        
      </div>
      <p className="text-[#333333] mt-8 text-xl">{description}</p>
    </div>
  );
}

export default CityEvent;
