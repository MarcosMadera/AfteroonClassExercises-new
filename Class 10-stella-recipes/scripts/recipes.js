function renderMovies(listMovies) {
    const moviesHTML = listMovies
      .map((movie) => `
        <div class="movie-container">
          <div class="movie-image-container">
            <img class="movie-image" src="${movie.image}" alt="${movie.title}">
          </div>
          <div class="movie-details">
            <div class="movie-title limit-text-to-2-lines">
              ${movie.title}
            </div>
            <div class="movie-genre">
              ${movie.genre.join(", ")}
            </div>
            <div class="movie-rating">
              Rating: ${movie.rating.toFixed(1)} / 5
            </div>
            <div class="movie-year">
              Released: ${movie.year}
            </div>
          </div>
          <button class="add-to-favorites-button button-primary js-add-to-favorites" 
          data-movie-id="${movie.id}">
            Add to Favorites
          </button>
        </div>
      `)
      .join("");
  
    const moviesGrid = document.querySelector('.js-movies-
