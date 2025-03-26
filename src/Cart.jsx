import React from 'react'
import { useSelector } from 'react-redux'
import MenuCard from './MenuCard'
import EmptyCart from './EmptyCart'

const Cart = () => {
  const items = useSelector((state)=>state.cart.items)
  let AllitemCards =  items;
  console.log(AllitemCards)
 
  return (
    <div  className="w-[70%] m-auto">
        
        {AllitemCards.length === 0 ? <EmptyCart/> : <div><h1 className='font-bold text-center text-3xl my-3 tracking-widest text-[#444444]'>YOUR CART...</h1>
          {AllitemCards.map((obj, AllcardIndex) => (<MenuCard obj={obj} AllcardIndex={AllcardIndex} key={AllcardIndex}/>))}
        </div> }
    </div>
  )
}

export default Cart
