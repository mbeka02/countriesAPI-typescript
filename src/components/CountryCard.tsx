import { Country } from "../types/types";
import { Link } from "react-router-dom";

//import { Link } from "react-router-dom";
interface Props {
  country: Country;
}

const CountryCard = ({ country }: Props) => {
  return (
    <Link to={`${country.name.common}`}>
      <div className=" text-very-dark-blue dark:text-white dark:bg-dark-blue md:w-72 w-full    bg-white shadow rounded-md my-20 hover:scale-105 ease-in-out  duration-700">
        <div className="w-full h-48  ">
          <img
            src={country.flags.png}
            className="  h-full w-full rounded-t-md"
          />
        </div>
        <div className="grid gap-2 px-6 my-4">
          <div className=" font-extrabold text-xl ">{country.name.common}</div>
          <div className="font-semibold flex gap-1">
            Population:
            <span className=" font-normal">{country.population}</span>
          </div>
          <div className="font-semibold flex gap-1">
            Region:<span className="font-normal">{country.region}</span>
          </div>
          <div className="font-semibold flex gap-1">
            Capital:<span className="font-normal">{country.capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
