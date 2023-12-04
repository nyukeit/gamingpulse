import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardComponent = ({game}) => {
  return (
    <div className="card_component">
      <Link to={`/game/${game.id}`}>
          <img className="card-image" src={game?.background_image} alt={game?.name} />
          <h2 className="card-title">{game?.name}</h2>
          </Link>
        
    </div>
  );
};

CardComponent.propTypes = {
    game: PropTypes.shape({
      background_image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id : PropTypes.number.isRequired,
    }).isRequired,
  };

export default CardComponent;

