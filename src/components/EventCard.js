import GoToEventButton from "./GoToEventButton";

function EventCard({ url = "", title = "", description = "", imageSrc = "" }) {
  return (
    <div>
      <div className="bg-green-700 h-44 w-full rounded-lg pt-9">
        <img className="rounded-lg w-4/5 h-60 object-cover m-auto" src={imageSrc} alt="" />
      </div>
      <div className="mt-28 flex justify-center items-center flex-col p-4">
        <h5 className="font-semibold text-2xl">{title}</h5>
        <p className="line-clamp-2 text-lg">{description}</p>
        <GoToEventButton url={url} />
      </div>
    </div>
  );
}

export default EventCard;
