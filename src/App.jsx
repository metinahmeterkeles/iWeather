import HomePage from "./components/Home/HomePage";
import WeatherPage from "./components/WeatherPage/WeatherPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather/:city" element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
