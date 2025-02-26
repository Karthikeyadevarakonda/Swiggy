import React from 'react'


const Card = ({obj}) => {
    return( 
        <div  key={obj.info.id} className="card w-[320px] h-[300px] transition-transform duration-200 hover:scale-92">
          <div className="w-full h-[181px] ">
            <img className="w-full h-full overflow-hidden object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+obj.info.cloudinaryImageId} alt="productimage" />
          </div>
          <div className=" p-3 ">
          <p className="font-bold truncate">{obj.info.name}</p>
          <p className="">{obj.info.avgRating} | <span className="font-medium"> {obj.info.sla.slaString}</span></p>
          <p className="truncate text-gray-500">{obj.info.cuisines.join(", ")}</p>
          <p className="truncate text-gray-500">{obj.info.locality}</p>
          </div>
        </div>
        )
}

export default Card

