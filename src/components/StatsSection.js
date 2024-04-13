function StatsSection({ icon = null, digit = "1000", text = "Services" }) {
  return (
    <div className="flex justify-center items-center gap-2 flex-col">
      {icon}
      <p className="text-4xl lg:text-7xl text-custom-gray font-bold">{digit}</p>
      <p className="text-lg lg:text-xl text-custom-gray text-center font-medium">{text}</p>
    </div>
  );
};

export default StatsSection;
