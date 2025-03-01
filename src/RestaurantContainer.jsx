import { useState } from "react";
import Card from "./Card";
import Notfound from "./Notfound";
import { BASE_URL } from "./Utils/Constants";

const RestaurantContainer = ({ data }) => {
  const [isTopRated, setIsTopRated] = useState(true);
  const [filteredList, setFilteredList] = useState(data);
  const [value, setValue] = useState("");
  const [highlighted, setHighlighted] = useState(-1);

  function Validate(e) {
    setValue(e.target.value);
    let searchedText = e.target.value.toLowerCase();
    setFilteredList(
      data.filter((obj) => obj.info.name.toLowerCase().startsWith(searchedText))
    );
  }

  function onsearch(searchTerm) {
    setValue(searchTerm);
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
      setIsTopRated(!isTopRated);
    } else {
      setFilteredList(data);
      setIsTopRated(!isTopRated);
    }
    setValue("");
  }

  function HandleKeyDown(e) {
    const FilteredData = data.filter((item) => {
      const searchTerm = value.toLowerCase();
      const fullname = item.info.name.toLowerCase();
      return (
        searchTerm && fullname.startsWith(searchTerm) && fullname !== searchTerm
      );
    });
    if (e.key === "ArrowDown") {
      if (highlighted < FilteredData.length - 1)
        setHighlighted(highlighted + 1);
    } else if (e.key === "ArrowUp") {
      if (highlighted > 0) setHighlighted(highlighted - 1);
    } else if (e.key === "Enter" && highlighted >= 0) {
      onsearch(FilteredData[highlighted].info.name);
      setHighlighted(-1);
    }
  }

  return (
    <>
      <div className="Container flex flex-wrap w-[94%] sm:w-[80%] m-auto gap-1.5 sm:gap-5 mt-5 md:mt-10 ">
        <div className="w-full flex flex-col sm:flex-col md:flex-row gap-2 ">
          <button
            className="text-white p-2  rounded-lg font-bold bg-orange-500 h-10"
            onClick={FilterByToprated}
          >
            {isTopRated ? "Top-rated" : "Clear-Filter"}
          </button>
          <div className="searchConatiner w-full md:w-1/2 relative">
            <div className="search-inner">
              <input
                type="text"
                onKeyDown={HandleKeyDown}
                onChange={Validate}
                value={value}
                placeholder="Search By Restaurents.....!"
                className="w-full shadow-[0px_0px_1px_1px_lightgray] p-2 rounded-lg pl-5 outline-none "
              />
            </div>
            <div className="dropdown absolute z-10  bg-white w-full  mt-0.5 rounded-b-lg shadow-lg">
              {data
                .filter((item) => {
                  const searchTerm = value.toLowerCase();

                  const fullname = item.info.name.toLowerCase();

                  return (
                    searchTerm &&
                    fullname.startsWith(searchTerm) &&
                    fullname !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item, index) => {
                  return (
                    <div
                      onClick={() => onsearch(item.info.name)}
                      className={`dropdown-row p-2 cursor-pointer hover:bg-blue-100 rounded-b-lg ${
                        highlighted === index ? "bg-blue-100" : ""
                      }`}
                      key={item.info.id}
                    >
                      <p className="truncate">
                        {item.info.name}{" "}
                        <span>
                          <img
                            className="w-10 h-10 overflow-hidden object-cover rounded-full "
                            src={BASE_URL + item.info.cloudinaryImageId}
                            alt="productimage"
                          />
                        </span>
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {filteredList.length === 0 ? (
          <Notfound />
        ) : (
          filteredList.map((obj) => {
            return <Card key={obj.info.id} obj={obj} />;
          })
        )}
      </div>
    </>
  );
};

export default RestaurantContainer;
