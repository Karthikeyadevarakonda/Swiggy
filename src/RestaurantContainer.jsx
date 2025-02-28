import { useState } from 'react'
import React from 'react'
import Card from './Card'

const RestaurantContainer = ({data}) => {
    const [isTopRated,setIsTopRated] = useState(true)
    const [filteredList,setFilteredList] = useState(data)
    const [value,setValue] = useState('')
  
  
   function Validate(e){
    setValue(e.target.value)
    let searchedText = e.target.value.toLowerCase()
    setFilteredList(data.filter(obj=>obj.info.name.toLowerCase().startsWith(searchedText)))
  }
   
  function onsearch(searchTerm){
    setValue(searchTerm)
    let newSearchTerm = searchTerm.toLowerCase()
    setFilteredList(data.filter(obj=>obj.info.name.toLowerCase().startsWith(newSearchTerm)))
  }

  function FilterByToprated(){
    if(isTopRated){
      setFilteredList(data.filter(obj=>obj.info.avgRating > 4.5))
      setIsTopRated(!isTopRated)
    }else{
      setFilteredList(data)
      setIsTopRated(!isTopRated)
    }
    setValue("")
  }
    return (
        <>
        <div className="Container flex flex-wrap w-[80%] m-auto gap-5 mt-20 ">
        <div className="w-full flex ">
        <div className='searchConatiner w-1/2'>
            <div className='search-inner'>
            <input type="text" onChange={Validate} value={value} placeholder='Search For Your Fav...!' className="w-full shadow p-2 rounded-lg pl-5 outline-none border border-black"   />
            </div>
            <div className='dropdown  mt-0.5 rounded-b-lg shadow-lg'>
              
            {data.filter(item => {
                    const searchTerm = value.toLowerCase();
  
                    const fullname = item.info.name.toLowerCase();

                    return searchTerm && fullname.startsWith(searchTerm) && fullname !== searchTerm;
                  }).slice(0,10)
                  .map((item)=>{
                    return(
                    <div onClick={()=>onsearch(item.info.name)} className='dropdown-row p-2 cursor-pointer  hover:bg-slate-100' key={item.info.id}>
                          {item.info.name}
                    </div>)
                  })}
            </div>
        </div>
        <button className="text-white p-2 ml-5 rounded-lg font-bold bg-orange-500 h-11" onClick={FilterByToprated}>{isTopRated ? "Top-rated" : "Clear-Filter" }</button>
       </div>
          {filteredList.map((obj) => {
            return <Card key={obj.info.id}  obj={obj} />;
          })}
        </div>
        </>
      );
}

export default RestaurantContainer


  
  