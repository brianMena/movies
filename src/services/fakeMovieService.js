import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "09876",
    title: "Terminator",
    genre: { _id: "16345", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-04-03",
  },
  {
    _id: "09877",
    title: "La vida es bella",
    genre: { _id: "32345", name: "Drama" },
    numberInStock: 3,
    dailyRentalRate: 4.5,
    publishDate: "2010-04-03",
  },
  {
    _id: "09878",
    title: "Forest Gump",
    genre: { _id: "32345", name: "Drama" },
    numberInStock: 9,
    dailyRentalRate: 4.7,
    publishDate: "2016-04-03",
  },
  {
    _id: "09879",
    title: "Alien",
    genre: { _id: "62345", name: "Terror" },
    numberInStock: 2,
    dailyRentalRate: 4.1,
    publishDate: "2015-04-03",
  },
  {
    _id: "09886",
    title: "Predator",
    genre: { _id: "14345", name: "Action" },
    numberInStock: 10,
    dailyRentalRate: 3.4,
    publishDate: "2014-04-03",
  },
  {
    _id: "09896",
    title: "Indiana Jones",
    genre: { _id: "17345", name: "Aventure" },
    numberInStock: 3,
    dailyRentalRate: 4.0,
    publishDate: "2013-04-03",
  },
];

export function getMovies() {
  return movies;
}

export function getMoviesById(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}
