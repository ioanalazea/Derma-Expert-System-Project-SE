import "./App.css";
import HomePage from "./screens/HomePage";
import TestPage from "./screens/TestPage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="home/TestPage" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;