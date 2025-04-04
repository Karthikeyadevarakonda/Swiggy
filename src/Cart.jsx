import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import LoginPageOnCart from './LoginPageOnCart';
import Bill from './Bill';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  return (
  items.length !== 0 ? (
  <div className='bg-[#E9ECEE] p-5 flex '>
        <LoginPageOnCart/>
        <Bill/>
  </div>):(
      <div>
        <EmptyCart/>
      </div>
    ) 
  );
};

export default Cart;
