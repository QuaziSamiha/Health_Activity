import ScheduleCard from "./ScheduleCard";
// done
const WeeklySchedule = () => {
  const schedules = [
    {
      date: 13,
      day: "Mon",
      name: "Swimming",
      c1: "#7f8de1",
      c2: "#bfeffa",
    },
    {
      date: 15,
      day: "Wed",
      name: "Yoga",
      c1: "#debd71",
      c2: "#f7f7aa",
    },
    {
      date: 17,
      day: "Fri",
      name: "Tennis",
      c1: "#9be7cf",
      c2: "#e7fbc3",
    },
    {
      date: 18,
      day: "Sat",
      name: "Hiking",
      c1: "#fb92bd",
      c2: "#fce1c3",
    },
  ];
  return (
    <section className="m-3">
        <h1 className="text-sm font-semibold">Weekly Schedule</h1>
        <div>
          {schedules.map((schedule, index) => (
            <ScheduleCard key={index} schedule={schedule} />
          ))}
        </div>
      </section>
  );
};

export default WeeklySchedule;
