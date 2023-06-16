import { useContext } from "react";
import { ThemeContext, ContextType } from "../context/ThemeContext";

const useTheme = () => useContext(ThemeContext) as ContextType;

export default useTheme;
