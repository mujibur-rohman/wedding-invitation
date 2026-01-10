"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [data, setData] = useState({
    isOpenned: false,
  });
  const handleDataChange = (e) => {
    setData((prevState) => {
      const newState = { ...prevState };
      Object.entries(e).forEach(([key, value]) => {
        newState[key] = value;
      });
      return newState;
    });
  };

  useEffect(() => {
    // Dynamic import AOS to avoid SSR issues
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      await import("aos/dist/aos.css");
      AOS.init({
        easing: "ease-out-quad",
        duration: 1000,
        once: true,
      });
    };
    initAOS();
  }, []);

  return (
    <ThemeContext.Provider value={{ data, handleDataChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
