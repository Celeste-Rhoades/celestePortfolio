import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl p-2 text-3xl text-white transition-all duration-300 hover:bg-gradient-to-t hover:from-rose-300 hover:via-sky-200 hover:to-teal-300 focus:ring-2 focus:ring-white focus:outline-none md:text-4xl"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <i className="fa-solid fa-moon" aria-hidden="true"></i>
      ) : (
        <i className="fa-solid fa-sun" aria-hidden="true"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
