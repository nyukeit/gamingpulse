import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './GameDetails.css'

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
          </div>
          <div className="right-section">
              <div className='gamedetails-section'>
                <h1 className='gamedetails-title'>{gameDetails.name}</h1>
                <p className='gamedetails-section-text'>{(new Date(gameDetails.released).getFullYear())}</p>
              </div>
              <div className='gamedetails-ratings-section'>
                <div className='rating-div'>
                  <h6>Gaming Pulse</h6>
                  <span className='gamedetails-rating'><i>⭐</i> {gameDetails.rating}</span>
                </div>
                <div className='rating-div'>
                  <h6>Metacritic</h6>
                  <span className='gamedetails-rating'><i>🎯</i> {gameDetails.metacritic}</span>
                </div>

              </div>
              <div className='gamedetails-section'>
                <span className='gamedetails-section-title'>Genres</span>
                <p className='gamedetails-section-text'>
                    {gameDetails.genres.map((genre, index) => (
                    <span key={index}>{genre.name}{index !== gameDetails.genres.length - 1 ? ', ' : ''}</span>
                    ))}
                </p>
              </div>
              <div className='gamedetails-section'>
                <span className='gamedetails-section-title'>Platforms</span>
                <p className='gamedetails-section-text'>
                    {gameDetails.parent_platforms.map((platform, index) => (
                    <span key={index}>{platform.platform.name}{index !== gameDetails.parent_platforms.length - 1 ? ', ' : ''}</span>
                    ))}
                </p>
              </div>
          </div>
        </div>
        <div className="description-container">
            <p className='description'>
                {cleanDescription}
            </p> 
        </div>
        <div className='gamedetails-section-tags'>
          <p className='gamedetails-section-title'><i>🏷️</i> Tags</p>
          {
            gameDetails.tags.map((tag, index) => (
              <span className='gamedetails-tags' key={index}>{tag.name}{index !== gameDetails.tags.length - 1 ? ', ' : ''}</span>
            ))
          }
        </div>
    </>
  );
};

export default GameDetails;
