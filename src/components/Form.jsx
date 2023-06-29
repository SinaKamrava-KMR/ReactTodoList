import Input from "./common/Input";
import SelectBox from "./common/SelectBox";

export default function Form({ onCardsChange, cards,onSorted }) {

  function handleAddCards(card) {
    onCardsChange([...cards,{...card,id:crypto.randomUUID()}])
  }
  return (
    <form  className="form" onSubmit={(e)=> e.preventDefault()}>
      <Input onAdd = {handleAddCards} />
      <SelectBox onFilterUsers={onSorted} />
    </form>
  );
}
