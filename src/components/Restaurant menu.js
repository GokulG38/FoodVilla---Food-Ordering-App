import { useParams } from "react-router-dom";
import { Shimmer } from "./shimmer";
import { useRestaurant1, useRestaurant2 } from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../components/cartSlice";

const RestaurantMenu = () => {
    const resid = useParams().id;
    const restaurant = useRestaurant1(resid);
    const restaurant2 = useRestaurant2(resid);
    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    if ((restaurant && restaurant2) === null) return <Shimmer />;

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold pb-4">Restaurant - {resid}</h3>
                <h4 className="text-xl font-semibold">{restaurant?.name}</h4>
                <h4 className="text-md">{restaurant?.areaName}</h4>
                <h4 className="text-md">{restaurant?.locality}</h4>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-xl font-bold pb-2">Restaurant Menu</p>
                <ul>
                    {restaurant2 ? Object.values(restaurant2).map((item) => (
                        <li key={item?.card?.info?.id} className="flex justify-between items-center py-2 border-b">
                            <span>{item?.card?.info?.name} - Rs {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                            <button 
                                className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600" 
                                onClick={() => addFoodItem(item)}
                            >
                                Add
                            </button>
                        </li>
                    )) : null}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
