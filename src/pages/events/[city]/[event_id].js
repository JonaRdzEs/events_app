import RegisterForEventForm from "@/components/RegisterForEventForm";
import EventDescription from "@/components/EventDescription";
import { descriptions } from "@/data/event-descriptions";

function Event({ event }) {
  return (
    <div className="w-full mt-16">
      <img
        className="w-full h-48 md:h-[550px] object-cover rounded-sm"
        src={event.image}
        alt=""
      />
      <h2 className="font-bold text-center text-3xl my-10">{event.title}</h2>
      <div className="[&>*]:text-center [&>*]:my-4 [&>ul]:m-8 [&>ul]:w-full [&>ul]:mx-auto [&>ul]:list-decimal [&>ul>li]:my-3">
        <EventDescription>{descriptions[event.id]}</EventDescription>
      </div>
      <div className="flex justify-center items-center gap-5 flex-col w-3/4 mt-10 m-auto">
        <h6 className="text-center font-semibold text-xl">Get registered for this event</h6>
        <p className="text-center">
          {`Embark on an unforgettable journey with ${event.title} – a gathering
          that promises excitement, connection, and moments that linger in the
          heart. Don't just be a spectator; become a vital part of this
          extraordinary experience!`}
        </p>
        <RegisterForEventForm />
      </div>
    </div>
  );
}

export default Event;

export async function getStaticPaths() {
  const { allEvents } = await import("@/data/data.json");
  const paths = allEvents.map((event) => ({
    params: {
      city: event.city.toString(),
      event_id: event.id.toString(), // has to be the same name
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
console.log(context);
  const { event_id } = context?.params || {};
  const { allEvents } = await import("@/data/data.json");
  const event = allEvents.find((ev) => ev.id === event_id);
  return {
    props: {
      event,
    },
  };
}
