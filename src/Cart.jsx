import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import { BASE_URL } from './Utils/Constants';
import CartedCards from './CartedCards';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot,faUser,faWallet } from "@fortawesome/free-solid-svg-icons"; 


const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const RestaurantData = useSelector((state) => state.cart.restaurantData);

   let total =0;
   for(let i=0;i<items.length;i++){
      total +=  (items[i].count * (items[i].card.info.defaultPrice || items[i].card.info.price || 0) / 100);
   }
  
   
  return (
  items.length !== 0 ? (

  <div className='bg-[#E9ECEE] p-5 flex '>

    <div className=' flex-1/2 relative'>
       <div className='flex flex-col justify-between h-full pl-16'>
        <div className='Box1 w-full h-45 bg-white px-10 py-5'>
          <div className=' w-full h-full '>
            <div className='flex h-full'>
              <div className=' flex-1/2 h-full flex flex-col justify-between'>
                <div>
                  <h1 className='font-bold'>ACCOUNT</h1>
                  <p className='text-gray-500 font-normal'>To place your order now, log in to your existing account or sign up.</p>
                </div>
                <div className='flex gap-5 pb-2'>
                   <div className='border border-[#1BA672] px-8 py-0.5 text-[#1BA672] '>
                    <p className='text-center'>Have an account?</p>
                    <p className='text-center font-bold -translate-y-1'>LOG IN</p>
                   </div>
                   <div className='border border-[#1BA672] px-8 py-0.5 text-white bg-[#1BA672] '>
                    <p className='text-center'>New to swiggy?</p>
                    <p className='text-center font-bold -translate-y-1'>SIGN UP</p>
                   </div>
                </div>
              </div>
              <div className=''>
                <img className='' imageid="Image-login_btpq7r" height="130" width="137" imageurl="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"></img>
              </div>
            </div>
          </div>
        </div>
        <div className='Box2 w-full h-30 bg-white flex items-center '>
          <h1 className='font-bold text-gray-400 text-lg pl-10'>Delivery address</h1>
        </div>
        <div className='Box3 w-full h-30 bg-white flex items-center'>
        <h1  className='font-bold text-gray-400 text-lg pl-10'>Payment</h1>
        </div>
       </div>
       <div className='icon1 absolute w-12 h-11 top-12 left-8 shadow-[4px_4px_10px_rgba(0,0,0,0.15),5px_0px_12px_rgba(0,0,0,0.10)] bg-black flex justify-center items-center'>
       <span ><FontAwesomeIcon icon={faUser} className='text-2xl text-white '/></span>
       </div>
       <div className='icon2 z-1 absolute w-12 h-10 bottom-45 left-8 shadow-[4px_4px_10px_rgba(0,0,0,0.15),5px_0px_12px_rgba(0,0,0,0.10)] bg-white flex items-center justify-center'>
       <span ><FontAwesomeIcon icon={faLocationDot} className='text-2xl text-black'/></span>
       </div>
       <div className='icon3 absolute w-12 h-10  bottom-10 left-8 shadow-[4px_4px_10px_rgba(0,0,0,0.15),5px_0px_12px_rgba(0,0,0,0.10)] bg-white flex justify-center items-center'>
       <span ><FontAwesomeIcon icon={faWallet} className='text-xl text-black'/></span>
       </div>
       <div className='iconBorder w-14 h-[63%] border-r border-dashed absolute top-23 left-0'></div>
     </div>
   
    <div className="w-2/7 m-auto shadow bg-white ml-5">
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className=''>
          {/* {console.log("THERE WE GO",RestaurantData)} */}
          {RestaurantData ? (
            <div>
              <div className='flex gap-3 w-9/10 m-auto p-4'>
                 <img src={BASE_URL+RestaurantData.cloudinaryImageId} alt="" className='w-15 h-15'/>
                 <div>
                 <h1 className='font-bold text-md'>{RestaurantData.name}</h1>
                 <p>{RestaurantData.city}</p>
                 <hr className='text-gray-500 border-1 rounded-md mt-2' />
                 </div>
             
              </div>
            <div className='overflow-y-auto h-70 mb-4 custom-scrollbar'>
            {items.map((obj, cardIndex) => (
              <CartedCards obj={obj} restaurant={RestaurantData} cardIndex={cardIndex} key={cardIndex}/>
            ))}
            </div >
            <h1 className='p-2 shadow-lg font-bold pl-5  h-20 flex items-center '>TOTAL PAYABLE : ₹ {total} /- </h1>
            </div>
          ) : (
            <p className="text-center text-gray-600">Restaurant data is missing.</p>
          )}
        </div>
      )}
    </div>

    </div>):(
      <div>
        <EmptyCart/>
      </div>
    )
    
  );
};

export default Cart;
