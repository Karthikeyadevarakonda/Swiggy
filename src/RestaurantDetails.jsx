import { useState } from "react";
import { useParams } from "react-router";
import BigCards from "./BigCards";
import { useSelector } from "react-redux";

import RestaurantBannerDetails from "./RestaurantBannerDetails";
import useResaurantDetailsFectch from "./customHooks/useResaurantDetailsFectch";

function RestaurantDetails() {
  const items = useSelector((state)=>state.cart.items)
  const { id } = useParams();
  const [isOpen,setIsOpen] = useState("Recommended")
  
  const {menu,MainData} = useResaurantDetailsFectch(id);

  return (
    <div  className="w-[70%] m-auto">
       {MainData && <RestaurantBannerDetails MainData={MainData}/>}
       {console.log(MainData)}
       {menu.map(({ card }, index) => (
        <div key={index} className="border-b-20 border-gray-100 mb-2">
          <BigCards card={card} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      ))}
     {items.length > 0 && <h1 className="fixed bottom-0 bg-emerald-500 w-4/6 p-2 text-center text-white font-bold shadow-lg left-1/2 transform -translate-x-1/2">{items.length} ITEM{items.length > 1 ? "'S" : ""} - ADDED TO CART</h1>}
    </div>
  );
}

export default RestaurantDetails;
