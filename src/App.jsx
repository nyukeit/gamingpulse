import './App.css';
import CardList from './components/CardList/CardList';
import LeftNavigation from './components/LeftNavigation/LeftNavigation';
import PrimaryCard from './components/PrimaryCard/PrimaryCard';
import RightSideBar from './components/RightSidebar/RightSidebar';
import SearchBar from './components/SearchBar/SearchBar';
import Results from './components/Results/Results'
import GenresMenu from './components/GenresMenu/GenresMenu';
import axios from 'axios'; // Import d'Axios
import { useEffect, useState } from 'react';
import GamesContext from '../src/contexts/GamesContext';

function App() {
  const [games, setGames] = useState([]);
  const [ParentPlatform, setParentPlatform] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  const fetchData = async () => {
      const REACT_API_KEY = '5bad98172a4a4656a957008bfc985ab1';
      const response = await axios.get(`https://api.rawg.io/api/games?page_size=50&key=${REACT_API_KEY}`);
      // setGames(response.data.results);
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
    <>
    <GamesContext.Provider value={{games:games, setGames:setGames, ParentPlatform:ParentPlatform, setParentPlatform:setParentPlatform}}>
      <LeftNavigation isVisible={isVisible} setIsVisible={setIsVisible} />
      { isVisible ? <GenresMenu /> : null  }
      <section>
      <div className="topbar">
        <SearchBar />
      </div>
        {
          ParentPlatform === '' ? <><PrimaryCard /><CardList /></> : <Results />
        }
      </section>
      <RightSideBar />
    </GamesContext.Provider>
    </>
  );
}

export default App;
