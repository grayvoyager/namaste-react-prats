import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body =()=>{
    const[listOfRestaurants, setlistOfRestaurants]= useState([]);
    const RestaurantCardPromoted= withPromotedLabel(RestaurantCard);

    const fetchdata= async ()=>
      {
        const data 
        = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  
      };
    useEffect(()=>{fetchdata()},[]);

    if (listOfRestaurants.length === 0) {
    return <Shimmer />;
    }


    return (
        <div className="body">   
          <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4
                );
                setlistOfRestaurants(filteredList);
            } }>Top Rated Restaurants</button>

          </div>
          <div className="res-container">
          {listOfRestaurants && listOfRestaurants.map((restaurant) => (
  <Link 
    key={restaurant.info.id} 
    to={"/restaurant/" + restaurant.info.id}
    className="restaurant-link"
  >
    {restaurant.info.promoted ? (
      <RestaurantCardPromoted resData={restaurant} />
    ) : (
      <RestaurantCard resData={restaurant} />
    )}
  </Link>
))}


</div>

        </div>
    )
}
export default Body;