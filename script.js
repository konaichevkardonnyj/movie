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
writeYourGenres();
PersonalLevel();
RememberMyFilms();
function ShowMyDB(privat) {
    if (!privat){
        console.log(personalMovieDB)
           }
}

function Start() {
    numerofFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numerofFilms == '' || numerofFilms == null || isNaN(numerofFilms)) {
        numerofFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
        console.log('no');
    }
    console.log('yes');
    personalMovieDB.count = numerofFilms;
}

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            const genres = prompt(`Ваш любимы жанр по номерам ${i}`);
            personalMovieDB.genres [i-1] = genres;
        }
    }
function PersonalLevel() {
    if (personalMovieDB.count<10) {
        alert('Просмотрено мало фильмов')
    } else if (personalMovieDB.count<=30) {
        alert('Стандартный телезритель');
    } else if (personalMovieDB.count>30) {
        alert('Вы киноман')
    } else {
        alert('Произошла ошибка')
    }
}
function RememberMyFilms() {
    for (let i = 0; i < 1; i++) {
            let a = prompt("Один из последних фильмов?", ""),
                b = prompt("На сколько оцените его?", "");
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50 ) {
            personalMovieDB.movie[a] = b;
        }
        else {
            i--;
        }
    }
}

console.log(personalMovieDB);