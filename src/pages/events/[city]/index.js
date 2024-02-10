import EventCard from "@/components/EventCard";
import { useRouter } from "next/router";
import { formatCityName } from "@/utils";

function Events({ events }) {
  const router = useRouter();

  return (
    <>
      <h3 className="text-3xl font-bold mb-10">Events in {formatCityName(router.query?.city)}</h3>
      <div className="grid grid-cols-2 gap-x-12 gap-y-16">
        {events?.map((event) => (
          <EventCard
            key={event.id}
            url={`/events/${event.city}/${event.id}`}
            title={event.title}
            description={event.description}
            imageSrc={event.image}
          />
        ))}
      </div>
    </>
  );
}

export default Events;

export async function getStaticPaths() {
  const { events_categories } = await import("@/data/data.json");
  const paths = events_categories.map((event) => ({
    params: {
      city: event.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("@/data/data.json");
  console.log(context);
  const { city } = context?.params || {};
  console.log(city);
  const events_for_city = allEvents.filter((event) => event.city === city);
  console.log(events_for_city)
  return {
    props: {
      events: events_for_city,
    },
  };
}
