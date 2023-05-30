
import { createContext } from "react";
import { useState } from 'react';

const LanguagesContext = createContext();

export default LanguagesContext;

export function LanguagesContextProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  return (
    <LanguagesContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguagesContext.Provider >
  );

};
