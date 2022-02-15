import './App.css';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/teams/:teamName/:year' element={<TeamPage />}></Route>
          <Route
            path='/teams/:teamName/matches/:year'
            element={<MatchPage />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
