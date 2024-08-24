import Head from "next/head";
import CityEvent from "@/components/CityEvent";

function EventsPage({ events }) {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <div className="flex flex-col gap-14 items-center pt-16">
        {events?.map((event) => (
          <CityEvent key={event.id} {...event} url={`/events/${event.id}`} />
        ))}
      </div>
    </>
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
