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
      <h2>Latest Games</h2>
      <h3>Game Summary</h3>
      <h3>vs {otherTeam}</h3>
      <h4>{formattedDate}</h4>
    </div>
  );
};

export default GameDetail;
