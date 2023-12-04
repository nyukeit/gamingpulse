import './LeftNavigation.css';
import { useContext } from 'react';
import GamesContext from '../../contexts/GamesContext';
import { Link } from 'react-router-dom';

const LeftNavigation = () => {
  const {setParentPlatform} = useContext(GamesContext);
  return (
    <div className="left-navigation">
       <div className='nav'>
       <ul className='nav-list'>
         <li className="nav-item">
         <Link to="/" onClick={() => setParentPlatform('')}>Home</Link>
         </li>
         <hr></hr>
         <li className="nav-item">
         <Link to="/"onClick={() => setParentPlatform('PlayStation')}>Playstation</Link>
         </li>
         <li className="nav-item">
         <Link to="/" onClick={() => setParentPlatform('Xbox')}>XBOX</Link>
         </li>
         <li className="nav-item">
         <Link to="/" onClick={() => setParentPlatform('PC')}>PC</Link>
         </li>
       </ul>
       <hr></hr>
       <ul className='nav-list'>
       <li className="nav-item">
       <Link to="/" onClick={() => setParentPlatform('')}>Genres</Link>
         </li>
         <li className="nav-item">
         <Link to="/" onClick={() => setParentPlatform('PlayStation')}>Publishers</Link>
         </li>
         <li className="nav-item">
         <Link to="/" onClick={() => setParentPlatform('Xbox')}>Release</Link>
         </li>
         <li className="nav-item">
         <Link to="/" onClick={() => setParentPlatform('PC')}>Tags</Link>
         </li>
       </ul>
       </div>
      <div className='footer'>
        <p className='copyright'>© 2023 Gaming Pulse</p>
      </div>      
    </div>
  )
}

export default LeftNavigation