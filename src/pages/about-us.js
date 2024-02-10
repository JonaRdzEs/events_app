import FormIcon from "@/components/icons/FormIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import PartyIcon from "@/components/icons/PartyIcon";
import TrophyIcon from "@/components/icons/TrophyIcon";
import StatsSection from "@/components/StatsSection";

function ContactUS() {
  return (
    <div>
      <h4 className="text-6xl font-bold my-16">
        Join the Global Celebration: Your Passport to Unforgettable Events!
      </h4>
      <div className="w-full h-[450px] relative mb-36">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="bg-green-600 rounded-sm w-[95%] p-12 absolute left-10 -bottom-16">
          <h6 className="text-white font-semibold text-2xl mb-5">John Doe</h6>
          <p className="text-white text-lg">
            “Registering for events has never been this exhilarating! Thanks to
            EventVoyager, my journey into the world of global celebrations has
            been nothing short of extraordinary. The seamless process, the
            incredible variety of events, and the convenience of it all have
            turned me into a perpetual event enthusiast. It's not just
            registration; it's a thrilling adventure waiting to unfold.
            EventVoyager – where every event is a memory in the making!”
          </p>
        </div>
      </div>
      <div className="w-3/4 m-auto">
        <h5 className="text-5xl font-bold text-center mb-7">Why choose us?</h5>
        <p className="text-lg text-center mb-14">
          At EventVoyager, we stand out as your premier destination for event
          registration, offering an unparalleled experience that goes beyond
          just signing up. Here's why you should choose us:
        </p>
        <div className="grid grid-cols-3 place-items-center gap-8 [&>*:nth-child(4)]:col-span-full">
          <StatsSection 
            icon={<FormIcon />}
            digit="1M+"
            text="Registration"
          />
          <StatsSection 
            icon={<LocationIcon />}
            digit="50+"
            text="Countries"
          />
          <StatsSection 
            icon={<PartyIcon />}
            digit="10K+"
            text="Events"
          />
          <StatsSection 
            icon={<TrophyIcon />}
            digit="95%"
            text="Customer satisfaction rate"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
