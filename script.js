'use srict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt ('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}


start();


const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};


  // let i = 0;
    // while (i != 2) {
    //     let a = prompt('Назовите один из недавно просмотренных фильмов');
    //     let b = prompt('Поставьте ему оценку по 10 бальной шкале');
    //     i++;
    //     if (a != '' && b != '' && a!= null && b!= null && a.length < 50) {
    //                 personalMovieDB.movies[a] = b;
    //                 console.log("done");
                    
    //             } else {
    //                 console.log('error');
    //                 i--;
    //             }
           
    // }


function rememberMyFilms() {
  
    for (let i = 0; i < 2; i++) {
        let a = prompt('Назовите один из недавно просмотренных фильмов');
        let b = prompt('Поставьте ему оценку по 10 бальной шкале');
        if (a != '' && b != '' && a!= null && b!= null && a.length < 50 && b < 11 && b > -1 ) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log('error');
            i--;
        }
    
    }
    
}


rememberMyFilms();




function detectPersonalLevel() {
    if (personalMovieDB.count >= 0 && personalMovieDB.count <= 10 ) {
        console.log('Вы посмотрели мало фильмов');
    } else if (personalMovieDB.count >= 11 && personalMovieDB.count <= 30)
    {
        console.log('Вы посмотрели достаточное количество фильмов');
    }
    else if (personalMovieDB.count >= 31) {
        console.log('Вы киноман');
    }
    else {
        console.log("Error");
    }
    
}


detectPersonalLevel();


function showMyDB(hidden) {
    if (hidden == false){
        console.log(personalMovieDB);
        console.log("База данных открыта");
    }
}


showMyDB(personalMovieDB.privat); 

function writeYourGenres() {

for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
}
return personalMovieDB;
    
}
writeYourGenres();
console.log(personalMovieDB);

// let a = prompt('Назовите один из недавно просмотренных фильмов');
// let b = prompt('Поставьте ему оценку по 10 бальной шкале');
// let c = prompt('Назовите один из недавно просмотренных фильмов');
// let d = prompt('Поставьте ему оценку по 10 бальной шкале');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB.movies);


