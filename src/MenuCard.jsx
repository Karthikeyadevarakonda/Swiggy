import { faStar, faCircle, faMedal, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL, MENU_IMAGE_URL } from "./Utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addItems, clearCart, removeItems, setRestaurantData } from "./Utils/CartSlice";
import { decrementItems } from "./Utils/CartSlice"; // Import decrementItems

const MenuCard = ({ obj, cardIndex, restaurant}) => {
  // console.log("inside menu",obj)
  // console.log(restaurant)
  const dispatch = useDispatch();
  const CartItems = useSelector((state)=>state.cart.items)
  const currentRestaurant = useSelector((state) => state.cart.restaurantData);

  const NewRestaurantId = restaurant?.id;
  const ExistedRestaurantId = currentRestaurant?.id;
  const newItemRestaurantName = restaurant.name;

  const CartItem = CartItems.find((item) => item.card.info.id === obj.card.info.id);
  const isItemInCart = !!CartItem;
  const ItemCount = CartItem ? CartItem.count : 0;
   
  function handleInc() {
    console.log("Current Restaurant Data:", currentRestaurant);
    console.log("NEWLY ADDED Restaurant ID:", NewRestaurantId);
  
    if (!restaurant) {
      console.error("Restaurant data is missing!");
      return;
    }
  
    // Get the restaurant ID of the first item in the cart (after fix in CartSlice.js)
    const existingCartRestaurantId = CartItems[0]?.restaurant?.id;
  
    console.log("EXISTING Restaurant ID in Cart:", existingCartRestaurantId);
  
    // If the cart is empty, add the item directly and set the restaurant
    if (CartItems.length === 0) {
      dispatch(setRestaurantData(restaurant));
      dispatch(addItems({ card: obj.card, restaurant }));
      return;
    }
  
    // If the restaurant ID is the same, just increase quantity
    if (NewRestaurantId === existingCartRestaurantId) {
      dispatch(addItems({ card: obj.card, restaurant }));
    } else {
      // Show warning only if trying to add from a different restaurant
      const userConfirmed = window.confirm(
        `You're ordering from a different restaurant (${restaurant.name}).\nThis will clear your cart. Proceed?`
      );
  
      if (userConfirmed) {
        dispatch(clearCart());
  
        setTimeout(() => {
          dispatch(setRestaurantData(restaurant));
          dispatch(addItems({ card: obj.card, restaurant }));
        }, 0);
      }
    }
  }
  


  function handleDec() {
      if (ItemCount > 1) {
          dispatch(decrementItems(obj.card.info.id)); // Correctly decrement count
      } else {
          dispatch(removeItems(obj.card.info.id)); // Remove item when count reaches 0
      }
  }
  

  return (
    <div key={cardIndex} className="m-4 ">
      <div className="w-full h-50 p-4 flex">
        <div className=" pr-5 w-[75%] space-y-1.5">
          <div className="flex items-center">
            {obj.card.info.isVeg === 1 ? (
              <span className="border-2 border-green-600 rounded-md p-2 flex items-center justify-center w-5 h-5">
                <FontAwesomeIcon icon={faCircle} className="text-green-600 text-[9px] " />{" "}
              </span>
            ) : (
              <span className="border-2 border-red-600 rounded-md p-2 flex items-center justify-center w-5 h-5">
                <FontAwesomeIcon icon={faCircle} className="text-red-600 text-[9px]"/>
              </span>
            )}
            <span className="text-red-500 pl-2 font-semibold">
              {obj.card?.info?.ribbon?.text && (
                <p>
                  <FontAwesomeIcon icon={faMedal} /> {obj.card.info.ribbon.text}{" "}
                </p>
              )}
            </span>
          </div>
          <h4 className="font-bold text-lg text-[#444444]">
            {obj.card.info.name}
          </h4>
          <p className="font-semibold">
            {"₹" + (obj.card.info.defaultPrice || obj.card.info.price) / 100}
          </p>
          {obj.card.info?.ratings?.aggregatedRating?.rating ? (
            <p>
              <FontAwesomeIcon icon={faStar} className="text-green-700" />
              {obj.card.info?.ratings?.aggregatedRating?.rating} (
              {obj.card.info?.ratings?.aggregatedRating?.ratingCountV2})
            </p>
          ) : (
            ""
          )}
          <p className="line-clamp-2 text-stone-600 font-normal">
            {obj.card.info?.description}
          
          </p>
        </div>

        <div className="w-[25%] flex items-center relative">
          <img
            src={MENU_IMAGE_URL + obj.card.info?.imageId || BASE_URL + obj.card.info?.imageId }
            alt=""
            className="h-[83%] w-[73%] m-auto rounded-2xl"
          />
          {isItemInCart ?
           <div className="w-[52%] h-[34px] absolute bottom-0 left-13 rounded-lg bg-white font-bold shadow-lg flex items-center justify-center">
           <button><FontAwesomeIcon icon={faMinus}  onClick={handleDec} className="text-red-600 px-2 text-lg mr-1.5"/></button>  
           <span className="text-xl pb-1">{ItemCount}</span>
           <button><FontAwesomeIcon icon={faPlus} onClick={handleInc}  className="text-green-600 px-2 text-lg ml-1.5 "/></button> 
         </div> :
          <button className={`w-[52%] h-[34px] absolute bottom-0 left-13 rounded-lg bg-white font-bold ${isItemInCart ? "text-red-700" :"text-green-600"} shadow-lg`}
          onClick={handleInc}>ADD</button> }
        </div>
      </div>
      <hr className="w-[100%] text-gray-400" />
    </div>
  );
};

export default MenuCard;
