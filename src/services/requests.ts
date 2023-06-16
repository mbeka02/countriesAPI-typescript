import { Country } from "../types/types";

/*const getAllCountries = async (): Promise<Country[] | undefined> => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    // const json = await data.json();
    return response.json();
  } catch (error) {
    console.log(error);
  }
};*/
const getCountries = async (param: string): Promise<Country[] | undefined> => {
  try {
    const response =
      param === "all"
        ? await fetch("https://restcountries.com/v3.1/all")
        : await fetch(`https://restcountries.com/v3.1/region/${param}`);
    // const json = await data.json();
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const getCountry = async (
  name: string | undefined
): Promise<Country[] | undefined> => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    // const json = await data.json();
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export { getCountries, getCountry };
