import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../components/constants";





export const useRestaurant1=(resid)=>{
    const [restaurant, setRestaurant]=useState(null);
    useEffect(()=>{
        getRestaurant()
    },[])
    async function getRestaurant(){
        const api= await fetch(RESTAURANT_URL+resid)
        const json = await api.json();
        setRestaurant(json?.data?.cards[2]?.card?.card?.info)
    }
    return (restaurant)
}



export const useRestaurant2=(resid)=>{
    const [restaurant2, setRestaurant2]=useState(null);
    useEffect(()=>{
        getRestaurant()
    },[])
    async function getRestaurant(){
        const api= await fetch(RESTAURANT_URL+resid)
        const json = await api.json();
        setRestaurant2(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }
    return (restaurant2)
}

