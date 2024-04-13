import FormIcon from "@/components/icons/FormIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import PartyIcon from "@/components/icons/PartyIcon";
import PlaneIcon from "@/components/icons/PlaneIcon";
import StatsSection from "@/components/StatsSection";

function ContactUS() {
  return (
    <div>
      <h4 className="text-3xl text-center lg:text-6xl font-bold my-16">
        Join the Global Celebration: Your Passport to Unforgettable Events!
      </h4>
      <div className="w-full my-16 md:h-[450px] block md:relative lg:mb-36 md:my-20">
        <img
          className="w-full h-40 md:h-full object-cover"
          src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="bg-green-600 rounded-sm md:w-[95%] py-6 px-3 md:p-12 md:absolute md:top-48 md:left-4 lg:left-10 lg:-bottom-16">
          <h6 className="text-white font-semibold text-2xl mb-5">John Doe</h6>
          <p className="text-white text-md ">
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
        <h5 className="text-3xl lg:text-5xl font-bold text-center mb-7">Why choose us?</h5>
        <p className="text-lg text-center mb-14">
          At EventVoyager, we stand out as your premier destination for event
          registration, offering an unparalleled experience that goes beyond
          just signing up. Here's why you should choose us:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-6 md:gap-8 md:[&>*:nth-child(4)]:col-span-full">
          <StatsSection 
            icon={<FormIcon className="w-16 h-16 md:w-20 md:h-20" color="#333333" />}
            digit="1M+"
            text="Registrations"
          />
          <StatsSection 
            icon={<LocationIcon className="w-16 h-16 md:w-20 md:h-20" color="#333333" />}
            digit="50+"
            text="Countries"
          />
          <StatsSection 
            icon={<PartyIcon className="w-16 h-16 md:w-20 md:h-20" color="#333333" />}
            digit="10K+"
            text="Events"
          />
          <StatsSection 
            icon={<PlaneIcon className="w-16 h-16 md:w-20 md:h-20" color="#333333" />}
            digit="100K+"
            text="Trips"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
