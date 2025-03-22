import { MENU_URL } from "../Utils/Constants";
import { useState,useEffect } from "react";

const useResaurantDetailsFectch = (id) => {

  const [menu, setMenu] = useState([]);
  const [MainData,setMainData] = useState(null);

useEffect(() => { 

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
  
  fetchMenu();

  }, [id]);

  return {menu,MainData}
}

export default useResaurantDetailsFectch
