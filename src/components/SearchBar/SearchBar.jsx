import { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  const searchGames = async (term) => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games?search=${term}`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`, // Utilisation de la clé API à partir de .env
        },
      });
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

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name); // Mettre à jour le terme de recherche avec la suggestion sélectionnée
    setSelectedSuggestion(suggestion.name); // Mettre à jour la suggestion sélectionnée
    setSuggestions([]); // Masquer les suggestions après la sélection
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await searchGames(searchTerm);
    onSearch(results); // Exécuter la recherche finale avec les résultats
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
        {/* Afficher les suggestions ici */}
        <div className="suggestions">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className={`suggestion-item ${selectedSuggestion === suggestion.name ? 'selected' : ''}`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
