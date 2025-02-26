import React, { useEffect, useRef, useState } from "react";


function Navbar() {
  return (
    <div className="nav shadow">
      <div className="navbar flex items-center justify-between w-9/10 m-auto p-3">
        <div>
          {" "}
          <svg className="VXJlj" viewBox="0 0 61 61" height="49" width="49"> {" "} <g clipPath="url(#a)"> {" "} <path fill="#FF5200" d="M.32 30.5c0-12.966 0-19.446 3.498-23.868a16.086 16.086 0 0 1 2.634-2.634C10.868.5 17.354.5 30.32.5s19.446 0 23.868 3.498c.978.774 1.86 1.656 2.634 2.634C60.32 11.048 60.32 17.534 60.32 30.5s0 19.446-3.498 23.868a16.086 16.086 0 0 1-2.634 2.634C49.772 60.5 43.286 60.5 30.32 60.5s-19.446 0-23.868-3.498a16.086 16.086 0 0 1-2.634-2.634C.32 49.952.32 43.466.32 30.5Z" />{" "} <path fill="#fff" fillRule="evenodd" d="M32.317 24.065v-6.216a.735.735 0 0 0-.732-.732.735.735 0 0 0-.732.732v7.302c0 .414.336.744.744.744h.714c10.374 0 11.454.54 10.806 2.73-.03.108-.066.21-.102.324-.006.024-.012.048-.018.066-2.724 8.214-10.092 18.492-12.27 21.432a.764.764 0 0 1-1.23 0c-1.314-1.776-4.53-6.24-7.464-11.304-.198-.462-.294-1.542 2.964-1.542h3.984c.222 0 .402.18.402.402v3.216c0 .384.282.738.666.768a.73.73 0 0 0 .582-.216.701.701 0 0 0 .216-.516v-4.362a.76.76 0 0 0-.756-.756h-8.052c-1.404 0-2.256-1.2-2.814-2.292-1.752-3.672-3.006-7.296-3.006-10.152 0-7.314 5.832-13.896 13.884-13.896 7.17 0 12.6 5.214 13.704 11.52.006.054.048.294.054.342.288 3.096-7.788 2.742-11.184 2.76a.357.357 0 0 1-.36-.36v.006Z" clipRule="evenodd" />{" "} </g>{" "} <defs> {" "} <clipPath id="a"> {" "} <path fill="#fff" d="M.32.5h60v60h-60z" />{" "} </clipPath>{" "} </defs>{" "} </svg>{" "}
        </div>
        <div className="w-1/2">
          {" "}
          <ul className="flex cursor-pointer justify-evenly">
            {" "}
            <li>HOME</li> <li>CART</li> <li>CONTACT</li>{" "}
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}

function Card({obj}){
    return( 
    <div  key={obj.info.id} className="card w-[320px] h-[300px] transition-transform duration-200 hover:scale-92">
      <div className="w-full h-[181px] ">
        <img className="w-full h-full overflow-hidden object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+obj.info.cloudinaryImageId} alt="productimage" />
      </div>
      <div className=" p-3 ">
      <p className="font-bold truncate">{obj.info.name}</p>
      <p className="">{obj.info.avgRating} | <span className="font-medium"> {obj.info.sla.slaString}</span></p>
      <p className="truncate text-gray-500">{obj.info.cuisines.join(", ")}</p>
      <p className="truncate text-gray-500">{obj.info.locality}</p>
      </div>
    </div>
    )
}

function RestaurantContainer({data}) {  
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

function Shimmer() {
  return (
    <div className="Container flex flex-wrap w-[80%] m-auto gap-5 mt-20 ">
      {Array.from({ length: 20 }).map((_, index) => {
        return(
        <div
          key={index} className="card w-[320px] h-[300px] animate-pulse rounded bg-gray-200 rounded-lg">
          <div className="w-full h-[181px] bg-gray-300 rounded-lg"></div>
          <div className=" p-3 space-y-2">
            <p className="h-4 bg-gray-400 w-full rounded"></p>
            <p className="h-4 bg-gray-400 w-10/11 rounded"></p>
            <p className="h-3 bg-gray-400 w-1/2 rounded"></p>
            <p className="h-3 bg-gray-400 w-1/3 rounded"></p>
          </div>
        </div>)
      })}
    </div>
  );
}

const App = () => {

  const [data,setData] = useState([])

  async function fetchedData(){
    let FetchedData = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=14.4425987&lng=79.98645599999999&carousel=true&third_party_vendor=1")
    let JsonData = await FetchedData.json();
    // console.log(JsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setData(JsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
   
  }
  
  useEffect(()=>{
    setTimeout(()=>{
      fetchedData();
    },2000)
  },[])

  return (
    <>
     <Navbar />
     {data.length === 0 ? <Shimmer/> :<RestaurantContainer data={data}/>}
    </>
  );
};


export default App;
