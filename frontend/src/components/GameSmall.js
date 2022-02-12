import React from 'react';

const GameSmall = ({ game, mainTeam }) => {
  const otherTeam = game.homeTeam === mainTeam ? game.awayTeam : game.homeTeam;

  return (
    <div className='GameSmall'>
      <p>vs {otherTeam}</p>
    </div>
  );
};

export default GameSmall;
