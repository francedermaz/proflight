import { useState } from "react";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import classes from "./Carousel.module.scss";

const cardsData = [
  { id: 0, isSelected: true },
  { id: 1, isSelected: false },
  { id: 2, isSelected: false },
  { id: 3, isSelected: false },
];

export const Carousel = () => {
  const [selectedCardId, setSelectedCardId] = useState(0);

  const handleSelectCard = (cardId) => {
    setSelectedCardId(cardId);
  };

  const handleButtonChangeRight = () => {
    selectedCardId < 3
      ? setSelectedCardId(selectedCardId + 1)
      : setSelectedCardId(0);
  };

  const handleButtonChangeLeft = () => {
    selectedCardId <= 0
      ? setSelectedCardId(3)
      : setSelectedCardId(selectedCardId - 1);
  };

  return (
    <div className={classes["carousel"]}>
      <Button direction={"left"} onChange={handleButtonChangeLeft} />
      {cardsData.map((card) => (
        <Card
          key={card.id}
          isSelected={card.id === selectedCardId}
          onSelect={() => handleSelectCard(card.id)}
        />
      ))}
      <Button direction={"right"} onChange={handleButtonChangeRight} />
    </div>
  );
};
