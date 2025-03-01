
import { BASE_URL } from "./Utils/Constants";

const Card = ({ obj }) => {
  let discountLabel = obj.info.aggregatedDiscountInfoV3?.header || "";
  let FlatPrice = obj.info.aggregatedDiscountInfoV3?.subHeader || "";

  return (
    <div
      key={obj.info.id}
      className="card w-[49%] rounded-md shadow-xl sm:shadow-none sm:w-[48%] h-60 sm:h-74 md:w-[320px] md:h-[310px] transition-transform duration-200 hover:scale-92"
    >
      <div className="w-30 h-30 rounded top-3 sm:top-0 sm:rounded-none sm:w-full sm:h-[141px] md:h-[181px] relative m-auto">
        <img
          className="w-full h-full overflow-hidden object-cover rounded-2xl "
          src={BASE_URL + obj.info.cloudinaryImageId}
          alt="productimage"
        />
        <p className="text-gray-100  sm:text-lg sm:tracking-wider absolute bottom-2 left-3 font-bold">
          {discountLabel + " " + FlatPrice}
        </p>
      </div>
      <div className=" p-3 text-sm tracking-tight sm:text-lg sm:tracking-normal">
        <p className="font-bold truncate">{obj.info.name}</p>
        <p className="">
          {obj.info.avgRating} |{" "}
          <span className="font-medium"> {obj.info.sla.slaString}</span>
        </p>
        <p className="truncate text-gray-500">{obj.info.cuisines.join(", ")}</p>
        <p className="truncate text-gray-500">{obj.info.locality}</p>
      </div>
    </div>
  );
};

export default Card;
