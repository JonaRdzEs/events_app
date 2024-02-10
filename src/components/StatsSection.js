function StatsSection({ icon = null, digit = "1000", text = "Services" }) {
  return (
    <div className="flex justify-center items-center gap-2 flex-col">
      {icon}
      <p className="text-2xl font-bold text-green-600">{digit}</p>
      <p className="text-lg text-green-600 font-semibold">{text}</p>
    </div>
  );
};

export default StatsSection;
