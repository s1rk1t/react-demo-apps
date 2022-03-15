import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // returns parameters passed into Route's path
import GameDetail from '../components/GameDetail';
import GameSmall from '../components/GameSmall';
import { ThreeDots } from 'react-loader-spinner';
import { PieChart } from 'react-minimal-pie-chart';
import './TeamPage.scss';

export const TeamPage = (props) => {
  let { teamName, year } = useParams();

  const [teamData, setTeamData] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(`/team/${teamName}/${year}`);
      const data = await response.json();
      setTeamData(data);
      setIsFetched(true);
    };

    fetchGames();
    setIsFetched(false);
  }, [teamName, year]);

  if (!teamData || !teamData.schedule || !teamName || !year || !isFetched) {
    return (
      <ThreeDots
        className='spinner dots'
        type='Circles'
        color='#ffffff'
        height={80}
        width={80}
      />
    );
  }

  // if (isFetched) {
  //   nWins = teamData.teamRecord.conferenceGames.wins;
  //   nLosses = teamData.teamRecord.conferenceGames.losses;
  // }

  return (
    <div className='TeamPage'>
      <div className='team-name-section'>
        <h1 className='team-name'>{isFetched && teamName}</h1>
        <h2 className='team-division'>
          SEC Division: {teamData.teamRecord.division}
        </h2>
      </div>
      <div className='win-loss-section'>
        Total Conference Wins/Losses in {year}
        <PieChart
          data={[
            {
              title: 'Losses',
              value: teamData.teamRecord.conferenceGames.losses,
              color: '#780000',
            },
            {
              title: 'Wins',
              value: teamData.teamRecord.conferenceGames.wins,
              color: '#43aa8b',
            },
          ]}
        />
      </div>
      <div className='game-detail-section'>
        <h2 className='game-detail-header'>Recent Games</h2>
        <GameDetail
          year={year}
          mainTeam={isFetched && teamName}
          game={isFetched && teamData.games[0]}
        />
      </div>
      {isFetched &&
        teamData.games.slice(1).map(
          (
            game // map over the last three games
          ) => (
            <GameSmall
              mainTeam={teamName}
              key={game.week}
              game={game}
              year={year}
            />
          )
        )}
      <div className='more-link'>
        <Link to={`/teams/${teamName}/matches/${year}`}>More ></Link>
      </div>
    </div>
  );
};
