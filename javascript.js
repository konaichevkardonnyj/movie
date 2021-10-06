let numerofFilms;
start();
remenberMyFilms();
const personalMovieDB = {
    count: numerofFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
    }
    let i;
function remenberMyFilms() {
    for (let i=0; i<2; i++) {
         const a = prompt("Один из последних фильмов?", ""),
          b = prompt("На сколько оцените его?", "");
        personalMovieDB.movie[a] = b;
        console.log('done')
        if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
        } else {
            console.log('error')
            i--;
        }
    }
}

console.log(personalMovieDB);
function start() {
    numerofFilms = prompt("Сколько фильмов вы уже посмотрели?","");
    while
        (numerofFilms == "" || numerofFilms == null || isNaN(numerofFilms)) {
        numerofFilms = prompt("Сколько фильмов вы уже посмотрели?","");
    }
}
