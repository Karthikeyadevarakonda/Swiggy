import MenuCard from "./MenuCard";

const BigCards = ({ card }) => {
  const itemsList = [card];

  return (
    <div>
      {itemsList.map((card, index) => ( "categories" in card ? 
        ( <div key={index} >
          <h4  className="font-bold text-lg mt-2 mb-2">{card.title}</h4>
          {card.categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
          <p className="font-semibold text-md">{category.title} ({category.itemCards?.length || 0})</p>
          {category.itemCards.map((obj, cardIndex) => (<MenuCard obj={obj} cardIndex={cardIndex} key={cardIndex}/>))}
          </div>
          ))}
          </div>
       ):(
          <div key={index} className="mt-4 p-2 mb-4">
          <p className="font-bold text-lg">{card.title} ({card.itemCards?.length || 0})</p>
          {card.itemCards.map((obj, cardIndex) => (<MenuCard obj={obj} cardIndex={cardIndex} key={cardIndex}/>))}
          </div>
         )
      ))}
    </div>
  );
};

export default BigCards;
