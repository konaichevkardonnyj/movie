const numerofFilms = prompt("Сколько фильмов вы уже посмотрели?","");
//document.write(numerofFilms);
//console.log(numerofFilms);
const personalMovieDB = {
    count: numerofFilms,
    movie: [],
    actors: {},
    genres: [],
    privat: false,
    };
const a= prompt("Один из последних фильмов?", ""),
    b= prompt("На сколько оцените его?", ""),
    c= prompt("Какой жанр вы любите?", ""),
    d= prompt("Любите ли вы плакать под фильм?", "");
personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;
console.log(personalMovieDB);
