import axios from 'axios'; // Import d'Axios
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './GenreCards.css';

export default function Genres() {
  const [genre, setGenre] = useState([]);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  }

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get('https://api.rawg.io/api/genres?key=5bad98172a4a4656a957008bfc985ab1');
      setGenre(response.data.results);
    }

    getGenres();
  }, []);

  return (
  <Slider {...settings} className='genre-slider'> 
    {
        genre.map((genre) =>
        <div className='genre-card' key={genre.id}> 
          <div className="genre-card-img">
            <img src={genre.image_background} alt={genre.name} className="genre-card-thumbnail" />
          </div>
          <div className="genre-card-meta">
            <h4 className='genre-card-title'>{genre.name}</h4>
          </div>
        </div>
        )
      }
    </Slider>

  );
}