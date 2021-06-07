// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(listOfMovies) {
  let directorsList = [];
  for (i = 0; i < listOfMovies.length; i++) {
    directorsList.push(listOfMovies[i].director);
  }
  return directorsList;
  // return listOfMovies.map(directorsList.slice(listOfMovies.director));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(listOfMovies) {
  let spielbergDrama = [];
  for (i = 0; i < listOfMovies.length; i++) {
    if (
      (listOfMovies[i].director =
        'Steven Spielberg' && listOfMovies[i].genre.includes('Drama'))
    ) {
      spielbergDrama.push(listOfMovies[i]);
    }
  }
  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(listOfMovies) {
  sum = 0;
  for (i = 0; i < listOfMovies.length; i++) {
    sum += listOfMovies[i].score;
  }
  return sum / listOfMovies.length;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
