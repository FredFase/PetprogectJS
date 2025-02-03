const numberOfFilms = prompt("Сколько фильмов вы посмотрели", "")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    private: false
};

for(let i = 0; i < 2; i++){
    const a = prompt("Один из просмотренных последних фильмов",""),
          b = prompt("На сколько оцените его","");
     if(a != '' && b != '' && a != null && b != null && a.length < 50){
     personalMovieDB.movies[a] = b;
     }else{
        i--;
     }
}

if(numberOfFilms < 10){
    console.log("Просмотренно мало фильмов")
}else if(numberOfFilms > 10 && numberOfFilms <30){
    console.log("Вы классический зритель")
}else if(numberOfFilms > 30 ){
    console.log("Вы киноман")
}else{
    console.log("Произошла ошибка")
}

console.log(personalMovieDB)