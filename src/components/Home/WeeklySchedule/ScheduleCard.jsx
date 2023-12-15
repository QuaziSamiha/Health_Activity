import cicleRider from "../../../assets/images/popularActivities.jpg";
// done
// eslint-disable-next-line react/prop-types
const ScheduleCard = ({ schedule }) => {
  //   console.log(schedule);
  // eslint-disable-next-line react/prop-types
  const { date, day, name, c1, c2 } = schedule;
  //   console.log(c1, c2);
  return (
    <div
        style={{ background: `linear-gradient(to right, ${c2}, ${c1})` }}
        className="border my-1 rounded-lg h-14"
      >
        <div className="flex justify-start items-center">
          <div className="m-2 px-2 border-r-2 border-[#3c3a3d] h-10 flex flex-col justify-center items-center  w-16">
            <h1 className="font-semibold text-lg">{date}</h1>
            <p className="text-xs">{day}</p>
          </div>
          <div className="flex justify-between w-full">
            <div className="h-10 mb-2">
              <p className="text-sm">{name}</p>
              <img src={cicleRider} className="h-6 w-6 rounded-full" alt="" />
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-[#f3f5fc] text-[#756658] text-xs rounded-2xl font-semibold px-4 py-1 mx-3">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ScheduleCard;
