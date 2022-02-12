import React from 'react';

const GameDetail = ({ game, mainTeam }) => {
  const otherTeam = game.homeTeam === mainTeam ? game.awayTeam : game.homeTeam;

  return (
    <div className='GameDetail'>
      <h3>Latest Games</h3>
      <h4>Game Summary</h4>
      <h4>vs {otherTeam}</h4>
    </div>
  );
};

export default GameDetail;
