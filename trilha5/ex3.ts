abstract class FavoriteManager {
	protected favorites: string[];

	constructor() {
		this.favorites = [];
	}

	abstract addFavorite(item: string): void;
	abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
	addFavorite(item: string): void {
		if (!this.favorites.includes(item)) {
			this.favorites.push(item);
		}
	}

	getFavorites(): string[] {
		return this.favorites.sort();
	}
}

class BooksFavoriteManager extends FavoriteManager {
	addFavorite(item: string): void {
		this.favorites.unshift(item);
	}

	getFavorites(): string[] {
		return this.favorites;
	}
}

const movies = new MoviesFavoriteManager();
movies.addFavorite('Inception');
movies.addFavorite('Fight Club');
movies.addFavorite('Inception');
console.log(movies.getFavorites());

const books = new BooksFavoriteManager();
books.addFavorite('Harry Potter');
books.addFavorite('Inferno');
console.log(books.getFavorites());
