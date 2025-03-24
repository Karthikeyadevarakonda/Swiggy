import React from 'react'

const FilterButton = ({FilterByToprated,isTopRated}) => {
  return (
    <button
    className="text-white p-2  rounded-lg font-bold bg-orange-500 h-10"
    onClick={FilterByToprated}
  >
    {isTopRated ? "Top-rated" : "Clear-Filter"}
  </button>
  )
}

export default FilterButton
