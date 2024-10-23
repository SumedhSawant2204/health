export const exercisesOptions = {
    method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/status',
  headers: {
    'x-rapidapi-key': '6eeac1d754mshc7f0ea0fdf85bd8p10903cjsnadf1cf8ff620',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data
}
