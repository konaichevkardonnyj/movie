const numerofFilms = prompt("Сколько фильмов вы уже посмотрели?","");
//document.write(numerofFilms);
//console.log(numerofFilms);
const a= prompt("Один из последних фильмов?", ""),
      b= prompt("На сколько оцените его?", ""),
      c= prompt("Один из последних фильмов?", ""),
      d= prompt("На сколько оцените его?", "");
const personalMovieDB = {
    count: numerofFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
    };
