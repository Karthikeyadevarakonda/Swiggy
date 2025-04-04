

const MenuShimmer = () => {
  return (
    <div>
      {Array.from({ length: 20 }).map((_, index) => {
            return(
         <div className="w-full h-48 p-4 flex animate-pulse bg-gray-200 rounded-2xl my-4" key={index} >
              <div className="flex-1/2 p-3 space-y-2">
                <p className="h-7 bg-gray-300 w-full rounded"></p>
                <p className="h-6 bg-gray-300 w-10/11 rounded"></p>
                <p className="h-6 bg-gray-300 w-8/10 rounded"></p>
                <p className="h-6 bg-gray-300 w-5/8 rounded"></p>
              </div>
              <div className="w-1/5 h-full bg-gray-300 animate-pulse rounded-2xl" ></div>
            </div>)
          })}
    </div>
  )
}

export default MenuShimmer
