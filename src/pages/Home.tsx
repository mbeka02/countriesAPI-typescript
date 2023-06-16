//import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";

import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/requests";
import CountryCard from "../components/CountryCard";
//const CountryCard = lazy(() => import("../components/CountryCard"));
import { useState } from "react";
import FilterSearch from "../components/FilterSearch";
import Loader from "../components/Loader";
import useTheme from "../hooks/useTheme";
const Home = () => {
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const { data, isError, isLoading } = useQuery({
    queryKey: ["countries", filterValue],
    queryFn: () => getCountries(filterValue),
    keepPreviousData: true,
  });
  const { darkMode } = useTheme();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error</span>;
  }

  //const countries = data ?? []

  return (
    <div
      className={`${
        darkMode
          ? "dark bg-very-dark-blue"
          : " bg-very-light-gray ease-in-out duration-700"
      } font-nunito        h-full `}
    >
      <Navbar />
      <div className="flex items-center justify-between md:px-14 my-3">
        <FilterSearch
          handleSelect={handleSelect}
          handleSearch={handleSearch}
          searchValue={searchValue}
        />
      </div>
      <div className="flex lg:gap-10 lg:justify-normal md:justify-between flex-wrap px-8">
        {data &&
          data
            .filter((data) =>
              data.name.common.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((data, index) => {
              return <CountryCard key={index} country={data} />;
            })}
      </div>
    </div>
  );
};

export default Home;
