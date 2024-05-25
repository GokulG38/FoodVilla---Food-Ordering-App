
import RestaurantCard from "./Restaurant card"
import { useState, useEffect, useContext } from "react"
import { Shimmer } from "./shimmer"
import { Link } from "react-router-dom"
import { FilterText } from "../utils/helper"

const Body = () => {
    const [Restaurants, setRestaurants] = useState(null)
    const [FilteredRestaurants, setFilteredRestaurants] = useState(null)
    const [SearchText, setSearchText] = useState("")



    useEffect(() => {
        getRestaurant()
    }, [])


    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.5241391&lng=76.9366376&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        let foundRestaurants = null;

        {
          const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          
          if (restaurants) {
            foundRestaurants = restaurants;
          }}
        

        if (foundRestaurants) {
            setFilteredRestaurants(foundRestaurants);
            setRestaurants(foundRestaurants);
          }
        }

    return (Restaurants && FilteredRestaurants) === null ? <Shimmer /> : (


        <div className="body">
            <div className=" search-container p-3 bg-gray-200 m-2">
                <input className=" border-2 border-solid border-gray-200"
                type="text"
                
                value={SearchText}
                placeholder="Search"
                onChange={(e)=>{
                    const text=e.target.value;
                    setSearchText(text)
                }}
                ></input>

                <button  className="p-2 m-2 text-white bg-sky-950 rounded-xl " onClick={()=>{
                    
                    setFilteredRestaurants(FilterText(SearchText, Restaurants))
                }}>Search</button>



            </div>
            <div className="cards flex flex-wrap">
            {FilteredRestaurants.length==0?(<Shimmer/>):(FilteredRestaurants?.map((Restaurant)=>{return (<div><Link to={"restaurant/" + Restaurant.info.id} key={Restaurant.info.id}>
                        <RestaurantCard  {...Restaurant.info}  />
                    </Link></div>)
                }))}
            </div>
        </div>

    )
}

export default Body