import Link from "next/link";
import RightArrow from "./icons/RightArrow";

function CityEvent({ id, title, image, description, url }) {
  return (
    <div className="w-full">
      <div className={`h-56 lg:h-96 xl:h-[460px] relative bg-green-500 rounded-lg flex justify-center items-center`}>
        <img className="h-full w-full object-cover mix-blend-overlay opacity-[0.40]" src={image} alt="" />
        <Link href={url}>
          <a className="hover:shadow-white hover:shadow-[0_6px_0_0_rgba(1,1,1,1)] hover:decoration-white absolute flex justify-center items-center gap-4">
            <h4 className="text-lg text-white font-bold lg:text-4xl text-center ">
              {title}
            </h4>
            <RightArrow className="w-[15px] h-[15px] lg:w-6 lg:h-6" width="15px" height="15px"/>
          </a>
        </Link>
        
      </div>
      <p className="text-sm text-center text-[#333333] mt-8 lg:text-xl">{description}</p>
    </div>
  );
}

export default CityEvent;
1