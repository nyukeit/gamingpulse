import axios from 'axios'; // Import d'Axios
import { useEffect, useState } from 'react';

export default function Genres() {
  const [genres, setGenres] = useState([]);
  
  const fetchData = async () => {
      const REACT_API_KEY = '5bad98172a4a4656a957008bfc985ab1';
      const response = await axios.get(`https://api.rawg.io/api/genres?key=${REACT_API_KEY}`);
      setGenres(response.data.results);
      // console.log(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {
        genres.map((genre) => 
          <button className='genre-button' key={genre.id}>{genre.name}</button>
        )
      }
    </div>
  );
}
