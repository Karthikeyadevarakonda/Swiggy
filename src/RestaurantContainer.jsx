import { useState,useRef } from 'react'
import React from 'react'
import Card from './Card'


const RestaurantContainer = ({data}) => {
    const [isTopRated,setIsTopRated] = useState(true)
    const [filteredList,setFilteredList] = useState(data)
    let query = useRef("")
  
   function Validate(){
    let searchedText = query.current.value.toLowerCase()
    setFilteredList(data.filter(obj=>obj.info.name.toLowerCase().startsWith(searchedText)))
  }
   
  function FilterByToprated(){
    if(isTopRated){
      setFilteredList(data.filter(obj=>obj.info.avgRating > 4.5))
      setIsTopRated(!isTopRated)
    }else{
      setFilteredList(data)
      setIsTopRated(!isTopRated)
    }
  }
    return (
        <>
        <div className="Container flex flex-wrap w-[80%] m-auto gap-5 mt-20 ">
        <div className="w-full flex ">
        <input type="text" onChange={Validate} placeholder='Search For Your Fav...!' className="w-1/2 shadow p-2 rounded-lg pl-5 outline-none border border-black"  ref={query} />
        <button className="text-white p-2 ml-5 rounded-lg font-bold bg-orange-500" onClick={FilterByToprated}>{isTopRated ? "Top-rated" : "Clear-Filter" }</button>
       </div>
          {filteredList.map((obj) => {
            return <Card key={obj.info.id}  obj={obj} />;
          })}
        </div>
        </>
      );
}

export default RestaurantContainer


  
  