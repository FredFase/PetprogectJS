let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    private: false
};

function start(){
     numberOfFilms = +prompt("Сколько фильмов вы посмотрели", "");
     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели", "");
    }
}

start();

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt("Один из просмотренных последних фильмов",""),
              b = prompt("На сколько оцените его","");
         if(a != '' && b != '' && a != null && b != null && a.length < 50){
         personalMovieDB.movies[a] = b;
         }else{
            i--;
         }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if(numberOfFilms < 10){
        console.log("Просмотренно мало фильмов")
    }else if(numberOfFilms > 10 && numberOfFilms <30){
        console.log("Вы классический зритель")
    }else if(numberOfFilms > 30 ){
        console.log("Вы киноман")
    }else{
        console.log("Произошла ошибка")
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if(hidden == false){
        console.log(personalMovieDB)
    }else{
        console.log("Данные приватны")
    }
}

showMyDB(personalMovieDB.private)

function writeYourGenres(){
    for(let i =1; i < 4; i++){
        const genres = prompt(`Ваш любимый жанр фильма ${i}`,"")
        personalMovieDB.genres.push(genres)
    }
}

writeYourGenres();

