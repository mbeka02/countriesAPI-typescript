import useTheme from "../hooks/useTheme";

type Props = {
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  searchValue: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterSearch = ({ handleSelect, handleSearch, searchValue }: Props) => {
  const { darkMode } = useTheme();
  return (
    <div className="flex md:items-center justify-between mx-2 w-full font-semibold flex-col  md:flex-row gap-4 ease-in-out duration-700">
      <div
        className={` dark:bg-dark-blue flex items-center gap-2 bg-white w-4/5 md:w-1/4 h-12  shadow px-1
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            fill={`${darkMode ? "white" : "black"}`}
          />
        </svg>
        <input
          value={searchValue}
          name="searchbar"
          placeholder="search for a country"
          className="h-full w-10/12 rounded-sm dark:bg-dark-blue dark:text-white"
          onChange={handleSearch}
        />
      </div>
      <select
        onChange={handleSelect}
        className=" w-1/2 md:w-1/6 h-12 px-4 shadow font-semibold  dark:bg-dark-blue dark:text-white"
      >
        <option value={"all"}>Filter by Region</option>
        <option value={"africa"}>Africa</option>
        <option value={"america"}>America</option>
        <option value={"asia"}>Asia</option>
        <option value={"europe"}>Europe</option>
        <option value={"oceania"}>Oceania</option>
      </select>
    </div>
  );
};

export default FilterSearch;
