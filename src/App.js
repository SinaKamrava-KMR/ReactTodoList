import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";

export default function App() {
  const [cards, setCards] = useState([]);
  const [sortBy, setSortBy] = useState("all");


  function handleCardsData(cards) {
    setCards(cards);
  }
  return (
    <div className="app">
      <h1>To-Do List</h1>
      <Form
        cards={cards}
        onCardsChange={handleCardsData}
        onSorted={setSortBy}
      />
      <PackingList
        sortBy={sortBy}
        cards={cards}
        onCardsChange={handleCardsData}
      />
    </div>
  );
}
