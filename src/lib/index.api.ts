const axios = require("axios");

export const getRandomMenuList = async (limit: number) => {
  try {
    const response: { data: { results: object[] } } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=${limit}`
    );

    return response.data.results;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getRecipeById = async (id: string | number) => {
  try {
    const response: { data: { results: object[] } } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
