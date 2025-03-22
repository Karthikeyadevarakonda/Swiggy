import { useState } from "react";
import { useParams } from "react-router";
import BigCards from "./BigCards";

import RestaurantBannerDetails from "./RestaurantBannerDetails";
import useResaurantDetailsFectch from "./customHooks/useResaurantDetailsFectch";

function RestaurantDetails() {
  const { id } = useParams();
  const [isOpen,setIsOpen] = useState("Recommended")
  
  const {menu,MainData} = useResaurantDetailsFectch(id);

  return (
    <div  className="w-[70%] m-auto">
       {MainData && <RestaurantBannerDetails MainData={MainData}/>}
       {menu.map(({ card }, index) => (
        <div key={index} className="border-b-20 border-gray-100 mb-2">
          <BigCards card={card} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      ))}
    </div>
  );
}

export default RestaurantDetails;
