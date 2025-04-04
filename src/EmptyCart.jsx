import emptyCart from './assets/emptyCart.avif'
const EmptyCart = () => {
  return (
           <div className='flex flex-col justify-center items-center '>
           <img src={emptyCart} alt="" className=' h-80'  />
           <h1 className='font-bold mt-4 text-2xl'>Your cart is empty</h1>
           <p className='font-semibold text-gray-500 mt-2'>You can go to home page to view more restaurants</p>
           </div>
  )
}
export default EmptyCart
