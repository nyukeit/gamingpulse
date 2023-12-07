import {useContext} from 'react';
import GamesContext from '../../contexts/GamesContext';
import './Results.css';
import { Link } from 'react-router-dom';

export default function Results() {
  const {games, ParentPlatform} = useContext(GamesContext);
  const randomGames = games.sort(() => Math.random() - 0.5);
  return (
    <>
    <h2 className='results-title'>Showing results for {ParentPlatform}</h2>
    <div className='results'>
    {
      randomGames.map((game) => 
          <div className="bigcard" > 
      <Link to={`/game/${game.id}`} key={game.id}>
           <div className="bigcard-img">
            <img src={game.background_image} alt={game.name} className="bigcard-thumbnail" />
          </div>
          <div className="bigcard-meta">
            <div className='bigcard-meta-header'>
              <span className='bigcard-genre'>{game.genres[0].name}</span>
              <span className='bigcard-genre'>{(new Date(game.released).getFullYear())}</span>
            </div>
            <h4 className='bigcard-title'>{game.name}</h4>
            <div className="bigcard-meta-footer">
              <span className='bigcard-rating'><i>⭐</i> {game.rating}</span>
              <span className='bigcard-rating'><i>🎯</i> {game.metacritic}</span>
            </div>
          </div>
        </Link>
        </div>
        )
      }
    </div>
    </>
  )
}