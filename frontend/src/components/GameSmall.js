import React from 'react';
import { Link } from 'react-router-dom';
import './GameSmall.scss';

const GameSmall = ({ game, mainTeam, year }) => {
  const otherTeam = game.homeTeam === mainTeam ? game.awayTeam : game.homeTeam;

  const otherTeamRoute = `/teams/${otherTeam}/${year}`;
  const isWinner = mainTeam === game.winner;
  return (
    <div className={isWinner ? 'GameSmall win-card' : 'GameSmall loss-card'}>
      <span className='versus'>vs</span>{' '}
      <h3 className='game-opponent'>
        <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h3>
      <p className='game-result'>
        {game.winner} won by {Math.abs(game.homeScore - game.awayScore)} points
      </p>
    </div>
  );
};

export default GameSmall;
