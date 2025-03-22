import { faStar, faCircle, faMedal } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL, MENU_IMAGE_URL } from "./Utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addItems } from "./Utils/CartSlice";

const MenuCard = ({ obj, cardIndex }) => {
  
  const dispatch = useDispatch();

  function handleOnClickAdd(){
    dispatch(addItems({ ...obj, count: 1, cardIndex }));
  }

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
            {"₹" + (obj.card.info.defaultPrice || obj.card.info.price) / 100}
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

        <div className="w-[25%] flex items-center relative">
          <img
            src={MENU_IMAGE_URL + obj.card.info?.imageId || BASE_URL + obj.card.info?.imageId }
            alt=""
            className="h-[83%] w-[73%] m-auto rounded-2xl"
          />
          <button className="w-[52%] h-[34px] absolute bottom-0 left-13 rounded-lg bg-white font-bold text-green-600 shadow-lg"
          onClick={handleOnClickAdd}>ADD</button> 
        </div>
      </div>
      <hr className="w-[100%] text-gray-400" />
    </div>
  );
};

export default MenuCard;
