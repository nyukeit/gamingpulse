import { useContext } from 'react'
import GamesContext from '../../../contexts/GamesContext';
import './RightSidebarCard.css'

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
        <div className="card" key={index}>
          <div className="card-img">
            <img src={game.background_image} alt={game.name} className="card-thumbnail" />
          </div>
          <div className="card-meta">
            <h4>{game.name}</h4>
            <p>{game.genres[0].name}</p>
            <span><i>⭐</i> {game.rating}</span>
          </div>
      </div>        
      )
    }
    </>

  )
}

export default RightSidebarCard