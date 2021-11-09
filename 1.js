let numerofFilms;
const personalMovieDB = {
    count: numerofFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
}
ShowMyDB(personalMovieDB.privat);
Start();
function ShowMyDB(privat) {
    if (!privat){
        console.log(personalMovieDB)
    }
}
//function Start() {
//    for (let i = 0; i < 1; i++) {
//         numerofFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
//        if (numerofFilms !== '' && numerofFilms !== null && numerofFilms.length) {
//            personalMovieDB.count = numerofFilms;
//        } else {
//            i--;
//        }
//    }
//}
function Start () {
    numerofFilms = prompt("Сколько фильмов вы уже посмотрели?", "")
while (numerofFilms == '' || numerofFilms == null || isNaN(numerofFilms))
    numerofFilms = prompt("Сколько фильмов вы уже посмотрели?", "")
    {
        personalMovieDB.count = numerofFilms;
    }
}

