import './App.css';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // because season is one year behind current year if the current date is after the CFBCG
  // we must lower the current date by one year if necessary
  // const currentDate = new Date();
  // const currentYear = currentDate.getFullYear();
  // const currentMonth = currentDate.getMonth();
  // const currentDay = currentDate.getDate();

  const season = 2021;
  // for the purposes of this app, let's use the date of the CFBCG: Jan 19th, 2023 as our limiting value
  // if (currentYear > 2022 && currentMonth >= 1 && currentDay >= 19) {
  //   season = currentYear - 1;
  // }

  const teamPagePath = `/teams/:teamName/:${season}`;
  const matchPagePath = `/teams/:teamName/matches/:${season}`;

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path={teamPagePath} element={<TeamPage />}></Route>
          <Route exact path={matchPagePath} element={<MatchPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
