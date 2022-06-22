import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "7f99df9327msh0d04e12d4884f3fp1fb3b6jsn36e5477b6819",
    },
  });

  return data;
};
