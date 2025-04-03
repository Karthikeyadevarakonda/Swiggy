import React from 'react'
import Left from './assets/Left.png'
import Right from './assets/Right.png'
import Sushi from './assets/Sushi_replace.png'
import Vegie from './assets/Veggies_new.png'
import Swiggy_Logo from './assets/Swiggy_logo_bml6he.png'

const TheMainPage = ({setMainBtn}) => {
  return (
    <div className='bg-[#FF5200] w-full h-[530px] relative'>
      <img src={Swiggy_Logo} alt="" className='w-28 left-30 top-7 absolute' />
      <img src={Vegie} alt="" className='absolute w-41 top-17 left-0'/>
      <img src={Sushi} alt="" className='absolute w-41 top-17 right-0'/>

      <div className='absolute left-90 top-38 w-[580px] h-11 flex gap-4'>
        <input type="text" placeholder='Nellore,AndraPradesh...' className='h-full outline-0 pl-8 bg-white rounded-xl w-[220px] truncate' />
        <input type="text" placeholder='Search for restaurant, item or more....' className='h-full outline-0 pl-8 bg-white rounded-xl flex-1 truncate'/>
      </div>
    
      <div className='flex w-4/5 h-77 absolute bottom-4 left-33'>
        <div><img src={Left} onClick={()=>setMainBtn(true)} alt="" className='w-full h-full cursor-pointer' /></div>
        <div><img src={Right} alt="" className='w-full h-full '/></div>
      </div>
     
    </div>
  )
}



export default TheMainPage
