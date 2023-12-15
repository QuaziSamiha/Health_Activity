import cicleRider from "../../../assets/images/popularActivities.jpg";
// done
const PersonalBests = () => {
  return (
    <section className="h-full text-[#201e26] font-semibold m-3">
      <h1 className="text-sm font-semibold">Personal Bests</h1>
      <div className="h-full">
        <div className="bg-[#d1c2f2] h-28 mt-1 rounded-lg flex justify-evenly items-center">
          <h1 className="text-xs">Fastest 5k Run: 22min</h1>
          <img src={cicleRider} className="h-12 w-12" alt="" />
        </div>
        <div className="flex h-28 mt-2 text-xs">
          <div className="bg-[#f1d1a8] w-1/2 rounded-lg p-2 mr-1">
            <p>Longest Distance Cycling : 4 miles</p>
            <div className="flex justify-end items-end mt-2  lg:mt-6">
              <img src={cicleRider} className="h-8 w-10" alt="" />
            </div>
          </div>
          <div className="bg-[#d0e9d7] w-1/2 rounded-lg p-2 ml-1">
            <p>Longest Roller-Skating: 2 hours</p>
            <div className="flex justify-end items-end mt-2 lg:mt-6">
              <img src={cicleRider} className="h-10 w-10" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBests;
