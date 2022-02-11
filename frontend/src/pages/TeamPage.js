import React, { useEffect, useState } from 'react';
import GameDetail from '../components/GameDetail';
import GameSmall from '../components/GameSmall';

export const TeamPage = (props) => {
  const [teamData, setTeamData] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('http://localhost:8080/team/Georgia/2020');
      const data = await response.json();
      setTeamData(data);
      setIsFetched(true);
    };

    fetchGames();
  }, []);

  return (
    <div className='TeamPage'>
      <h1>{isFetched && teamData.teamRecord.team}</h1>
      <GameDetail game={isFetched && teamData.schedule[0]} />
      {isFetched &&
        teamData.schedule.slice(1).map(
          (
            game // map over the last three games
          ) => <GameSmall key={game.week} game={game} />
        )}
    </div>
  );
};
