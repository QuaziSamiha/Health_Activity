import cicleRider from "../../../assets/images/popularActivities.jpg";
// done
const PopularActivites = () => {
  return (
    <section className="px-1">
      <h1 className="text-sm font-semibold ml-2 mt-1">Popular Activities</h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 gap-1 lg:gap-3 lg:h-72">
          <div className=" m-1 lg:mb-2">
            <img src={cicleRider} alt="" className="rounded-lg my-2"/>
            <h1 className="text-white text-end -mt-8 mx-3 font-semibold text-xs lg:text-sm">Tennis</h1>
          </div>
          <div className="  m-1 lg:mb-2 lg:col-span-2 lg:col-start-2 lg:col-end-4 lg:row-span-2 lg:row-start-1 lg:row-end-3">
            <img src={cicleRider} alt="" className="rounded-lg h-full w-full my-2"/>
            <h1 className="text-white text-end -mt-8 mx-3 font-semibold text-xs lg:text-sm">Running</h1>
          </div>
          <div className=" m-1 lg:mb-2 lg:row-start-2 lg:row-end-3">
            <img src={cicleRider} alt="" className="rounded-lg my-2 h-full w-full"/>
            <h1 className="text-white text-end -mt-8 mx-3 font-semibold text-xs lg:text-sm">Hikking</h1>
          </div>
          <div className=" m-1 lg:mb-2">
            <img src={cicleRider} alt="" className="rounded-lg my-2"/>
            <h1 className="text-white text-end -mt-8 mx-3 font-semibold text-xs lg:text-sm">Cycling</h1>
          </div>
          <div className=" m-1 lg:mb-2">
            <img src={cicleRider} alt="" className="rounded-lg my-2"/>
            <h1 className="text-white text-end -mt-8 mx-3 font-semibold text-xs lg:text-sm">Yoga</h1>
          </div>
          <div className=" m-1 lg:mb-2 lg:row-span-1 lg:col-span-2 lg:row-start-2 lg:row-end-3 lg:col-start-4 lg:col-end-6">
            <img src={cicleRider} alt="" className="h-full w-full rounded-lg my-2" />
            <h1 className="text-white text-end -mt-8 mx-3 font-semibold text-xs lg:text-sm">Swimming</h1>
          </div>
        </div>
      </section>
  );
};

export default PopularActivites;
