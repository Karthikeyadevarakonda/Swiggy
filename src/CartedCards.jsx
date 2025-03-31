import { faStar, faCircle, faMedal, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL, MENU_IMAGE_URL } from "./Utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addItems, clearCart, removeItems, setRestaurantData } from "./Utils/CartSlice";
import { decrementItems } from "./Utils/CartSlice";

const CartedCards = ({obj, cardIndex, restaurant}) => {
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
      // console.log("Current Restaurant Data:", currentRestaurant);
      // console.log("NEWLY ADDED Restaurant ID:", NewRestaurantId);
    
      if (!restaurant) {
        console.error("Restaurant data is missing!");
        return;
      }
    
      const existingCartRestaurantId = CartItems[0]?.restaurant?.id;
    
      // console.log("EXISTING Restaurant ID in Cart:", existingCartRestaurantId);
    
    
      if (CartItems.length === 0) {
        dispatch(setRestaurantData(restaurant));
        dispatch(addItems({ card: obj.card, restaurant }));
        return;
      }
    
      if (NewRestaurantId === existingCartRestaurantId) {
        dispatch(addItems({ card: obj.card, restaurant }));
      } else {
       
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
            dispatch(decrementItems(obj.card.info.id)); 
        } else {
            dispatch(removeItems(obj.card.info.id)); 
        }
    }
    
  
    return (
      <div key={cardIndex} className="flex m-auto justify-evenly items-center w-10/11 h-15  mt-2 bg-white">
        
        <div>
              {obj.card.info.isVeg === 1 ? (
                <span className="border-2 border-green-600 rounded-md p-1 flex items-center justify-center w-4 h-4 mr-2">
                  <FontAwesomeIcon icon={faCircle} className="text-green-600 text-[6px] " />{" "}
                </span>
              ) : (
                <span className="border-2 border-red-600 rounded-md p-1 flex items-center justify-center w-4 h-4 mr-2">
                  <FontAwesomeIcon icon={faCircle} className="text-red-600 text-[6px]"/>
                </span>
              )}
        </div>  
     

           <div className="w-48">
            <h4 className="font-semibold text-base text-[#000000] line-clamp-2">
              {obj.card.info.name}
            </h4>
            </div>     
  
          <div className=" flex items-center ml-3 ">
             <div className=" h-[30px] border border-gray-400 bg-white font-bold  flex items-center justify-center">
             <button><FontAwesomeIcon icon={faMinus}  onClick={handleDec} className="text-[#1BA672]  px-1 text-md mr-1.5"/></button>  
             <span className="text-md pb-1 text-[#1BA672] ">{ItemCount}</span>
             <button><FontAwesomeIcon icon={faPlus} onClick={handleInc}  className="text-[#1BA672]  px-1 text-md ml-1.5 "/></button> 
            </div> 
         </div>

        <div className="ml-4">
        <p className="font-semibold">
        {"₹" +((parseFloat(obj.card.info.defaultPrice) || parseFloat(obj.card.info.price) || 0) / 100 * ItemCount).toFixed(0)}
        </p>
        </div>
       
      </div>
    );
}


export default CartedCards
