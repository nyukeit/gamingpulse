import PropTypes from 'prop-types';
import './CardList.css';
import { useContext } from 'react';
import GamesContext from '../../contexts/GamesContext';
import CardComponent from './CardComponent';

const CardList = () => {
    const {games} = useContext(GamesContext);
    // Mélange les jeux pour afficher 4 jeux au hasard
    const shuffledGames = games.sort(() => Math.random() - 0.5).slice(0, 4);
  
    return (
      <div className="card-list">
        <h1>Upcoming Release</h1>
        <div className='card_grid'>
        {shuffledGames.map((game, index) => (
          <CardComponent key={index} game={game} />
        ))}
        </div>
      </div>
    );
  };
  


CardList.propTypes = {
    games: PropTypes.array.isRequired,
  };

export default CardList;