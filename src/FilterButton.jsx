import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire} from "@fortawesome/free-solid-svg-icons";

const FilterButton = ({FilterByToprated,isTopRated}) => {
  return (
    <button
    className="text-black p-2  rounded-lg font-bold bg-white h-10 shadow-[0px_0px_1px_1px_lightgray]"
    onClick={FilterByToprated}
  >
    {isTopRated ? "Top-rated" : "Clear-Filter"} <FontAwesomeIcon icon={faFire} className="text-yellow-400"/>
  </button>
  )
}

export default FilterButton
