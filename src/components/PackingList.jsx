import Card from "./common/Card";


export default function PackingList({cards,onCardsChange,sortBy}) {
  
  let sortedList;
  switch (sortBy) {
    case "all":
      sortedList=cards;
      break;
    case "complited":
      sortedList=cards.filter((card) => card.packed);
      break;
    case "uncomplited":
      sortedList=cards.filter((card) => !card.packed);
      break;
    default:
      break;
  }


  function handleUpdateCard(item) {
    onCardsChange(cards.map(card => card.id === item.id ? item : card));
  }
  function handleDeleteCard(id) {
    onCardsChange(cards.filter(card=> card.id !==id));
  }


  return <section className="PackingList">

    {sortedList.map(card=>  <Card key={card.id} card={card} onCardRemove={handleDeleteCard} onCardPacked={handleUpdateCard} /> )}
   

    
   
  </section>
}