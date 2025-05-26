// This code sets up a Theme Context for managing light and dark themes across the app.
// - `ThemeContext` is created with default values: a theme mode and two placeholder functions.
// - `ThemeProvider` is exported for wrapping components to provide the actual theme state.
// - `useTheme()` is a custom hook that allows easy access to the context using `useContext`.
// This setup avoids prop drilling and enables global theme management throughout the component tree.

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
