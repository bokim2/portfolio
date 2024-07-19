import React from 'react'
import SingleCardForGrid, { SINGLE_CARD_DATA } from './singleCardForGrid';

type TCardDeck = {selectedCardIndex: number | null}

export default function CardDeck({selectedCardIndex}:  TCardDeck) {
  return (<>
    {selectedCardIndex !== null &&
        Array.from({
            length: SINGLE_CARD_DATA[selectedCardIndex]?.length,
        }).map((activeIndex, i) => {
            return (
                <>
              <SingleCardForGrid
                key={i}
                item={SINGLE_CARD_DATA[selectedCardIndex]}
                activeIndex={i}
                cardIndex={0}
                selectedCardIndex={selectedCardIndex}
                // isOpen = {selectedCardIndex === i}
                />
            </>
          );
        })}
        </>
  )
}
