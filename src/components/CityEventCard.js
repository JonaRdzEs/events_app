import GoToEventButton from "./GoToEventButton";

function CityEventCard({ url = "", title = "", description = "", imageSrc = "" }) {
  return (
    <section className="flex flex-col gap-3 lg:gap-9 lg:min-h-[460px] lg:[&:nth-child(even)]:flex-row-reverse [&:nth-child(even)>div>div:first-of-type]:-rotate-6 [&:nth-child(2)>div>div:first-of-type]:bg-yellow-400 [&:nth-child(3)>div>div:first-of-type]:bg-sky-500">
      <div className="lg:relative min-h-max w-5/6 m-auto lg:w-1/3">
        <div
          className="w-full bg-[#9DD89F] lg:w-48 lg:h-[420px] rounded-lg rotate-6 lg:absolute"
        ></div>
        <img
          className="w-full h-44 lg:w-80 lg:h-80 rounded-md max-w-none lg:relative lg:top-16 lg:left-10"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center lg:w-2/3">
        <h4 className="lg:text-2xl font-bold text-custom-gray">{title}</h4>
        {description ? (
          <p className=" text-sm font-normal text-center lg:text-xl">{description}</p>
        ) : null}
        <GoToEventButton url={url} />
      </div>
    </section>
  );
}

export default CityEventCard;
