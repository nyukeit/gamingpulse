import './App.css';
import CardList from './components/CardList/CardList';
import LeftNavigation from './components/LeftNavigation/LeftNavigation';
import PrimaryCard from './components/PrimaryCard/PrimaryCard';
import RightSideBar from './components/RightSidebar/RightSidebar';
import axios from 'axios'; // Import d'Axios
import { useEffect, useState } from 'react';
import GamesContext from '../src/contexts/GamesContext';

function App() {
  const [games, setGames] = useState([]);
  
  const fetchData = async () => {
    try {
      const REACT_API_KEY = '5bad98172a4a4656a957008bfc985ab1';
      const response = await axios.get(`https://api.rawg.io/api/games?key=${REACT_API_KEY}`);
      setGames(response.data.results);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <GamesContext.Provider value={{games:games, setGames:setGames}}>
      <LeftNavigation />
      <section>
        <PrimaryCard />
        <CardList />
      </section>
      <RightSideBar />
    </GamesContext.Provider>
    </>
  );
}

export default App;
