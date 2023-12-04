import './App.css';
import GameDescriptions from './pages/GameDescription'
import CardList from './components/CardList/CardList';
import LeftNavigation from './components/LeftNavigation/LeftNavigation';
import PrimaryCard from './components/PrimaryCard/PrimaryCard';
import RightSideBar from './components/RightSidebar/RightSidebar';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios'; // Import d'Axios
import { useEffect, useState } from 'react';
import GamesContext from '../src/contexts/GamesContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Results from './components/Results/Results';


function App() {
  const [games, setGames] = useState([]);
  const [ParentPlatform, setParentPlatform] = useState('');

  const fetchData = async () => {
    const REACT_API_KEY = '5bad98172a4a4656a957008bfc985ab1';
    const response = await axios.get(`https://api.rawg.io/api/games?page_size=50&key=${REACT_API_KEY}`);
    
    if (ParentPlatform === '') {
      setGames(response.data.results);
    } else {
      setGames(response.data.results.filter((game) => game.parent_platforms.map((platform) => platform.platform.name).includes(ParentPlatform)));
    }
  };

  useEffect(() => {
    fetchData();
  }, [ParentPlatform]);

  return (
    <Router>
      <GamesContext.Provider value={{ games, setGames, ParentPlatform, setParentPlatform }}>
        <LeftNavigation />
        <section>
          <div className="topbar">
            <SearchBar />
          </div>
          <Routes>
            <Route path="/" element={<>
              {ParentPlatform === '' ? <>
                <PrimaryCard />
                <CardList />
              </> : <Results />}
            </>} />
            <Route path="/game/:id" element={<GameDescriptions />} />
          </Routes>
        </section>
        <RightSideBar />
      </GamesContext.Provider>
    </Router>
  );
}

export default App;