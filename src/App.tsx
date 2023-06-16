import Home from "./pages/Home";
import Country from "./pages/Country";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="    min-h-screen   ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Country />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
