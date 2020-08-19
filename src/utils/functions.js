import _ from 'lodash';

const thousands_separators = (num) => {
  const numParts = num.toString().split('.');
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return numParts.join('.');
};

export const getNameOfActiveCountry = (countries, activeCountry) => {
  const country = countries.find((country) => country.value === activeCountry);
  return country.text;
};

export const getThreeMostAffected = (stats, countriesArray) => {
  const threeMostAffected = [];

  const reuniteDataByCountry = [];

  const totalSumConfirmedByCountry = [];
  const totalSumRecoveredByCountry = [];
  const totalSumDeathsByCountry = [];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  countriesArray.map((option) => {
    // order array with all countryRegion in same array
    const sameCountry = stats.filter((country) => country.iso3 === option.value);
    // verfiy some array aren't empty
    const verifyEmptyness = !_.isEmpty(sameCountry);
    // if array aren't empty, then push em into reunitedDataCountry arrat
    if (verifyEmptyness === true) {
      reuniteDataByCountry.push(sameCountry);
    }
  });

  if (reuniteDataByCountry !== undefined) {
    reuniteDataByCountry.map((array) => {
      const countConfirmed = [];
      const countRecovered = [];
      const countDeaths = [];

      array.map((country) => {
        countConfirmed.push(country.confirmed);
        countRecovered.push(country.recovered);
        countDeaths.push(country.deaths);
      });

      const sumConfirmed = countConfirmed.reduce(reducer);
      const sumRecovered = countRecovered.reduce(reducer);
      const sumDeaths = countDeaths.reduce(reducer);

      // Verifier que la propriete flag contient bien une valeur, le cas écheant on passe la valeur en minuscule 
      const flag = array[0].iso2;
      if (flag !== undefined) {
        const flagToLowerCase = flag.toLowerCase();

        totalSumConfirmedByCountry.push({
          name: array[0].countryRegion,
          total: sumConfirmed,
          flag: flagToLowerCase,
        });
        totalSumRecoveredByCountry.push({
          name: array[0].countryRegion,
          total: sumRecovered,
          flag: flagToLowerCase,
        });
        totalSumDeathsByCountry.push({
          name: array[0].countryRegion,
          total: sumDeaths,
          flag: flagToLowerCase,
        });
      }
    });
  }

  /********* CONFIRMED PART *********/

  let firstConfirmed;
  let secondConfirmed;
  let thirdConfirmed;

  totalSumConfirmedByCountry.map((country) => {
    // If firstConfirmed is Empty then put a country in it
    if (_.isEmpty(firstConfirmed)) {
      firstConfirmed = country;
    }

    // Pick the 1st worst State and put object on firstConfirmed variable
    else if (country.total > firstConfirmed.total) {
      firstConfirmed = country;
    }
  });

  totalSumConfirmedByCountry.map((country) => {
    // If secondConfirmed is Empty then put a country in it
    if (_.isEmpty(secondConfirmed)) {
      secondConfirmed = country;
    }

    // Pick the 2nd worst State and put object on secondConfirmed variable
    else if (country.total < firstConfirmed.total && country.total > secondConfirmed.total) {
      secondConfirmed = country;
    }
  });

  totalSumConfirmedByCountry.map((country) => {
    // If thirdConfirmed is Empty then put a country in it
    if (_.isEmpty(thirdConfirmed)) {
      thirdConfirmed = country;
    }

    // Pick the 3nd worst State and put object on secondConfirmed variable
    else if (country.total < secondConfirmed.total && country.total > thirdConfirmed.total) {
      thirdConfirmed = country
    }
  });

  const mostConfirmed = {
    first: firstConfirmed,
    second: secondConfirmed,
    third: thirdConfirmed,
  };
  threeMostAffected.push(mostConfirmed);

  /********* CONFIRMED PART *********/



  /********* RECOVERED PART *********/

  let firstRecovered = [];
  let secondRecovered = [];
  let thirdRecovered = [];

  totalSumRecoveredByCountry.map((country) => {
    // If firstRecovered is Empty then put a country in it
    if (_.isEmpty(firstRecovered)) {
      firstRecovered = country;
    }

    // Pick the 1st worst State and put object on firstRecovered variable
    else if (country.total > firstRecovered.total) {
      firstRecovered = country;
    }
  });

  totalSumRecoveredByCountry.map((country) => {
    // If secondRecovere is Empty then put a country in it
    if (_.isEmpty(secondRecovered)) {
      secondRecovered = country;
    }

    // Pick the 2nd worst State and put object on secondRecovere variable
    else if (country.total < firstRecovered.total && country.total > secondRecovered.total) {
      secondRecovered = country;
    }
  });

  totalSumRecoveredByCountry.map((country) => {
    // If thirdRecovere is Empty then put a country in it
    if (_.isEmpty(thirdRecovered)) {
      thirdRecovered = country;
    }

    // Pick the 3nd worst State and put object on secondRecovere variable
    else if (country.total < secondRecovered.total && country.total > thirdRecovered.total) {
      thirdRecovered = country;
    }
  });

  const mostRecovered = {
    first: firstRecovered,
    second: secondRecovered,
    third: thirdRecovered,
  };
  threeMostAffected.push(mostRecovered);

  /********* RECOVERED PART *********/



  /********* DEATHS PART *********/

  let firstDeaths = [];
  let secondDeaths = [];
  let thirdDeaths = [];

  totalSumDeathsByCountry.map((country) => {
    // If firstDeaths is Empty then put a country in it
    if (_.isEmpty(firstDeaths)) {
      firstDeaths = country;
    }

    // Pick the 1st worst State and put object on firstDeaths variable
    else if (country.total > firstDeaths.total) {
      firstDeaths = country;
    }
  });

  totalSumDeathsByCountry.map((country) => {
    // If secondDeaths is Empty then put a country in it
    if (_.isEmpty(secondDeaths)) {
      secondDeaths = country;
    }

    // Pick the 2nd worst State and put object on secondDeaths variable
    else if (country.total < firstDeaths.total && country.total > secondDeaths.total) {
      secondDeaths = country;
    }
  });

  totalSumDeathsByCountry.map((country) => {
    // If thirdDeaths is Empty then put a country in it
    if (_.isEmpty(thirdDeaths)) {
      thirdDeaths = country;
    }

    // Pick the 3nd worst State and put object on secondDeaths variable
    else if (country.total < secondDeaths.total && country.total > thirdDeaths.total) {
      thirdDeaths = country;
    }
  });

  const mostDeaths = {
    first: firstDeaths,
    second: secondDeaths,
    third: thirdDeaths,
  };
  threeMostAffected.push(mostDeaths);

  /********* DEATHS PART *********/

  return threeMostAffected;
};

export const getPourcentageEvolution = (stats, dailyStats, countriesArray, activeCountry) => {
  let sameCountry = [];
  let dailySameCountry = [];

  const reuniteTotalDataByCountry = [];
  const reuniteDailyDataByCountry = [];

  let totalEvolution = {};

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (countriesArray !== null && stats !== null) {
    // Allows to gather all the data concerning each country in an array

    if (activeCountry.name === 'Global') {
      countriesArray.map((option) => {
        // order array with all countryRegion in same array for Total Datas
        sameCountry = stats.filter((country) => country.countryRegion === option.name);
        dailySameCountry = dailyStats.filter((country) => country.countryRegion === option.name);

        // verify some array aren't empty
        const verifyEmptyness = !_.isEmpty(sameCountry);
        // if array aren't empty, then push em into reunitedDataCountry array
        if (verifyEmptyness === true) {
          reuniteTotalDataByCountry.push(sameCountry);
        }

        const dailyVerifyEmptyness = !_.isEmpty(dailySameCountry);
        if (dailyVerifyEmptyness === true) {
          reuniteDailyDataByCountry.push(dailySameCountry);
        }
      });
    }

    if (activeCountry.name !== 'Global') {
      // order array with all countryRegion in same array for Daily Datas
      sameCountry = stats.filter((country) => country.countryRegion === activeCountry.name);
      dailySameCountry = dailyStats.filter((country) => country.countryRegion === activeCountry.name);

      // verify some array aren't empty
      const verifyEmptyness = !_.isEmpty(sameCountry);
      // if array aren't empty, then push em into reunitedDataCountry array
      if (verifyEmptyness === true) {
        reuniteTotalDataByCountry.push(sameCountry);
      }

      const dailyVerifyEmptyness = !_.isEmpty(dailySameCountry);
      if (dailyVerifyEmptyness === true) {
        reuniteDailyDataByCountry.push(dailySameCountry);
      }
    }
  }

  if (reuniteTotalDataByCountry !== null && reuniteDailyDataByCountry !== null) {
    const totalCountConfirmed = [];
    const totalCountRecovered = [];
    const totalCountDeaths = [];
    const dailyCountConfirmed = [];
    const dailyCountRecovered = [];
    const dailyCountDeaths = [];

    // Handle the TOTAL Data array by country
    reuniteTotalDataByCountry.map((array) => {
      array.map((country) => {
        totalCountConfirmed.push(country.confirmed);
        totalCountRecovered.push(country.recovered);
        totalCountDeaths.push(country.deaths);
      });
    });

    // Handle the DAILY Data array by country
    reuniteDailyDataByCountry.map((array) => {
      array.map((country) => {
        dailyCountConfirmed.push(Number(country.confirmed));
        dailyCountRecovered.push(Number(country.recovered));
        dailyCountDeaths.push(Number(country.deaths));
      });
    });

    if ( !_.isEmpty(totalCountConfirmed) && !_.isEmpty(totalCountRecovered) && !_.isEmpty(totalCountDeaths) && !_.isEmpty(dailyCountConfirmed) && !_.isEmpty(dailyCountRecovered) && !_.isEmpty(dailyCountDeaths)) {
      const sumTotalConfirmed = totalCountConfirmed.reduce(reducer);
      const sumTotalRecovered = totalCountRecovered.reduce(reducer);
      const sumTotalDeaths = totalCountDeaths.reduce(reducer);
      const sumDailyConfirmed = dailyCountConfirmed.reduce(reducer);
      const sumDailyRecovered = dailyCountRecovered.reduce(reducer);
      const sumDailyDeaths = dailyCountDeaths.reduce(reducer);

      totalEvolution = {
        confirmed: Math.round(((sumTotalConfirmed - sumDailyConfirmed) / sumDailyConfirmed) * 100),
        recovered: Math.round(((sumTotalRecovered - sumDailyRecovered) / sumDailyRecovered) * 100),
        deaths: Math.round(((sumTotalDeaths - sumDailyDeaths) / sumDailyDeaths) * 100),
      };
    }
  }

  if (!_.isEmpty(totalEvolution)) {
    return totalEvolution;
  }
};

export const chartsLineDatas = (dailySummaryData) => {
  let data;
  let chartLineDatas;

  if (!_.isEmpty(dailySummaryData)) {
    data = [{
      labels: dailySummaryData.map((country) => country.reportDate),
      dataConfirmed: dailySummaryData.map((country) => country.confirmed.total),
      dataDeaths: dailySummaryData.map((country) => country.deaths.total),
    }];
  }

  if (!_.isEmpty(data)) {
    chartLineDatas = {
      labels: data[0].labels,
      datasets: [
        {
          label: 'Confirmed Case',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#f2711c',
          borderColor: '#f2711c',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#f2711c',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#f2711c',
          pointHoverBorderColor: '#f2711c',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data[0].dataConfirmed,
        },
        {
          label: 'Deaths',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#db2828',
          borderColor: '#db2828',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#db2828',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#db2828',
          pointHoverBorderColor: '#db2828',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data[0].dataDeaths,
        },
      ],
    };
  }
  return chartLineDatas;
};

export const getDataForMap = (stats, dataBase) => {
  const reuniteDataByCountry = [];

  const totalSumDatasByCountry = [];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  dataBase.features.forEach((option) => {
    // order array with all countryRegion in same array
    const sameCountry = stats.filter((country) => country.iso3 === option.properties.adm0_a3);
    // verfiy some array aren't empty
    const verifyEmptyness = !_.isEmpty(sameCountry);
    // if array aren't empty, then push em into reunitedDataCountry arrat
    if (verifyEmptyness === true) {
      reuniteDataByCountry.push(sameCountry);
    }
  });

  if (reuniteDataByCountry !== undefined) {
    reuniteDataByCountry.map((array) => {
      const countConfirmed = [];
      const countRecovered = [];
      const countDeaths = [];

      array.map((country) => {
        countConfirmed.push(country.confirmed);
        countRecovered.push(country.recovered);
        countDeaths.push(country.deaths);
      });

      const sumConfirmed = countConfirmed.reduce(reducer);
      const sumRecovered = countRecovered.reduce(reducer);
      const sumDeaths = countDeaths.reduce(reducer);

      totalSumDatasByCountry.push({
        name: array[0].countryRegion,
        confirmed: sumConfirmed,
        recovered: sumRecovered,
        deaths: sumDeaths,
        iso3: array[0].iso3,
      });
    });
  }

  const finalDatasTransformed = [];
  totalSumDatasByCountry.map((country) => {
    dataBase.features.filter((data) => {
      if (country.iso3 === data.properties.adm0_a3) {
        const dataToPush = {
          type: 'Feature',
          properties: {
            ...data.properties,
            ...country,
          },
          geometry: {
            ...data.geometry,
          },
        };
        if (!_.isEmpty(dataToPush)) {
          finalDatasTransformed.push(dataToPush);
        }
      }
    });
  });

  return finalDatasTransformed;
};
