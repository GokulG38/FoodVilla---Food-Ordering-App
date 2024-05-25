import { IMG_CDN_URL } from "./constants";


const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {

  return (
    <div className="w-48 h-72 p-4 m-2 bg-gray-200 flex flex-col justify-between rounded-lg">
      <img
        className="w-full h-32 object-cover"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="Food Image"
      />
      <div className="flex-grow">
        <h2 className="font-semibold font-mono text-lg ">{name}</h2>
        <div className=" overflow-hidden truncate">
          <h4 className="text-sm truncate">{cuisines.join(", ")}</h4>
        </div>
      </div>
      <div className="mt-2">
        <h4 className="text-sm">{avgRating} stars</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
