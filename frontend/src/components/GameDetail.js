import React from 'react';
import moment from 'moment';

const GameDetail = ({ mainTeam, game }) => {
  const otherTeam = game.homeTeam === mainTeam ? game.awayTeam : game.homeTeam;
  // console.log('home team: ', game.homeTeam);
  // console.log('away team: ', game.awayTeam);
  // if (!game) return;
  const date = new Date(game.date);
  const formattedDate = moment(date).format('MM-DD-YYYY');
  return (
    <div className='GameDetail'>
      <h3>Latest Games</h3>
      <h2>Game Summary</h2>
      <h2>vs {otherTeam}</h2>
      <h3>{formattedDate}</h3>
      <h3>at {game.venue}</h3>
      <h3>
        {game.winner} won by {Math.abs(game.homeScore - game.awayScore)} points
      </h3>
    </div>
  );
};

export default GameDetail;
