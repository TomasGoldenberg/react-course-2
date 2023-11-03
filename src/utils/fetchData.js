export const fetchData = async (url, options) => {
export const exerciseOptions = {
    method: 'GET',
    headers: {
              'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
    }
}
const response = await fetch(url, options);
const data = await response.json();

return data;
}