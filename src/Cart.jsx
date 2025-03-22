import React from 'react'
import { useSelector } from 'react-redux'
import MenuCard from './MenuCard'

const Cart = () => {
  const items = useSelector((state)=>state.cart.items)
  let AllitemCards =  items;
  console.log(AllitemCards)
 
  return (
    <div  className="w-[70%] m-auto">
        {AllitemCards.length === 0 ? "HEY NO ITEMS IN CART" : AllitemCards.map((obj, AllcardIndex) => (<MenuCard obj={obj} AllcardIndex={AllcardIndex} key={AllcardIndex}/>))}
    </div>
  )
}

export default Cart
