import Image from "next/image";
import RegisterForEventForm from "@/components/RegisterForEventForm";

function Event({ event }) {
  console.log(event);
  return (
    <div>
      <h2>{event.title}</h2>
      <Image src={event.image}  width="900px" height="500px"/>
      <p>{event.description}</p>
      <RegisterForEventForm />
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
    }
  }));
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  console.log(context);
  const { event_id } = context?.params || {};
  const { allEvents } = await import("@/data/data.json");
  const event = allEvents.find((ev) => ev.id === event_id);
  return {
    props: {
      event,
    }
  }
}
