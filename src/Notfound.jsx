import React from 'react'
import NoData from './assets/NoData.svg'
const Notfound = () => {
  return (
    <>
    <h1 className='font-bold text-center w-full  text-amber-500 tracking-widest text-2xl'>NO_DATA_FOUND...!</h1>
    <img src={NoData} alt="" className='w-full  h-80' />
   </>
  )
}
export default Notfound
