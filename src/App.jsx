import Header from "./Components/Header";
import Main from "./Components/Main";
import { ThemeProvider } from "./Components/ThemeContext";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 -z-10 bg-[url('./assets/images/moab1.jpg')] bg-cover bg-center bg-no-repeat brightness-100 transition-all duration-300 dark:brightness-[0.85]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="font-display">
            <Header />
          </div>
          <div>
            <Main />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
