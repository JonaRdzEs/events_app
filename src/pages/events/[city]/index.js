import EventCard from "@/components/EventCard";

function Events({ events }) {
  return (
    <div>
      <h1>Events in London</h1>
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
  console.log(paths);
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
