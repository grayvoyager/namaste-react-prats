import {useState, useEffect} from 'react'; 
const useRestaurantMenu=(resId)=>{
    const [resInfo, setResInfo]=useState(null);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.7011108&lng=83.4846069&restaurantId="+resId);
        const json= await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    return resInfo; 
}
export default useRestaurantMenu;