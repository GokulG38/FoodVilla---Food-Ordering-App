
import { useState } from "react";
import { IMG_CDN_URL } from "./constants";

const CartItems = ({ info, onRemove }) => {
    const [showMore, setShowMore] = useState(false);

    const handleToggleShowMore = () => {
        setShowMore(!showMore);
    };


    const price = info.price || info.defaultPrice;

    return (
        <div className="w-full p-4 m-2 bg-white shadow-lg rounded-lg">
            <img className="w-full h-32 object-cover rounded-t-lg" src={IMG_CDN_URL + info.imageId} alt="Food Image" />
            <div className="p-4">
                <h2 className="font-semibold font-mono text-lg">{info.name}</h2>
                <p className="text-sm text-gray-700">
                    {showMore ? info.description : `${info.description.slice(0, 50)}...`}
                    {info.description.length > 50 && (
                        <button className="text-blue-500 hover:underline ml-2" onClick={handleToggleShowMore}>
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    )}
                </p>
                <h4 className="font-semibold text-gray-800 mt-2">Rupees {price / 100}/-</h4>
                <button
                    className="bg-red-500 text-white py-1 px-4 rounded-lg mt-4 hover:bg-red-600"
                    onClick={onRemove}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItems;
