import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // returns parameters passed into Route's path
import GameDetail from '../components/GameDetail';
import GameSmall from '../components/GameSmall';
import { ThreeDots } from 'react-loader-spinner';
import './TeamPage.scss';

export const TeamPage = (props) => {
  let { teamName, year } = useParams();

  const [teamData, setTeamData] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/${year}`
      );
      const data = await response.json();
      setTeamData(data);
      setIsFetched(true);
    };

    fetchGames();
  }, [teamName, year]);

  if (!teamData || !teamData.schedule || !teamName || !year || !isFetched) {
    return (
      <ThreeDots
        className='spinner'
        type='Circles'
        color='#ffffff'
        height={80}
        width={80}
      />
    );
  }

  return (
    <div className='TeamPage'>
      <div className='team-name-section'>
        <h1 className='team-name'>{isFetched && teamName}</h1>
        <h2 className='team-division'>
          SEC Division: {teamData.teamRecord.division}
        </h2>
      </div>
      <div className='win-loss-section'>Conference Wins / Losses</div>
      <div className='game-detail-section'>
        <h2>Recent Games</h2>
        <GameDetail
          year={year}
          mainTeam={isFetched && teamName}
          game={isFetched && teamData.matchups[0].games[0]}
          teamRecord={isFetched && teamData.teamRecord}
        />
      </div>
      {isFetched &&
        teamData.matchups.slice(1).map(
          (
            game // map over the last three games
          ) => (
            <GameSmall
              mainTeam={teamName}
              key={game.games[0].week}
              game={game.games[0]}
              year={year}
            />
          )
        )}
      <div>
        <a href='#'>More</a>
      </div>
    </div>
  );
};
