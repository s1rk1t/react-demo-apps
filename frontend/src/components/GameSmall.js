import React from 'react';
import { Link } from 'react-router-dom';

const GameSmall = ({ game, mainTeam, year }) => {
  const otherTeam = game.homeTeam === mainTeam ? game.awayTeam : game.homeTeam;

  const otherTeamRoute = `/teams/${otherTeam}/${year}`;

  return (
    <div className='GameSmall'>
      <h3>
        vs <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h3>
      <p>
        {game.winner} won by {Math.abs(game.homeScore - game.awayScore)} points
      </p>
    </div>
  );
};

export default GameSmall;
