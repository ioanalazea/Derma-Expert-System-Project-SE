import axios from "axios";
const URL_BACKEND =
  "https://seskin-addea-default-rtdb.europe-west1.firebasedatabase.app";

export async function getDiseases() {
  const response = await axios.get(URL_BACKEND + "/disease.json");
  const diseases = [];
  for (const key in response.data) {
    const diseaseObj = {
      id: key,
      disease: response.data[key],
    };

    diseases.push(diseaseObj);
  }
  return diseases;
}

export async function getSymptoms() {
  const response = await axios.get(URL_BACKEND + "/symptoms.json");
  const symptoms = [];
  for (const key in response.data) {
    const symptomObj = {
      id: key,
      symptom: response.data[key],
    };

    symptoms.push(symptomObj);
  }
  return symptoms;
}
