import Header from "./Components/Header";
import Main from "./Components/Main";
import "./index.css";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background layer */}
      <div className="fixed inset-0 -z-10 bg-[url('./assets/images/moab1.jpg')] bg-cover bg-center bg-no-repeat" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="font-display">
          <Header />
        </div>
        <div>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
