import _ from 'lodash';

export const getThreeMostAffected = (stats, countriesArray) => {

  let threeMostAffected = []

  let mostConfirmed;
  let mostRecovered;
  let mostDeaths;

  let reuniteDataByCountry = [];
  
  let totalSumConfirmedByCountry = [];
  let totalSumRecoveredByCountry = [];
  let totalSumDeathsByCountry = [];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  countriesArray.map(option => {
    // order array with all countryRegion in same array
    let sameCountry = stats.filter(country => country.iso3 === option.value)
    // verfiy some array aren't empty
    let verifyEmptyness = !_.isEmpty(sameCountry)
    // if array aren't empty, then push em into reunitedDataCountry arrat
    if (verifyEmptyness === true) {
      reuniteDataByCountry.push(sameCountry)
    }
  })

  if (reuniteDataByCountry !== undefined) {
    reuniteDataByCountry.map(array => {
      let countConfirmed = []
      let countRecovered = []
      let countDeaths = []

      array.map(country => {
        countConfirmed.push(country.confirmed)
        countRecovered.push(country.recovered)
        countDeaths.push(country.deaths)
      })
      
      const sumConfirmed = countConfirmed.reduce(reducer)
      const sumRecovered = countRecovered.reduce(reducer)
      const sumDeaths = countDeaths.reduce(reducer)

      // Verifier que la propriete flag contient bien une valeur, le cas écheant on passe la valeur en minuscule 
      const flag  = array[0].iso2
      if (flag !== undefined) {
        const flagToLowerCase = flag.toLowerCase()
        
        totalSumConfirmedByCountry.push({
          name: array[0].countryRegion,
          total: sumConfirmed,
          flag: flagToLowerCase,
        })
        totalSumRecoveredByCountry.push({
          name: array[0].countryRegion,
          total: sumRecovered,
          flag: flagToLowerCase,
        })
        totalSumDeathsByCountry.push({
          name: array[0].countryRegion,
          total: sumDeaths,
          flag: flagToLowerCase,
        })
      }

    })
  }

  /********* CONFIRMED PART *********/

  let firstConfirmed;
  let secondConfirmed;
  let thirdConfirmed;

  totalSumConfirmedByCountry.map(country => {
    // If firstConfirmed is Empty then put a country in it
    if(_.isEmpty(firstConfirmed)) {
      firstConfirmed = country
    } 
    
    // Pick the 1st worst State and put object on firstConfirmed variable
    else if( country.total > firstConfirmed.total) {
      firstConfirmed = country
    }
  })

  totalSumConfirmedByCountry.map(country => {
    // If secondConfirmed is Empty then put a country in it
    if(_.isEmpty(secondConfirmed)) {
      secondConfirmed = country
    } 

    // Pick the 2nd worst State and put object on secondConfirmed variable
    else if( country.total < firstConfirmed.total && country.total > secondConfirmed.total ) {
      secondConfirmed = country
    }
  })

  totalSumConfirmedByCountry.map(country => {
    // If thirdConfirmed is Empty then put a country in it
    if(_.isEmpty(thirdConfirmed)) {
      thirdConfirmed = country
    } 

    // Pick the 3nd worst State and put object on secondConfirmed variable
    else if( country.total < secondConfirmed.total && country.total > thirdConfirmed.total ) {
      thirdConfirmed = country
    }
  })

  mostConfirmed = {
    first: firstConfirmed,
    second: secondConfirmed,
    third: thirdConfirmed,
  }
  threeMostAffected.push(mostConfirmed)

  /********* CONFIRMED PART *********/

  

  /********* RECOVERED PART *********/
  
  let firstRecovered = [];
  let secondRecovered = [];
  let thirdRecovered = [];

  totalSumRecoveredByCountry.map(country => {
    // If firstRecovered is Empty then put a country in it
    if(_.isEmpty(firstRecovered)) {
      firstRecovered = country
    } 
    
    // Pick the 1st worst State and put object on firstRecovered variable
    else if( country.total > firstRecovered.total) {
      firstRecovered = country
    }
  })

  totalSumRecoveredByCountry.map(country => {
    // If secondRecovere is Empty then put a country in it
    if(_.isEmpty(secondRecovered)) {
      secondRecovered = country
    } 

    // Pick the 2nd worst State and put object on secondRecovere variable
    else if( country.total < firstRecovered.total && country.total > secondRecovered.total ) {
      secondRecovered = country
    }
  })

  totalSumRecoveredByCountry.map(country => {
    // If thirdRecovere is Empty then put a country in it
    if(_.isEmpty(thirdRecovered)) {
      thirdRecovered = country
    } 

    // Pick the 3nd worst State and put object on secondRecovere variable
    else if( country.total < secondRecovered.total && country.total > thirdRecovered.total ) {
      thirdRecovered = country
    }
  })

  mostRecovered = {
    first: firstRecovered,
    second: secondRecovered,
    third: thirdRecovered,
  }
  threeMostAffected.push(mostRecovered)

  /********* RECOVERED PART *********/
  


  /********* DEATHS PART *********/

  let firstDeaths = [];
  let secondDeaths = [];
  let thirdDeaths = [];

  totalSumDeathsByCountry.map(country => {
    // If firstDeaths is Empty then put a country in it
    if(_.isEmpty(firstDeaths)) {
      firstDeaths = country
    } 
    
    // Pick the 1st worst State and put object on firstDeaths variable
    else if( country.total > firstDeaths.total) {
      firstDeaths = country
    }
  })

  totalSumDeathsByCountry.map(country => {
    // If secondDeaths is Empty then put a country in it
    if(_.isEmpty(secondDeaths)) {
      secondDeaths = country
    } 

    // Pick the 2nd worst State and put object on secondDeaths variable
    else if( country.total < firstDeaths.total && country.total > secondDeaths.total ) {
      secondDeaths = country
    }
  })

  totalSumDeathsByCountry.map(country => {
    // If thirdDeaths is Empty then put a country in it
    if(_.isEmpty(thirdDeaths)) {
      thirdDeaths = country
    } 

    // Pick the 3nd worst State and put object on secondDeaths variable
    else if( country.total < secondDeaths.total && country.total > thirdDeaths.total ) {
      thirdDeaths = country
    }
  })

  mostDeaths = {
    first: firstDeaths,
    second: secondDeaths,
    third: thirdDeaths,
  }
  threeMostAffected.push(mostDeaths)

  /********* DEATHS PART *********/


  return threeMostAffected;
  
};

export const getPourcentageEvolution = (stats, dailyStats, countriesArray) => {
  /* console.log('on m\'appele')
  console.log('stats', stats) */
  //console.log('dailyStats', dailyStats)
  //console.log('countriesArray', countriesArray)

  let reuniteTotalDataByCountry = []
  let reuniteDailyDataByCountry = []

  let arrayWithActualAndPreviousDataByCountry = []

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  if (countriesArray !== null && stats !== null ) {

    countriesArray.map(option => {
      // order array with all countryRegion in same array
      let sameCountry = stats.filter(country => country.iso3 === option.iso3)
      // verfiy some array aren't empty
      let verifyEmptyness = !_.isEmpty(sameCountry)
      // if array aren't empty, then push em into reunitedDataCountry arrat
      if (verifyEmptyness === true) {
        reuniteTotalDataByCountry.push(sameCountry)
      }

      let dailySameCountry = dailyStats.filter(country => country.countryRegion === option.name)
      let dailyVerifyEmptyness = !_.isEmpty(dailySameCountry)
      if (dailyVerifyEmptyness === true) {
        reuniteDailyDataByCountry.push(dailySameCountry)
      }
    })
  }

  /* if (reuniteTotalDataByCountry !== null && reuniteDailyDataByCountry !== null) {
    let actual
    let previous

    countriesArray.map(option => {
      sameCountry1 = reuniteDailyDataByCountry.filter(country => country.iso3 === option.iso3)
    }
  } */

  if (reuniteTotalDataByCountry !== null && reuniteDailyDataByCountry !== null) {
    let totalCountConfirmed = []
    let totalCountRecovered = []
    let totalCountDeaths = []
    let dailyCountConfirmed = []
    let dailyCountRecovered = []
    let dailyCountDeaths = []

    reuniteTotalDataByCountry.map(array => {
      array.map(country => {
        totalCountConfirmed.push(country.confirmed)
        totalCountRecovered.push(country.recovered)
        totalCountDeaths.push(country.deaths)
      })
    })
    reuniteDailyDataByCountry.map(array => {
      array.map(country => {
        dailyCountConfirmed.push(country.confirmed)
        dailyCountRecovered.push(country.recovered)
        dailyCountDeaths.push(country.deaths)
      })
    })

    console.log('totalCountConfirmed', totalCountConfirmed);

    if ( totalCountConfirmed !== null && totalCountRecovered !== null && totalCountDeaths !== null && dailyCountConfirmed !== null && dailyCountRecovered !== null && dailyCountDeaths !== null) {

      /* console.log('totalCountConfirmed', totalCountConfirmed)

      const sumTotalConfirmed = totalCountConfirmed.reduce(reducer)

      console.log(sumTotalConfirmed) */

      /* const sumTotalConfirmed = totalCountConfirmed.reduce(reducer)
      const sumTotalRecovered = totalCountRecovered.reduce(reducer)
      const sumTotalDeaths = totalCountDeaths.reduce(reducer)
      const sumDailyConfirmed = dailyCountConfirmed.reduce(reducer)
      const sumDailyRecovered = dailyCountRecovered.reduce(reducer)
      const sumDailyDeaths = dailyCountDeaths.reduce(reducer)
        
      arrayWithActualAndPreviousDataByCountry.push({
        name: array[0].countryRegion,
        total: sumTotalConfirmed,
        daily: sumDailyConfirmed,
      })
      arrayWithActualAndPreviousDataByCountry.push({
        name: array[0].countryRegion,
        total: sumTotalRecovered,
        daily: sumDailyRecovered,
      })
      arrayWithActualAndPreviousDataByCountry.push({
        name: array[0].countryRegion,
        total: sumTotalDeaths,
        daily: sumDailyDeaths,
      }) */
    }
  }
  
  console.log('reuniteTotalDataByCountry', reuniteTotalDataByCountry);
  console.log('reuniteDailyDataByCountry', reuniteDailyDataByCountry);

};
