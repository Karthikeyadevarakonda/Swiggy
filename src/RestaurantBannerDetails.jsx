import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"; 

const RestaurantBannerDetails = ({MainData}) => {
  return (
    <div className="mt-5 rounded-b-4xl p-5 bg-gradient-to-b from-white via-gray-100 to-gray-200 ">
        <h1 className="font-bold text-2xl">{MainData.name}</h1>
        <div className="border border-gray-300 p-4 mt-8 rounded-2xl bg-white">
           <div className="w-full flex items-center relative"><span className="font-semibold pb-1"><FontAwesomeIcon icon={faStar} className="bg-green-700 text-white p-1 rounded-full relative top-1"/> {MainData.avgRating}</span><span className="font-semibold pl-1"> ({MainData.totalRatingsString})</span>
            <span className="font-semibold ml-2">{MainData.costForTwoMessage}</span></div>
            <p className="underline text-red-500 font-semibold cursor-pointer">{MainData.cuisines}</p>
            <p>{MainData.city}</p>
            <p>{MainData.sla.slaString}</p>
        </div>
    </div>
  )
}

export default RestaurantBannerDetails
