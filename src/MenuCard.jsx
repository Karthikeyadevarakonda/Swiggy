import {
  faStar,
  faCircle,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "./Utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuCard = ({ obj, cardIndex }) => {
  return (
    <div key={cardIndex} className="m-4 ">
      <div className="w-full h-50 p-4 flex">
        <div className=" pr-5 w-[75%] space-y-1.5">
          <div className="flex items-center">
            {obj.card.info.isVeg === 1 ? (
              <span className="border-2 border-green-600 rounded-md p-2 flex items-center justify-center w-5 h-5">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-green-600 text-[9px]"
                />{" "}
              </span>
            ) : (
              <span className="border-2 border-red-600 rounded-md p-2 flex items-center justify-center w-5 h-5">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-red-600 text-[9px]"
                />
              </span>
            )}
            <span className="text-red-500 pl-2 font-semibold">
              {obj.card?.info?.ribbon?.text && (
                <p>
                  <FontAwesomeIcon icon={faMedal} /> {obj.card.info.ribbon.text}{" "}
                </p>
              )}
            </span>
          </div>
          <h4 className="font-bold text-lg text-[#444444]">
            {obj.card.info.name}
          </h4>
          <p className="font-semibold">
            {"₹" +
              (obj.card.info.defaultPrice
                ? parseFloat(obj.card.info.defaultPrice / 100)
                    .toString()
                    .replace(/\.0+$/, "")
                : obj.card.info.price
                ? parseFloat(obj.card.info.price / 100)
                    .toString()
                    .replace(/\.0+$/, "")
                : "0")}
          </p>
          {obj.card.info?.ratings?.aggregatedRating?.rating ? (
            <p>
              <FontAwesomeIcon icon={faStar} className="text-green-700" />
              {obj.card.info?.ratings?.aggregatedRating?.rating} (
              {obj.card.info?.ratings?.aggregatedRating?.ratingCountV2})
            </p>
          ) : (
            ""
          )}
          <p className="line-clamp-2 text-stone-600 font-normal">
            {obj.card.info?.description}
          </p>
        </div>

        <div className="w-[25%]">
          <img
            src={BASE_URL + obj.card.info?.imageId}
            alt=""
            className="h-full w-[83%] m-auto rounded-2xl"
          />
        </div>
      </div>
      <hr className="w-[100%] text-gray-400" />
    </div>
  );
};

export default MenuCard;
