import { createContext } from "react";

const posContext = {
  api: { percen: 0, handlePercen: (value) => {} },
};

const MyContext = createContext(posContext);

export default MyContext;
