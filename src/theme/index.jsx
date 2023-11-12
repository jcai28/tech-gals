import { createContext, useContext } from "react";
import ColorScheme from "./colors";

const theme = {
  ...ColorScheme,
}

// Create a context
const ThemeContext = createContext(theme);

// Context provider component
export const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
