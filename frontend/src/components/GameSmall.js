import React from 'react';
import { Link } from 'react-router-dom';

const GameSmall = ({ game, mainTeam }) => {
  const otherTeam = game.homeTeam === mainTeam ? game.awayTeam : game.homeTeam;

  return (
    <div className='GameSmall'>
      <h3>vs {otherTeam}</h3>
      <p>
        {game.winner} won by {Math.abs(game.homeScore - game.awayScore)} points
      </p>
    </div>
  );
};

export default GameSmall;
