import React, { useEffect, useRef, useState } from "react";
import Shimmer from "./Shimmer";
import Navbar from "./Navbar";
import RestaurantContainer from "./RestaurantContainer";


const App = () => {

  const [data,setData] = useState([])

  async function fetchedData(){
    let FetchedData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4425987&lng=79.98645599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    let JsonData = await FetchedData.json();
    // console.log(JsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setData(JsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   
  }
  
  useEffect(()=>{
    setTimeout(()=>{
      fetchedData();
    },2000)
  },[])

  return (
    <>
     <Navbar />
     {data.length  === 0 ? <Shimmer/> : <RestaurantContainer data={data}/>}
    </>
  );
};


export default App;
