import Head from "next/head";
import CityEventCard from "@/components/CityEventCard";

const IMAGE_SRC = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Home({ events }) {
  return (
    <>
      <Head>
        <title>Event Voyager</title>
        <meta name="EventVoyager" content="Event booking application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-20 lg:my-32 lg:h-96 lg:flex lg:flex-row lg:justify-between">
        <h1 className="text-3xl md:text-6xl font-bold w-full text-center self-center lg:w-1/2 lg:text-6xl lg:text-left xl:text-7xl">
          City Beats: <br/> Dive into a World of Unmissable Events!
        </h1>
        <div className="hidden lg:flex lg:justify-center w-full lg:w-1/2 relative">
          <img className="w-40 h-40 rounded-full z-10 right-32 -top-0 object-cover lg:w-[370px] lg:h-[370px] lg:absolute" src={IMAGE_SRC}  alt="lake" />
          <span className="w-40 h-40 -ml-16 lg:w-[370px] lg:h-[370px] inline-block rounded-full bg-green-500 lg:absolute right-0 top-0"></span>
        </div>
      </div>
      <main className="flex flex-col gap-16">
        {events?.map((event) => (
          <CityEventCard
            key={event.id}
            url={`/events/${event.id}`}
            title={event.title}
            description={event.description}
            imageSrc={event.image}
          />
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const { main_events } = await import("@/data/data.json");

  return {
    props: {
      events: main_events || [],
    },
  };
}
