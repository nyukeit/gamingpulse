import './LeftNavigation.css';

const LeftNavigation = () => {
  return (
    <div className="left-navigation">
      <div className='nav'>
      <ul className='nav-list'>
        <h4 className="nav-heading">Platforms</h4>
        <li className="nav-item">
          <a href="/">Playstation</a>
        </li>
        <li className="nav-item">
          <a href="/search">XBOX</a>
        </li>
        <li className="nav-item">
          <a href="/search">PC</a>
        </li>
        <li className="nav-item">
          <a href="/search">More Platforms</a>
        </li>
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
  )
}

export default LeftNavigation