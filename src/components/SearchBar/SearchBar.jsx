import { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const icons = [
    {
      name: 'PC',
      icon: 'https://worldvectorlogo.com/download/microsoft-windows-22.svg'
    },
    {
      name: 'Apple Macintosh',
      icon: 'https://worldvectorlogo.com/download/apple-14.svg'
    }
  ]

  const searchGames = async (term) => {
    try {
      const response = await axios({
        method: 'get',
        url: `https://api.rawg.io/api/games?search=${term}&key=5bad98172a4a4656a957008bfc985ab1`,
      })
      return response.data.results; // Récupérez les résultats ou les jeux correspondants
    } catch (error) {
      console.error('Erreur lors de la recherche de jeux : ', error);
      return [];
    }
  };

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    
    if (value.trim() !== '') {
      const results = await searchGames(value);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };
  
  const gameLink = useNavigate();

  const handleGetGame = (suggestion) => {
    gameLink(`/game/${suggestion.id}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await searchGames(searchTerm);
    onSearch(results); // Exécuter la recherche finale avec les résultats
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;

  //     if (offset > 0) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className={`search-bar-container ${isSticky ? 'sticky' : ''}`}>
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
          {/* <button type="submit" className="search-button">
            Search
          </button> */}
        </div>
        {/* Afficher les suggestions ici */}
        <div className={ suggestions.length > 0 ? 'suggestions' : 'suggestions-hidden'}>
          <ul className='suggestion-list'>
            {suggestions.map((suggestion) => (
              <li key={suggestion.id} className="suggestion-item">
                <div className='search-result-image'><img className="suggestion-image" src={suggestion.background_image}></img></div>
                <div className='search-result-title'><a onClick={handleGetGame}>{suggestion.name}</a></div>
                <div className='suggestions-platforms'>
                  { suggestion.parent_platforms === undefined ? <h3>Sorry, no matches</h3> :
                    suggestion.parent_platforms.map((platform, index) =>
                    platform.platform === undefined ? <h3>Sorry, no matches</h3> :
                    <span key={index}>{platform.platform.name}{index !== suggestion.parent_platforms.length - 1 ? ', ' : ''}</span>
                  )}
                </div>
              </li>
          ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
