import { BASE_URL } from './Utils/Constants';
import CartedCards from './CartedCards';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"; 
import { useSelector } from 'react-redux';

const Bill = () => {
  const RestaurantData = useSelector((state) => state.cart.restaurantData);
    const items = useSelector((state) => state.cart.items);

    let total =0;
   for(let i=0;i<items.length;i++){
      total +=  (items[i].count * (items[i].card.info.defaultPrice || items[i].card.info.price || 0) / 100);
   }
   
  return (
    <div className="w-2/7 m-auto bg-white h-auto ml-5">
      
    <div>
      {/* {console.log("THERE WE GO",RestaurantData)} */}
      {RestaurantData ? (
        <div className=''>
          <div className='flex gap-3 w-9/10 m-auto p-4  '>
             <img src={BASE_URL+RestaurantData.cloudinaryImageId} alt="" className='w-15 h-15'/>
             <div>
             <h1 className='font-bold text-md'>{RestaurantData.name}</h1>
             <p>{RestaurantData.city}</p>
             <hr className='text-gray-500 border-1 rounded-md mt-2' />
             </div>
          </div>
        <div className='h-auto max-h-70 mb-4 custom-scrollbar overflow-y-auto '>
        {items.map((obj, cardIndex) => (
          <CartedCards obj={obj} restaurant={RestaurantData} cardIndex={cardIndex} key={cardIndex}/>
        ))}
        </div >
        <div className='relative'>
          <FontAwesomeIcon icon={faQuoteLeft} className='absolute left-8 top-4 text-sm'/>
        <input type="text" className='bg-gray-100 truncate px-2 py-3 w-9/10 ml-4 pl-10 mb-5 text-sm font-semibold outline-0' placeholder='Any Suggestions? We will Pass it on...' />
        </div>
        <div className='border border-gray-500 w-9/10 m-auto py-1.5 pl-12 text-sm pr-8 relative'> 
        <input type="checkbox" className='custom-checkbox border-[3px] accent-black' />
        <span className='font-semibold'>Opt in for No-contact Delivery</span>
          <p className='text-justify text-gray-600 font-[500]' >
          Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</p>
        </div>
        <div className='my-3'> 
        <h1 className='font-semibold border-b-2 border-gray-400 w-9/10 m-auto pb-1.5 text-sm'>Bill Details</h1>
        <h1 className='font-bold pl-5 py-4 flex items-center justify-between w-9/10'><span>TO PAY</span> <span>₹ {total} </span></h1>
        </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Restaurant data is missing.</p>
      )}
    </div>
  
</div>

  )
}

export default Bill
