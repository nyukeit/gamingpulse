import './App.css';
import LeftNavigation from './components/LeftNavigation/LeftNavigation';
import PrimaryCard from './components/PrimaryCard/PrimaryCard';
import RightSideBar from './components/RightSidebar/RightSidebar';
import axios from 'axios'; // Import d'Axios
import { useEffect, useState } from 'react';

function App() {
  const [games, setGames] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const REACT_API_KEY = '5bad98172a4a4656a957008bfc985ab1';
        const response = await axios.get(`https://api.rawg.io/api/games?key=${REACT_API_KEY}`);
        setGames(response.data.results);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (games.length > 0) {
        setCurrentCardIndex((prevIndex) => {
          return prevIndex === games.length - 1 ? 0 : prevIndex + 1;
        });
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [games]);

  return (
    <>
      <LeftNavigation />
      <PrimaryCard games={games} currentCardIndex={currentCardIndex} />
      <RightSideBar />
    </>
  );
}

export default App;
