import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/requests";
import { useParams, Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
//import Loader from "../components/Loader";

const Country = () => {
  const { name } = useParams();
  const { data } = useQuery(["country", name], () => getCountry(name));
  //if (isLoading) return <Loader />;
  const { darkMode } = useTheme();
  return (
    <div
      className={`h-screen font-nunito lg:px-10 md:px-6 px-4 py-8 grid ease-in-out duration-700 ${
        darkMode ? "dark bg-very-dark-blue" : " bg-very-light-gray"
      }`}
    >
      <Link
        to="/"
        className="font-nunito font-semibold shadow w-40 h-10 p-2 flex items-center justify-center gap-3 rounded-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            fill={`${darkMode ? "white" : "black"}`}
          />
        </svg>
        <span className="dark:text-white">Back</span>
      </Link>
      {data?.map((country, index) => {
        /* console.log(
          Object.keys(country.currencies).map(
            (key) => country.currencies[key].name
          )
        );*/
        return (
          <div
            key={index}
            className="grid  md:grid-cols-custom   my-4 dark:text-white"
          >
            <img
              src={country.flags.png}
              alt="flag"
              className=" w-full md:w-8/12 lg:w-10/12"
            />

            <div className="">
              <div className="my-3 font-bold text-3xl">
                {country.name.common}
              </div>
              <div className="grid md:grid-cols-custom">
                <div className="grid gap-1">
                  <div className="font-semibold flex gap-1">
                    Native Name:
                    <span className=" font-normal">{country.name.common}</span>
                  </div>
                  <div className="font-semibold flex gap-1">
                    Population:
                    <span className=" font-normal">{country.population}</span>
                  </div>
                  <div className="font-semibold flex gap-1">
                    Region:
                    <span className=" font-normal">{country.region}</span>
                  </div>
                  <div className="font-semibold flex gap-1">
                    Sub Region:
                    <span className=" font-normal">{country.subregion}</span>
                  </div>
                  <div className="font-semibold flex gap-1">
                    Capital:
                    <span className=" font-normal">{country.capital}</span>
                  </div>
                </div>
                <div className="grid gap-1  h-fit">
                  <div className="font-semibold flex gap-1">
                    Top Level Domain:
                    <span className=" font-normal">{country.tld}</span>
                  </div>
                  <div className="font-semibold flex gap-1">
                    Currencies:
                    {country.currencies &&
                      Object.keys(country.currencies).map((key, index) => (
                        <span key={index} className="font-normal">
                          {country.currencies && country.currencies[key].name}
                        </span>
                      ))}
                  </div>
                  <div className="font-semibold flex gap-1">
                    Languages
                    {country.languages &&
                      Object.keys(country.languages).map((key, index) => (
                        <span key={index} className="font-normal">
                          {country.languages[key]}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
              <div className="font-semibold gap-2 flex items-center my-4  flex-wrap">
                Border Countries:
                {country.borders?.map((border: string, index: number) => {
                  return (
                    <span
                      key={index}
                      className="font-normal  rounded shadow p-2 w-16 flex  items-center justify-center h-8 bg-white dark:bg-dark-blue "
                    >
                      {border}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
