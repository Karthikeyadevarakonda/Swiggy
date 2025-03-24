import React from 'react'
import { useState } from 'react';
import { BASE_URL } from './Utils/Constants';

const SearchBar = ({data,onsearch,setFilteredList}) => {
   const [value, setValue] = useState("");
   const [highlighted, setHighlighted] = useState(-1);

   function Validate(e) {
    setValue(e.target.value);
    let searchedText = e.target.value.toLowerCase();
    setFilteredList(
      data.filter((obj) => obj.info.name.toLowerCase().startsWith(searchedText))
    );
  }

  function HandleKeyDown(e) {
    const FilteredData = data.filter((item) => {
      const searchTerm = value.toLowerCase();
      const fullname = item.info.name.toLowerCase();
      return searchTerm && fullname.startsWith(searchTerm) && fullname !== searchTerm
      
    });
    if (e.key === "ArrowDown") {
      if (highlighted < FilteredData.length - 1) setHighlighted(highlighted + 1);
    } else if (e.key === "ArrowUp") {
      if (highlighted > 0) setHighlighted(highlighted - 1);
    } else if (e.key === "Enter" && highlighted >= 0) {
        const selectedItem = FilteredData[highlighted];
        setValue(selectedItem.info.name); 
        onsearch(selectedItem.info.name);
        setHighlighted(-1);
        e.target.blur(); 
    }
  }

  return (
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
  )
}

export default SearchBar
