import { createContext, useState } from "react";

const PERSON_TEMPLATE = [
  "Wybierz",
  "Osoba pierwsza",
  "Osoba druga",
  "Osoba trzecia",
];

export const PersonsContext = createContext(PERSON_TEMPLATE);

export const PersonContextProvider = ({ children }) => {
  const [personsArray, setPersonsArray] = useState(PERSON_TEMPLATE);

  return (
    <PersonsContext.Provider value={{ personsArray, setPersonsArray }}>
      {children}
    </PersonsContext.Provider>
  );
};
