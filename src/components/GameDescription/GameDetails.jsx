import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './gameDetails.css'

const GameDetails = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const REACT_API_KEY = '5bad98172a4a4656a957008bfc985ab1';
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${REACT_API_KEY}`);
        setGameDetails(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du jeu :', error);
      }
    };

    fetchGameDetails();
  }, [id]);


  if (!gameDetails) {
    return <div>Loading...</div>;
  }
  function removeHtmlTags(textWithHtml) {
    const regex = /(<([^>]+)>)/gi;
    return textWithHtml.replace(regex, '');
  }
  
  const gameDescription = gameDetails.description;
  const cleanDescription = removeHtmlTags(gameDescription);
  
  return (
    <>
        <div className="game-details">
        <div className="left-section">
            <img id="detail-picture" src={gameDetails.background_image} alt={gameDetails.name} />
            <div className='meta'>
                <span className='bigcard-rating'><i>⭐</i> {gameDetails.rating}</span>
                <span className='bigcard-rating'><i>🎯</i> {gameDetails.metacritic}</span>

            </div>
            </div>
        <div className="section-right">
            <h1>{gameDetails.name}</h1>
            <p>Released: {gameDetails.released}</p>
            <p>
                Genre :
                {gameDetails.genres.map((genre, index) => (
                <span key={index}>{genre.name}{index !== gameDetails.genres.length - 1 ? ', ' : ''}</span>
                ))}
            </p>
            <p>Playtime: {gameDetails.playtime}</p>
            <p>
                Platform :
                {gameDetails.parent_platforms.map((platform, index) => (
                <span key={index}>{platform.platform.name}{index !== gameDetails.parent_platforms.length - 1 ? ', ' : ''}</span>
                ))}
            </p>
        </div>
        </div>
        <div className="description">
            <p>
                {cleanDescription}
            </p> 
        </div>
    </>
  );
};

export default GameDetails;
