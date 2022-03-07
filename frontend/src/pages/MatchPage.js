import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // returns parameters passed into Route's path
import { ThreeDots } from 'react-loader-spinner';
import GameDetail from '../components/GameDetail';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';

export const MatchPage = (props) => {
  let { teamName, year } = useParams();

  const [games, setGames] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    setIsFetched(false);
    const fetchSchedule = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches/${year}`
      );
      const data = await response.json();
      setGames(data);
      setIsFetched(true);
    };

    fetchSchedule();
  }, [teamName, year]);

  if (!games || !teamName || !year || !isFetched) {
    return <ThreeDots type='Circles' color='#ffffff' height={80} width={80} />;
  }

  return (
    <div className='MatchPage'>
      <div className='year-selector'>
        <h3>Select Year</h3>
        <YearSelector team={teamName} />
      </div>
      <div className='game-detail-section'>
        <h1 className='team-games-heading'>
          All {teamName} SEC Games In {year}
        </h1>
        {games.map((game) => (
          <GameDetail
            year={year}
            mainTeam={isFetched && teamName}
            game={isFetched && game}
            key={Math.random().toString()}
          />
        ))}
      </div>
    </div>
  );
};
