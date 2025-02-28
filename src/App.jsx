import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Navbar from "./Navbar";
import RestaurantContainer from "./RestaurantContainer";
import { FETCH_URL } from "./Utils/Constants";

const App = () => {

  const [data,setData] = useState([])

  async function fetchedData(){
    let FetchedData = await fetch(FETCH_URL)
    let JsonData = await FetchedData.json();
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
