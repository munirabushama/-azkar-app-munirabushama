import Counter from "./Counter";
import { useState, useEffect } from "react";
import "./App.css";
import db from "../db.json"; 

function App() {
  const [cards, setCards] = useState([db.cards]);
  return (
    <div className="App">
      <div className="cards-grid">
        {cards.map((card) => (
          <Counter
            key={card.id}
            title={card.title}
            numoftries={card.count}
            backcolor={card.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
