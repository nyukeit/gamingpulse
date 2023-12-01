import PropTypes from 'prop-types';

const CardComponent = ({game}) => {
  return (
    <div className="card_component">
       
                <img className="card-image" src={game?.background_image} alt={game?.name} />
                <h2 className="card-title">{game?.name}</h2>
        
    </div>
  );
};

CardComponent.propTypes = {
    game: PropTypes.shape({
      background_image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // Ajoute ici d'autres propriétés si nécessaire
    }).isRequired,
  };

export default CardComponent;

