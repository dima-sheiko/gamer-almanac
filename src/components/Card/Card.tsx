import React from 'react';
import { TGame } from '../../types/TGame';

type CardProps = {
  game: TGame;
};

export const Card = ({ game }: CardProps) => {
  return (
    <div>
      <div>
        <img src={game.picture} alt='game artwork' />
      </div>
      <div>
        <p>{game.title}</p>
        <p>{game.developer}</p>
        <p>{game.genre}</p>
        <p>{game.year}</p>
        <a href={game.link} target='_blank'>
          Steam
        </a>
      </div>
    </div>
  );
};
