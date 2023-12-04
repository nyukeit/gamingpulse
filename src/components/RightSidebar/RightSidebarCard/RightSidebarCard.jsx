import { useContext } from 'react'
import GamesContext from '../../../contexts/GamesContext';
import './RightSidebarCard.css'
import { Link } from 'react-router-dom';

const RightSidebarCard = () => {
  const {games} = useContext(GamesContext);
  // console.log(games[0])
  const topRated = () => {
    const sortedGames = games.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    });
    return sortedGames;
    }
    const topRatedGames = topRated().slice(0, 3); 

  return (
    <>
    {
      topRatedGames.map((game, index) => 
        <div className="rs-card" key={index}>
          <Link to={`/game/${game.id}`}>
          <div className="rs-card-img">
            <img src={game.background_image} alt={game.name} className="rs-card-thumbnail" />
          </div>
          <div className="rs-card-meta">
            <h4 className='rs-card-title'>{game.name}</h4>
            <p className='rs-card-genre'>{game.genres[0].name}</p>
            <span><i>⭐</i> {game.rating}</span>
          </div>
          </Link>
        </div>        
      )
    }
    </>

  )
}

export default RightSidebarCard