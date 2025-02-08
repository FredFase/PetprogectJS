

const personalMovieDB = {
    count: 0,
    movies: {},
    actor: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели", "");
        while( personalMovieDB.count == '' ||  personalMovieDB.count== null || isNaN( personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели", "");
       }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt("Один из просмотренных последних фильмов","").trim(),
                  b = prompt("На сколько оцените его","");
             if(a != '' && b != '' && a != null && b != null && a.length < 50){
             personalMovieDB.movies[a] = b;
             }else{
                i--;
             }
        }
    },
    detectPersonalLevel:function(){
        if(personalMovieDB.count < 10){
            console.log("Просмотренно мало фильмов")
        }else if(personalMovieDB.count > 10 && numberOfFilms <30){
            console.log("Вы классический зритель")
        }else if(personalMovieDB.count > 30 ){
            console.log("Вы киноман")
        }else{
            console.log("Произошла ошибка")
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.private == false){
            personalMovieDB.private = true;
        }else{
            personalMovieDB.private = false;
        }
    },
    showMyDB: function(){
        if(personalMovieDB.private == false){
            console.log(personalMovieDB)
        }else{
            console.log("Данные приватны")
        }
    },
    writeYourGenres: function(){
        for(let i =1; i < 4; i++){
            if(personalMovieDB.genres != null || personalMovieDB.genres !='' ){
                const genres = prompt(`Ваш любимый жанр фильма ${i}`,"")
                personalMovieDB.genres.push(genres) 
            }else{
                console.log("Ввели некоректные данные")
                i--;
            }
            personalMovieDB.genres.forEach((item,i)=>{
                console.log(`Ваш любимый жанр ${i+1} это ${item} `)
            })
        }
    }
};


