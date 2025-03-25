import { useState } from "react";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import RestaurantList from "./RestaurantList";

const RestaurantContainer = ({ data }) => {
  
  const [isTopRated, setIsTopRated] = useState(true);
  const [filteredList, setFilteredList] = useState(data);
  
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
   
      <div className="Container flex flex-wrap w-[94%] sm:w-[88%] m-auto gap-3 mt-2 md:mt-10">
        <h1 className="font-bold text-2xl mb-3 text-[#444444]">Restaurants with online food delivery in Nellore</h1>
        <div className="w-full flex flex-col sm:flex-col md:flex-row gap-2 ">
          <FilterButton FilterByToprated={FilterByToprated} isTopRated={isTopRated}/>
          <SearchBar data={data} onsearch={onsearch} setFilteredList={setFilteredList}/>
        </div>
        <RestaurantList filteredList={filteredList}/>
      </div>
    </>
  );
};

export default RestaurantContainer;
