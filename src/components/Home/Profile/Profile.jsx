import { FaBell } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import cicleRider from "../../../assets/images/popularActivities.jpg";
import FriendActivity from "../FriendsActivity/FriendActivity";
// done
const Profile = () => {
  return (
    <section className="">
        <div className="flex justify-between items-center py-1 px-2">
          <FaBell />
          <FaMessage />
          <h1>kalsey Miler</h1>
          <img className="rounded-full h-8 w-8" src={cicleRider} alt="" />
        </div>
        <div className="bg-[#d6e3f8] h-28 m-2 rounded">
          <h1 className="text-sm font-semibold pl-2 pt-1">Active Calories</h1>
          <div className="flex justify-evenly mt-4">
            <div>
              <div
                className="radial-progress text-[#4b008b] h-12 w-12"
                style={{ "--value": 80, "--thickness": "5px" }}
                role="progressbar"
              >
                <span className="text-[#7c8394] text-sm"> 80%</span>
              </div>
            </div>
            <div className="text-xs text-[#43474e]">
              <p>
                <span className="font-semibold">Today:</span> 400
              </p>
              <p>
                <span className="font-semibold">This Week:</span> 1400
              </p>
              <p>
                <span className="font-semibold">This Month:</span> 3500
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" lg:pl-2 pt-1">
            <h1 className="text-sm font-semibold pl-3 lg:pl-2">Friends Activity</h1>
            <div>
              <FriendActivity />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Profile;
