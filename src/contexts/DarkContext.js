import { createContext } from "react";

const initDarkMode = localStorage.getItem("isDarkMode") ? "dark" : "light";
const DarkContext = createContext({
  darkMode: initDarkMode,
  toggleDarkMode: () => {},
});

export default DarkContext;
