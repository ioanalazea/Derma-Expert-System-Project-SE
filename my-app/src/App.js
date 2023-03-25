import "./App.css";
import HomePage from "./screens/HomePage";
import TestPage from "./screens/TestPage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { getDiseases, getSymptoms } from "./store/database";
function App() {
  const [diseases, setDiseases] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  useLayoutEffect(() => {
    async function diseasesGet() {
      try {
        const dieseasesAux = await getDiseases();
        setDiseases(dieseasesAux);
      } catch (error) {
        console.log(error);
      }
    }
    async function symptomsGet() {
      try {
        const symtpomsAux = await getSymptoms();
        setDiseases(symtpomsAux);
      } catch (error) {
        console.log(error);
      }
    }
    diseasesGet();
    symptomsGet();
  }, []);
  diseases.forEach((disease) => {
    console.log(disease);
  });
  symptoms.forEach((symptom) => {
    console.log(symptom);
  });
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
