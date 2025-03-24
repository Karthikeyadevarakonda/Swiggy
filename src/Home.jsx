import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantContainer from "./RestaurantContainer";
import { FETCH_URL } from "./Utils/Constants";
import Notification from "./Notification";
import RestaurantList from "./RestaurantList";
import TopSlider from "./TopSlider";
const Home = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(navigator.onLine);
  const [loading, setLoading] = useState(true);

  async function fetchedData() {
    setLoading(true);
    try {
      let FetchedData = await fetch(FETCH_URL);
      let JsonData = await FetchedData.json();
      setData(
        JsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("ERROR IN FETCHING IN CATCH");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchedData();
    });
  }, []);

  useEffect(() => {
    const handleOffline = () => setStatus(false);
    const handleOnline = () => setStatus(true);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <>

    {data.length > 0 && <div className="w-[80%] m-auto mt-10 p-1">
      <div className="mb-10">
      <TopSlider/>
      </div>

      <div>
        <h1 className="font-bold text-2xl text-[#444444] ">Top restaurant chains in Nellore</h1>
      </div>
      <div className="custom-scrollbar gap-2 h-82 mt-8 m-auto flex overflow-x-auto">
       <RestaurantList filteredList={data}/>
      </div> 
    </div>}
   
      {status ? (
        loading ? (
          <Shimmer />
        ) : ( 
          <RestaurantContainer data={data} />
        )
      ) : (
        <Notification />
      )}
    </>
  );
};

export default Home;
