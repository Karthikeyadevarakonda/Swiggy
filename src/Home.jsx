import React, { useEffect, useState, lazy ,Suspense} from "react";
import Shimmer from "./Shimmer";
import { FETCH_URL } from "./Utils/Constants";
import Notification from "./Notification";
import TopSlider from "./TopSlider";
const RestaurantContainer = lazy(()=> import("./RestaurantContainer"));
const LowerFotter = lazy(()=>import("./LowerFotter"));
const MiddleFotter = lazy(()=>import("./MiddleFotter"));
const RestaurantList = lazy(()=>import("./RestaurantList"))

const Home = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(navigator.onLine);
  const [loading, setLoading] = useState(true);
  const [sliderData,setSliderData] = useState([])

  const Loader = () => <div className="text-center text-gray-400 py-4">Loading...</div>;

  async function fetchedData() {
    setLoading(true);
    try {
      let FetchedData = await fetch(FETCH_URL);
      let JsonData = await FetchedData.json();
      setData(JsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setSliderData(JsonData.data?.cards[0]?.card?.card?.imageGridCards?.info);
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

    {data.length > 0 && <div className="w-[88%] m-auto mt-10 p-1">
      <div className="mb-10"><TopSlider sliderData={sliderData}/></div>
      <div><h1 className="font-bold text-2xl text-[#444444] ">Top restaurant chains in Nellore</h1></div>
      <Suspense fallback={<Shimmer/>}>
      <div className="custom-scrollbar gap-2 h-82 mt-8 m-auto flex overflow-x-auto"><RestaurantList filteredList={data}/></div> 
      </Suspense>
      </div>}
   
      {status ? (loading ? ( <Shimmer/>) : (
        <Suspense fallback={<Shimmer/>}>
        <RestaurantContainer data={data}/>
        </Suspense>
        ) ) : ( <Notification/>)}

       <Suspense fallback={<Loader/>}>
       <div className='pb-5 bg-[#F0F0F5]'>
         <LowerFotter/>
       </div>
       </Suspense>
       <Suspense fallback={<Loader/>}>
       <MiddleFotter/>
       </Suspense>
  
    </>
  );
};

export default Home;
