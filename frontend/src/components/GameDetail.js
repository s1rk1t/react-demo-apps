import React from 'react';

const GameDetail = ({ game }) => {
  return (
    <div className='GameDetail'>
      <h3>Latest Games</h3>
      <h4>Game Summary</h4>
      <h4>
        {game.homeTeam} vs. {game.awayTeam}
      </h4>
    </div>
  );
};

export default GameDetail;
