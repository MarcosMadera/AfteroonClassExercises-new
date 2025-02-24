// Movie class encapsulates data and behaviors for individual movies
export class Movie {
	constructor(id, title, genre, rating, year, image) {
		this.id = id;
		this.title = title;
		this.genre = genre;
		this.rating = rating;
		this.year = year;
		this.image = image;
	}

	getShortDetails() {
		return `${this.title} (${this.year}) - Rating: ${this.rating}`;
	}
}

// FavoritesManager class manages the favorites list
export class FavoritesManager {
	constructor() {
		this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
	}

	addFavorite(movie) {
		if (!this.favorites.some((fav) => fav.id === movie.id)) {
			this.favorites.push(movie);
			this.saveToLocalStorage();
			alert(`${movie.title} added to favorites!`);
		} else {
			alert(`${movie.title} is already in favorites.`);
		}
	}

	saveToLocalStorage() {
		localStorage.setItem('favorites', JSON.stringify(this.favorites));
	}

	getFavorites() {
		return this.favorites;
	}
}