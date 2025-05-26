// This is the main App component that sets up and provides theme context (light or dark) to the application.
// - It uses React state (`useState`) to manage the current theme mode.
// - `lightTheme` and `darkTheme` functions update the theme state.
// - `useEffect` listens for changes in `themeMode` and updates the HTML class accordingly, enabling global theme styling.
// - The `ThemeProvider` wraps the app, making theme data and functions available via context.
// - It renders a Theme toggle button (`ThemeBtn`) and a `Card` component, both of which can access the theme context.

import "./App.css";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Define the themes
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      {/*Header*/}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*Theme button*/}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/*Card*/}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
