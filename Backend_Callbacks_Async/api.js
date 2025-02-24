export const fetchMovies = async () => {
    try {
        const apiUrl = "http://localhost:3000/movies/"
        const response = await fetch(apiUrl)
        const movies = await response.json()
        console.log(movies);
        renderMovies(movies)
    } catch (e) {
        console.log("error from fetchMovies(): ", e);
        
    }
}


export const searchMovie = async (title) => {
    try {
      const apiUrl = `http://localhost:3000/movies/search?title=${title}`;
      const response = await fetch(apiUrl);
      const movies = await response.json();
      return movies;
    } catch (e) {
      console.log("SearchMovie(): ", e);
    }
  };