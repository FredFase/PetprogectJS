const numberOfFilms = prompt("Сколько фильмов вы посмотрели", "")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    private: false
};

const a = prompt("Один из просмотренных последних фильмов",""),
      b = prompt("На сколько оцените его",""),
      c = prompt("Один из просмотренных последних фильмов",""), 
      d = prompt("На сколько оцените его","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)