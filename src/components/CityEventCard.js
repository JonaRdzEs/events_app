import GoToEventButton from "./GoToEventButton";

function CityEventCard({ url = "", title = "", description = "", imageSrc = "" }) {
  return (
    <section className="flex gap-9 min-h-[460px] even:flex-row-reverse">
      <div className="relative min-h-max w-1/3">
        <div
          className="bg-[#9DD89F] w-48 h-[420px] rounded-lg rotate-6 absolute"
        ></div>
        <img
          className="w-80 h-80 rounded-md max-w-none relative top-16 left-10"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center w-2/3">
        <h4 className="text-2xl font-normal">{title}</h4>
        {description ? (
          <p className="font-thin text-xl">{description}</p>
        ) : null}
        <GoToEventButton url={url} />
      </div>
    </section>
  );
}

export default CityEventCard;
