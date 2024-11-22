import {CDN_URL} from "../utils/constants";
const RestaurantCard =(props)=>{
    const {resData}= props;
    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = resData?.info;

    return (
        <div className="p-4 m-4 w-[250px] rounded-lg hover:shadow-lg transition duration-300 ease-in-out hover:scale-95 bg-gray-50">
            <img 
                alt="res-image" 
                className="rounded-lg w-full h-40 object-cover" 
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
            <h4 className="text-green-600 font-medium">{avgRating} stars</h4>
            <h5 className="text-gray-600">{costForTwo}</h5>
        </div>
    )
}
//Higher Order Component
//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
} 
export default RestaurantCard;