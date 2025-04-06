import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faXmark} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const FilterComponent = ({clickFilter,setClickFilter,SortBy,setSortBy}) => {
   
    const [tempSort, setTempSort] = useState(SortBy);

    function handleSelectedSort(){
        setSortBy(tempSort)
        setClickFilter(false);
    }
    function handleClear(){
        setTempSort("default")
        setSortBy("default")
        setClickFilter(false);
    }
  return (
    <>
    <button className=" p-2 rounded-lg font-bold bg-white shadow-[0px_0px_1px_1px_lightgray] text-black h-10 pl-4"  onClick={()=>setClickFilter(true)}>
    FILTER <FontAwesomeIcon  className="text-md pl-2 pr-2 text-red-400" icon={faSliders}/>
    </button>
    
   {clickFilter &&
   <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black/45 border border-white/30 ">
     <div className="w-1/3 h-80 rounded-2xl bg-white shadow-lg m-auto z-2 p-4 relative">
      <button className="text-black absolute right-5" onClick={()=>setClickFilter(!clickFilter)}><FontAwesomeIcon icon={faXmark} className="text-2xl pt-1 shadow-lg p-1 rounded-full h-[24px] w-[24px]"/></button>
      <div>
        <h1 className="font-bold text-2xl text-gray-500 mb-4 border-b border-gray-500 pb-2">SORT BY </h1>
        <div className="mb-3 flex items-center">
         <input type="radio" id="default" name="sort" className="mr-2 accent-black outline-0" value="default" onChange={(e)=>setTempSort(e.target.value)} checked={tempSort === "default"} />
         <label htmlFor="default" className="font-semibold text-lg text-gray-700">Default</label>
       </div>
        <div className="mb-3 flex items-center">
          <input type="radio" id="rating" name="sort" className="mr-2 accent-black outline-0 " value="rating" onChange={(e)=>setTempSort(e.target.value)} checked={tempSort === "rating"} />
          <label htmlFor="rating" className="font-semibold text-lg text-gray-700">Rating</label>
       </div>

       <div className="mb-3 flex items-center">
         <input type="radio" id="delivery" name="sort" className="mr-2 accent-black outline-0" value="delivery" onChange={(e)=>setTempSort(e.target.value)} checked={tempSort === "delivery"}/>
         <label htmlFor="delivery" className="font-semibold text-lg text-gray-700">Delivery Time</label>
       </div>

       <div className="mb-3 flex items-center">
         <input type="radio" id="cost" name="sort" className="mr-2 accent-black outline-0" value="cost" onChange={(e)=>setTempSort(e.target.value)} checked={tempSort === "cost"}/>
         <label htmlFor="cost" className="font-semibold text-lg text-gray-700">cost</label>
       </div>
       
      </div>
      <div className="w-full h-14 flex justify-around absolute bottom-3 left-0 py-2 px-5">
        <button className="w-[180px] border border-orange-500 text-orange-500 font-bold rounded-lg" onClick={handleClear}>CLEAR-FILTER</button>
        <button className="w-[180px] bg-orange-500 text-white font-bold rounded-lg" onClick={handleSelectedSort}>APPLY-FILTER</button>
      </div>
    </div>
   </div>
   }
    </>
  )
}

export default FilterComponent
