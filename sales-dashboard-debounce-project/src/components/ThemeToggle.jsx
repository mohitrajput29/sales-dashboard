import {
  useContext
} from "react";

import {
  ThemeContext
} from "../context/ThemeContext";

export default function ThemeToggle() {

  const {
    theme,
    toggleTheme
  } = useContext(ThemeContext);

  return (

    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        marginBottom: "20px",
        cursor: "pointer"
      }}
    >

      {
        theme === "light"
          ? "🌙 Dark Mode"
          : "☀ Light Mode"
      }

    </button>
  );
}