import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // returns parameters passed into Route's path
import { ThreeDots } from 'react-loader-spinner';
import GameDetail from '../components/GameDetail';

export const MatchPage = (props) => {
  let { teamName, year } = useParams();

  const [matchups, setMatchups] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches/${year}`
      );
      const data = await response.json();
      setMatchups(data);
      setIsFetched(true);
    };

    fetchSchedule();
  }, [teamName, year]);

  if (!matchups || !teamName || !year || !isFetched) {
    return <ThreeDots type='Circles' color='#ffffff' height={80} width={80} />;
  }

  return (
    <div className='MatchPage'>
      <h1>Match Page</h1>
      <div className='game-detail-section'>
        {matchups.map((match) => (
          <GameDetail
            year={year}
            mainTeam={isFetched && teamName}
            game={isFetched && match.games[0]}
          />
        ))}
      </div>
    </div>
  );
};
