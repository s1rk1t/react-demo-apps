import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './GameDetail.scss';

const GameDetail = ({ mainTeam, game, year, teamRecord }) => {
  const otherTeam = game.homeTeam === mainTeam ? game.awayTeam : game.homeTeam;
  const otherTeamRoute = `/teams/${otherTeam}/${year}`;
  const date = new Date(game.date);
  const formattedDate = moment(date).format('MM-DD-YYYY');
  const isGameWinner = mainTeam === game.winner;

  return (
    <div
      className={isGameWinner ? 'GameDetail win-card' : 'GameDetail loss-card'}
    >
      <span className='versus'>vs</span>{' '}
      <h2 className='game-opponent'>
        <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h2>
      <h3 className='game-date'>{formattedDate}</h3>
      <h3 className='game-venue'>at {game.venue}</h3>
      <h3 className='game-result'>
        {game.winner} won by {Math.abs(game.homeScore - game.awayScore)} points
      </h3>
    </div>
  );
};

export default GameDetail;
