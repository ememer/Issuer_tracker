import { createContext, useState } from "react";

export const ThemeContext = createContext<any>({
  theme: false,
});

type Children = {
  children?: JSX.Element;
};

export const ThemeProvider = ({ children }: Children) => {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
