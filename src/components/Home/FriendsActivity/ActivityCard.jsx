// done
// eslint-disable-next-line react/prop-types
const ActivityCard = ( { activity } ) => {
  // console.log( activity );
  // eslint-disable-next-line react/prop-types
  const { proPic, name, image, comment, emoji } = activity;
  return (
    <div className="bg-white rounded h-52 lg:h-fit my-6 mx-2  lg:my-2 p-2">
      <div className="flex my-1">
        <img className="rounded-full h-6 w-6" src={proPic} alt="" />
        <h1 className="px-1">{name}</h1>
      </div>
      <img className="h-28 w-full rounded-md my-2" src={image} alt="" />
      <div className="text-xs">
        <span>{comment}</span>
        <span>
          {
            // eslint-disable-next-line react/prop-types
            emoji.map( ( em, index ) => (
              <span key={index}>{em}</span>
            ) )
          }
        </span>
      </div>
    </div>
  )
}

export default ActivityCard;