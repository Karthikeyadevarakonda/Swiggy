import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BigCards from "./BigCards";
import { MENU_URL } from "./Utils/Constants";
import RestaurantBannerDetails from "./RestaurantBannerDetails";

function RestaurantDetails() {
  const { id } = useParams();
  
  const [menu, setMenu] = useState([]);
  const [MainData,setMainData] = useState(null);
  console.log(MainData)

  async function fetchMenu() {
    let res = await fetch(MENU_URL + id);
    let jsonData = await res.json();

    const originalData = jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const maindata = jsonData.data.cards[2].card.card.info;
    setMainData(maindata)
    
    let filteredMenuData = [];

    originalData.forEach(({ card }) => {
      if (card.card["@type"].includes("v2.ItemCategory")) {
        filteredMenuData = [...filteredMenuData, card];
      } else if (card.card["@type"].includes("v2.NestedItemCategory")) {
        filteredMenuData = [...filteredMenuData, card];
      }
    });

    setMenu(filteredMenuData); 

  }

  useEffect(() => {
    fetchMenu();
  }, [id]);

  return (
    <div  className="w-[70%] m-auto">
       {MainData && <RestaurantBannerDetails MainData={MainData}/>}
       {console.log(MainData)}
      {menu.map(({ card }, index) => (
        <div key={index}>
          <BigCards card={card} />
        </div>
      ))}
    </div>
  );
}

export default RestaurantDetails;
