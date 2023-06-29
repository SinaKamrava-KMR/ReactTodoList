import Button from "./Button";

export default function Card({ card, onCardRemove, onCardPacked }) {
  return (
    <div className="card">
      <p className={`${card.packed ? "packed-text" : ""}`}>{card.text}</p>
      <Button
        bgColor="#0bd4a2"
        onClick={() => onCardPacked({ ...card, packed: !card.packed })}
      >
        <i 
        className="bi bi-check-lg"></i>
      </Button>
      <Button onClick={() => onCardRemove(card.id)}>
        <i 
        className="bi bi-trash-fill"></i>
      </Button>
    </div>
  );
}
