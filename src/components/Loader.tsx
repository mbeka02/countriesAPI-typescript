import { Triangle } from "react-loader-spinner";
import useTheme from "../hooks/useTheme";

const Loader = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`flex  min-h-screen w-full   items-center justify-center ${
        darkMode ? "bg-very-dark-blue " : "bg-white"
      }`}
    >
      <Triangle
        height="200"
        width="200"
        color={`${darkMode ? "white" : "black"}`}
        ariaLabel="triangle-loading"
      />
    </div>
  );
};

export default Loader;
