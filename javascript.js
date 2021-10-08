const numerofFilms = prompt("Сколько фильмов вы уже посмотрели?","");
//document.write(numerofFilms);
//console.log(numerofFilms);
const personalMovieDB = {
    count: numerofFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
    };

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних фильмов?", ""),
         b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50 ) {
           personalMovieDB.movie[a] = b;
    console.log('yes');
    }
  else {
       console.log('no');
       i--;
    }
}
//console.log(personalMovieDB);

//if (personalMovieDB.count<10) {
//    alert('Просмотрено мало фильмов')
//} else if (personalMovieDB.count<=30) {
//    alert('Стандартный телезритель');
//} else if (personalMovieDB.count>30) {
//    alert('Вы киноман')
//} else {
//    alert('Произошла ошибка')
//}
//let i = 0;
do {
      const a = prompt("Один из последних фильмов?", ""),
         b = prompt("На сколько оцените его?", "");
      i++;
      if (a != '' && b != '' && a != null && a.length<50) {
          console.log('yes');
          personalMovieDB.movie[a] = b;
      } else {
          i--;
          console.log('no');
      }
  }
    while (i < 2);
console.log(personalMovieDB);

function show(text, a, b) {
    console.log(text)
}
show('WORLD');

function calc(a, b) {
    return (a + b);
}
console.log(calc (4, 3));
