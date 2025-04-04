import { useEffect, useState } from "react";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import RestaurantList from "./RestaurantList";
import FilterComponent from "./FilterComponent";
const RestaurantContainer = ({ data }) => {
  
  const [isTopRated, setIsTopRated] = useState(true);
  const [filteredList, setFilteredList] = useState(data);
  const [clickFilter,setClickFilter] = useState(false);
  const [SortBy,setSortBy] = useState("default");
 console.log("THE DATA ",data)
  useEffect(()=>{
    let sortedList = [...data];
    if (SortBy === "rating") {
      sortedList.sort((a, b) => b.info.avgRating - a.info.avgRating);
    } else if (SortBy === "delivery") {
      sortedList.sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime); 
    }else if (SortBy === "cost") {
      sortedList.sort((a, b) => {
        const costA = parseInt(a.info.costForTwo?.replace(/[^\d]/g, "") || "0");
        const costB = parseInt(b.info.costForTwo?.replace(/[^\d]/g, "") || "0");
        return costA - costB;
      });
    }
    // console.log("THE SORTED",sortedList)
    setFilteredList(sortedList);
  }, [SortBy,data]);
  
  function onsearch(searchTerm) {
    let newSearchTerm = searchTerm.toLowerCase();
    setFilteredList(
      data.filter((obj) =>
        obj.info.name.toLowerCase().startsWith(newSearchTerm)
      )
    );
  }

  function FilterByToprated() {
    if (isTopRated) {
      setFilteredList(data.filter((obj) => obj.info.avgRating > 4.5));
    } else {
      setFilteredList(data);
    }
    setIsTopRated(!isTopRated);
  }

  return (
    <>
   {data && <div className="Container flex flex-wrap w-[94%] sm:w-[88%] m-auto gap-3 mt-2 md:mt-10 mb-10">
       <h1 className="font-bold text-2xl mb-3 text-[#444444]">Restaurants with online food delivery in Nellore</h1>
       
       
       
        <div className="w-full flex flex-col sm:flex-col md:flex-row gap-2 ">
        <SearchBar data={data} onsearch={onsearch} setFilteredList={setFilteredList}/>
        <FilterComponent clickFilter={clickFilter} setClickFilter={setClickFilter} setSortBy={setSortBy} SortBy={SortBy}/>
        <FilterButton FilterByToprated={FilterByToprated} isTopRated={isTopRated}/>
        </div>
        
        <RestaurantList filteredList={filteredList}/>
      </div>}
    </>
  );
};

export default RestaurantContainer;
