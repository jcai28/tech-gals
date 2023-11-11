import { createContext, useContext } from "react";

// Define the color scheme based on the website's palette
const ColorScheme = {
  white: "white",
  background: "#faebe3", // light pink
  mainColor: "#25348f", // dark blue
  foregroundInteractiveHover: "#1e116e", // very dark blue
  foregroundInteractive: "#5532fa", // bright purple
  lightGreen: "#c2ecd5",
  lightPurple: "#f0ecfd",
  mediumPurple: "#6e87cd",
  lavender: "#eff1ff",
  primary50: "#f9f5ff",
  primary100: "#f4ebff",
  primary600: "#7f56d9", // purple
  primary700: "#6941c6", // dark purple
  gray50: "#f9fafb",
  gray100: "#f2f4f7",
  gray300: "#d0d5dd",
  gray700: "#344054",
  gray800: "#1d2939",
  gray600: "#475467",
  gray900: "#101828", // darkest gray
  darkElevation: "#ede0d8",
  dark: "#131313", // very dark (almost black)
  black: "#2c2c2c", // dark gray
};

// Create a context
const ColorSchemeContext = createContext(ColorScheme);

// Context provider component
export const ColorSchemeProvider = ({ children }) => (
  <ColorSchemeContext.Provider value={ColorScheme}>
    {children}
  </ColorSchemeContext.Provider>
);

// Hook to use the color scheme in components
export const useColor = () => useContext(ColorSchemeContext);
