const REACT_API_KEY = '5bad98172a4a4656a957008bfc985ab1';

export const fetchGameData = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${REACT_API_KEY}`);
    const data = await response.json();
    return data.results; // On suppose que les données utiles sont dans la propriété 'results'
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    return [];
  }
};