import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu=()=> {

    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);

    if (resInfo===null || resInfo.length===0)
    return <h1>Loading...</h1>


    const{name, cuisines, costForTwoMessage, avgRating}=resInfo?.cards[2]?.card?.card?.info || {};
    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card.card|| {};

    const categories= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (card)=>card.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ); 
    console.log(categories);

  return (
    <div className="text-center" style={{display:"flex", flexDirection:"column", alignItems:"left", color: "white"}}>
        <h1 className="font-bold my-6 text-3xl">{name}</h1>
        <h2 className="font-bold text-lg ">{costForTwoMessage}</h2>
        <h2 className="font-bold text-lg ">{avgRating}</h2>
        <h2 className="font-bold text-lg ">{cuisines.join(" , ")}</h2>
        <h3>Menu</h3>
        {categories.map((category, index)=>(
          <RestaurantCategory data={category?.card?.card}/>
        ))}
    </div>
  )
}

export default RestaurantMenu;