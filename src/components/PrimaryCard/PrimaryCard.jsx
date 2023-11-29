import './PrimaryCard.css';

const PrimaryCard = ({ games, currentCardIndex }) => {
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