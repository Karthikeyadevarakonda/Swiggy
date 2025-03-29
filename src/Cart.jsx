import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import { BASE_URL } from './Utils/Constants';
import CartedCards from './CartedCards';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const RestaurantData = useSelector((state) => state.cart.restaurantData);

  return (
    <div className='bg-gray-200 p-5 flex '>
     <div className='border flex-1/2'>

     </div>
   
    <div className="w-2/7 m-auto shadow bg-white ml-5">
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className=''>
          {console.log("THERE WE GO",RestaurantData)}
          {RestaurantData ? (
            <div>
              <div className='flex gap-3 w-9/10 m-auto p-4'>
                 <img src={BASE_URL+RestaurantData.cloudinaryImageId} alt="" className='w-15 h-15'/>
                 <div>
                 <h1 className='font-bold text-lg'>{RestaurantData.name}</h1>
                 <p>{RestaurantData.city}</p>
                 <hr className='text-gray-500 border-1 rounded-md mt-2' />
                 </div>
             
              </div>
            <div className='overflow-y-auto h-70 mb-4 custom-scrollbar'>
            {items.map((obj, cardIndex) => (
              <CartedCards obj={obj} restaurant={RestaurantData} cardIndex={cardIndex} key={cardIndex}/>
            ))}
            </div >
            <h1 className='p-2 shadow-lg font-bold pl-5  h-20 flex items-center '>TOTAL PAYABLE : </h1>
            </div>
          ) : (
            <p className="text-center text-gray-600">Restaurant data is missing.</p>
          )}
        </div>
      )}
    </div>

    </div>
  );
};

export default Cart;
