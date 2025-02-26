
import React from 'react'

const Shimmer = () => {
    return (
        <div className="Container flex flex-wrap w-[80%] m-auto gap-5 mt-20 ">
          {Array.from({ length: 20 }).map((_, index) => {
            return(
            <div
              key={index} className="card w-[320px] h-[300px] animate-pulse rounded bg-gray-200 rounded-lg">
              <div className="w-full h-[181px] bg-gray-300 rounded-lg"></div>
              <div className=" p-3 space-y-2">
                <p className="h-4 bg-gray-400 w-full rounded"></p>
                <p className="h-4 bg-gray-400 w-10/11 rounded"></p>
                <p className="h-3 bg-gray-400 w-1/2 rounded"></p>
                <p className="h-3 bg-gray-400 w-1/3 rounded"></p>
              </div>
            </div>)
          })}
        </div>
      );
}

export default Shimmer

