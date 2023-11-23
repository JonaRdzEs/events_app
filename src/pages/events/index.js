import EventCard from "@/components/EventCard";

function EventsPage({ events }) {
  return (
    <div>
      <h1>My events page</h1>
      {events?.map((event) => (
        <EventCard
          key={event.id}
          url={`/events/${event.id}`}
          title={event.title}
          imageSrc={event.image}
        />
      ))}
    </div>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("@/data/data.json");

  return {
    props: {
      events: events_categories,
    },
  };
}
