import './PrimaryCard.css';
import { useState, useEffect } from 'react';
import { fetchGameData } from './fetch';

const PrimaryCard = () => {
  const [games, setGames] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGameData();
      setGames(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Vérifie s'il y a des jeux à afficher
      if (games.length > 0) {
        setCurrentCardIndex((prevIndex) => {
          // Incrémente l'index de la carte actuellement affichée
          // Si c'est le dernier jeu, retourne au début (index 0)
          return prevIndex === games.length - 1 ? 0 : prevIndex + 1;
        });
      }
    }, 10000); // Change toutes les 3 secondes (ajuste la durée selon tes préférences)

    // Nettoie l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [games]); // Exécute l'effet à chaque changement de jeux

  return (
    <div className="primary-card">
      {games.length > 0 && (
        <div>
          <img className="main_picture" src={games[currentCardIndex].background_image} alt={games[currentCardIndex].name} />
          <h1>{games[currentCardIndex].name}</h1>
        </div>
      )}
    </div>
  );
};

export default PrimaryCard;
