import GoToEventButton from "./GoToEventButton";

function EventCard({ url = "", title = "", description = "", imageSrc = "" }) {
  return (
    <div>
      <div className="bg-green-700 h-44 w-full rounded-lg pt-9">
        <img className="rounded-lg w-11/12 h-44 lg:w-4/5 xl:h-60 object-cover m-auto" src={imageSrc} alt="" />
      </div>
      <div className="mt-12 xl:mt-28 flex justify-center items-center flex-col gap-3 p-4">
        <h5 className="font-semibold text-lg text-center lg:text-2xl">{title}</h5>
        <p className="line-clamp-2 text-sm lg:text-lg text-center">{description}</p>
        <GoToEventButton url={url} />
      </div>
    </div>
  );
}

export default EventCard;
