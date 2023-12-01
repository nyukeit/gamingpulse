import './LeftNavigation.css';
import { useContext } from 'react';
import GamesContext from '../../contexts/GamesContext';

const LeftNavigation = ({isVisible, setIsVisible}) => {
  const {setParentPlatform} = useContext(GamesContext);

  const handleVisibility = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  return (
    <div className="left-navigation">
       <div className='nav'>
       <ul className='nav-list'>
         <li className="nav-item">
           <a onClick={() => setParentPlatform('')}>Home</a>
         </li>
         <hr></hr>
         <li className="nav-item">
           <a onClick={() => setParentPlatform('PlayStation')}>Playstation</a>
         </li>
         <li className="nav-item">
           <a onClick={() => setParentPlatform('Xbox')}>XBOX</a>
         </li>
         <li className="nav-item">
           <a onClick={() => setParentPlatform('PC')}>PC</a>
         </li>
       </ul>
       <hr></hr>
       <ul className='nav-list'>
       <li className="nav-item">
           <a onClick={handleVisibility}>Genres</a>
         </li>
         <li className="nav-item">
           <a onClick={() => setParentPlatform('PlayStation')}>Publishers</a>
         </li>
         <li className="nav-item">
           <a onClick={() => setParentPlatform('Xbox')}>Release</a>
         </li>
         <li className="nav-item">
           <a onClick={() => setParentPlatform('PC')}>Tags</a>
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