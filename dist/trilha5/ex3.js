"use strict";
class FavoriteManager {
    constructor() {
        this.favorites = [];
    }
}
class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item) {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
        }
    }
    getFavorites() {
        return this.favorites.sort();
    }
}
class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item) {
        this.favorites.unshift(item);
    }
    getFavorites() {
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
