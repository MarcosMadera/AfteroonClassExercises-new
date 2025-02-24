import { movies } from '../data/movies.js';
import { renderMovies, handleAddToFavorites } from './movies.js';

// Initialize Fuse.js
const fuseOptions = {
	keys: ['title', 'genre'],
	threshold: 0.3, // Adjusted sensitivity for better matching
};

const fuse = new Fuse(movies, fuseOptions);

function setupEventListeners() {
	const moviesGrid = document.querySelector('.js-movies-grid');
	moviesGrid.addEventListener('click', (event) => handleAddToFavorites(event, movies));

	const searchButton = document.querySelector('.search-icon');
	searchButton.addEventListener('click', handleSearchMovie);
}

function handleSearchMovie() {
	const searchInput = document.querySelector('.search-bar');
	const searchValue = searchInput.value.trim();

	const result = fuse.search(searchValue);
	const filteredMovies = result.map((resultItem) => resultItem.item);

	if (filteredMovies.length > 0) {
		renderMovies(filteredMovies);
	} else {
		const moviesGrid = document.querySelector('.js-movies-grid');
		moviesGrid.innerHTML = '<p>No movies found.</p>';
	}
}

// Initial render and setup
renderMovies(movies);
setupEventListeners();