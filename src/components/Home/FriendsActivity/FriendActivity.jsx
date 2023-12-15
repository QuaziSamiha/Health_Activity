import cicleRider from "../../../assets/images/popularActivities.jpg";
import ActivityCard from "./ActivityCard";
// done
const FriendActivity = () => {
  const activites = [
    {
      id: 1,
      proPic: cicleRider,
      name: "Jane",
      image: cicleRider,
      comment: "I completed the 30-Days Running Streak Challenge",
      emoji: ["🏃", "🎉"],
    },
    {
      id: 2,
      proPic: cicleRider,
      name: "Jane",
      image: cicleRider,
      comment: "I just set a new record in cycling : 30 miles",
      emoji: ["💪"],
    },
  ];
  return (
    <section>
      {activites.map( ( activity ) => (
        <ActivityCard key={activity.id} activity={activity} />
      ) )}
    </section>
  );
};

export default FriendActivity;
