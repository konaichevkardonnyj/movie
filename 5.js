const personalMovieDB = {
    count: 0,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "")
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "")
        }
    },
    ShowMyDB: function (privat) {
        if (!privat) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMwDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    PersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено мало фильмов')
        } else if (personalMovieDB.count <= 30) {
            alert('Стандартный телезритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман')
        } else {
            alert('Произошла ошибка')
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let gen = prompt("Введите через запятую",'' ).toLocaleLowerCase();
           let genres = gen.split(", ")
            personalMovieDB.genres = genres;
            personalMovieDB.genres.sort();
        }
        personalMovieDB.genres.forEach(function (key, i) {
            console.log(`Любимый жанр ${i + 1} значения ${key}`)
        })
    },
    RememberMyFilms: function () {
        for (let i = 0; i < 1; i++) {
            let a = prompt("Один из последних фильмов?", ""),
                b = prompt("На сколько оцените его?", "");
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                personalMovieDB.movie[a] = b;
            } else {
                i--;
            }
        }
    }
};

