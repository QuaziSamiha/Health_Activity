import PersonalBests from "../PersonalBests/PersonalBests";
import PopularActivites from "../PopularActivities/PopularActivites";
import Profile from "../Profile/Profile";
import WeeklySchedule from "../WeeklySchedule/WeeklySchedule";

const Home = () => {
  // console.log("this is form home");
  return (
    <section className="bg-white w-10/12 flex flex-col-reverse lg:flex-row rounded-r-lg">
      <section className="lg:w-8/12 h-fit bg-[#f6f7fb] m-1 lg:m-4 rounded-md">
        <PopularActivites />
        <section className="lg:grid grid-cols-5 gap-4 my-8">
          <div className="col-span-3">
            <WeeklySchedule />
          </div>
          <div className="col-span-2">
            <PersonalBests />
          </div>
        </section>
      </section>
      <section className="w-full md:w-6/12 lg:w-3/12 bg-[#f6f7fb] lg:m-4 rounded-md">
        <Profile />
      </section>
    </section>
  );
};

export default Home;
