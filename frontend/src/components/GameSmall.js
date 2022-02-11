import React from 'react';

const GameSmall = ({ game }) => {
  return (
    <div className='GameSmall'>
      <p>
        {game.homeTeam} vs. {game.awayTeam}
      </p>
    </div>
  );
};

export default GameSmall;
