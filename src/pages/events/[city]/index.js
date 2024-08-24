import Head from "next/head";
import EventCard from "@/components/EventCard";
import { useRouter } from "next/router";
import { formatCityName } from "@/utils";

function Events({ events }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Events in {formatCityName(router.query?.city)}</title>
      </Head>
      <h3 className="text-center text-3xl font-bold mt-7 mb-10 md:text-left">Events in {formatCityName(router.query?.city)}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
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
  const { city } = context?.params || {};
  const events_for_city = allEvents.filter((event) => event.city === city);
  return {
    props: {
      events: events_for_city,
    },
  };
}
