import {createContext, useContext, useState, useEffect } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};




export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState("light"); 
  const [apiData, setApiData] = useState([]); 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };
  const fetchData = async() => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{theme, toggleTheme, apiData}}>
      {children}
    </ContextGlobal.Provider>
  );
};
