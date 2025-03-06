import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantContainer from "./RestaurantContainer";
import { FETCH_URL } from "./Utils/Constants";
import Notification from "./Notification";


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
    }, 500);
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
