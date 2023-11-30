// import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import './LeftNavigation.css';
import { useContext } from 'react';
import GamesContext from '../../contexts/GamesContext';
// import SearchResult from '../../pages/SearchResult';
// import NotFoundPage from '../../pages/NotFound';

const LeftNavigation = () => {
  const {setParentPlatform} = useContext(GamesContext);
  return (
    <div className="left-navigation">
       <div className='nav'>
       <ul className='nav-list'>
         <h4 className="nav-heading">Platforms</h4>
         <li className="nav-item">
           <a onClick={() => setParentPlatform('PlayStation')}>Playstation</a>
         </li>
         <li className="nav-item">
           <a onClick={() => setParentPlatform('Xbox')}>XBOX</a>
         </li>
         <li className="nav-item">
           <a onClick={() => setParentPlatform('PC')}>PC</a>
         </li>
         {/* <li className="nav-item">
           <a href="/search">More Platforms</a>
         </li> */}
       </ul>
       <ul className='nav-list'>
         <h4 className="nav-heading">Filtres</h4>
         <li className="nav-item">
           <a href="/">Genres</a>
         </li>
         <li className="nav-item">
           <a href="/search">Tags</a>
         </li>
         <li className="nav-item">
           <a href="/search">Release</a>
         </li>
         <li className="nav-item">
           <a href="/search">Publisher</a>
         </li>
       </ul>
       </div>
      <div className='footer'>
        <p className='copyright'>© 2023 Gaming Pulse</p>
      </div>      
    </div>
  // </>
  )
}

export default LeftNavigation