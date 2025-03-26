import MenuCard from "./MenuCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
const BigCards = ({ card ,isOpen,setIsOpen }) => {
  const itemsList = [card];
  console.log(card)
  return (
   <div>
      {itemsList.map((card, index) => ( "categories" in card ? 
        ( <div key={index} >
         
          <h4  className="font-bold text-lg mt-2 mb-2">{card.title}</h4>
         
         
          { card.categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
          <div className="flex justify-between items-center">
          <p className="font-semibold text-md mb-4 p-2">{category.title} ({category.itemCards?.length || 0})</p>
          <p onClick={() => setIsOpen(isOpen === category.title ? null : category.title)}><FontAwesomeIcon icon={isOpen === category.title ? faArrowUp : faArrowDown} className="text-xl font-extrabold cursor-pointer w-6 h-10 p-1.5 rounded-full bg-gray-100 " /></p>
          </div>
     
          {isOpen === category.title && category.itemCards.map((obj, cardIndex) => (<MenuCard obj={obj} cardIndex={cardIndex} key={cardIndex}/>))}
          </div>
          ))}
          </div>
       ):(
          <div key={index} className="mt-4 p-2 mb-4">
          <div className="flex justify-between items-center">
          <p className="font-bold text-lg">{card.title} ({card.itemCards?.length || 0})</p>
          <p onClick={() => setIsOpen(isOpen === card.title ? null : card.title)}><FontAwesomeIcon icon={isOpen === card.title ? faArrowUp : faArrowDown} className="text-xl font-extrabold cursor-pointer w-6 h-10 p-1.5 rounded-full bg-gray-100" /></p>
          </div>
          {isOpen === card.title && card.itemCards.map((obj, cardIndex) => (<MenuCard obj={obj} cardIndex={cardIndex} key={cardIndex}/>))}
          </div>
         )
      ))}
    </div>

  );
};

export default BigCards;
