import React from 'react'
import { BASE_URL } from './Utils/Constants'

const TopSlider = ({sliderData}) => {
    return (
        <>
        <h1 className="w-full font-bold text-2xl text-[#444444]">What's on your Mind?</h1>
          <section className='custom-scrollbar h-30 sm:h-30 md:h-38 lg:h-52 w-full m-auto flex overflow-x-auto '>
           {sliderData.map((obj)=>{
            return <img className="w-24 h-24 sm:w-24 sm:h-24 md:w-30 md:h-30 lg:w-42 lg:h-44" key={obj.id} src={BASE_URL+obj.imageId} width="144" height="180" alt="restaurants curated for tea"/>
          })}
         </section>
        </>
      )
}

export default TopSlider
