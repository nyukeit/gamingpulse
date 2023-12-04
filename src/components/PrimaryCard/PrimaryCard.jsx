import { useContext, useEffect, useState } from 'react';
import GamesContext from '../../contexts/GamesContext';
import './PrimaryCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrimaryCard = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const {games} = useContext(GamesContext);
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
    <div className="primary-card">
      {games.length > 0 && (
        <Link to={`/game/${games[currentCardIndex].id}`}>
        <div>
          <img className="main_picture" src={games[currentCardIndex].background_image} alt={games[currentCardIndex].name} />
          <h1>{games[currentCardIndex].name}</h1>
        </div>
        
      </Link>
      )}
    </div>
  );
};
PrimaryCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    background_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

  }),
};

export default PrimaryCard;