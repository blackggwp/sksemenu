import { createContext } from "react";

const initDarkMode = localStorage.getItem("isDarkMode") ? "dark" : "light";

const posContext = {
  dark: {
    darkMode: initDarkMode,
    toggleDarkMode: () => {},
  },
  api: { percen: 0, handlePercen: (value) => {} },
};

const MyContext = createContext(posContext);

export default MyContext;
