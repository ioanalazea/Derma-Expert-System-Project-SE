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
    const index = parseInt(
      response.data[key].substring(0, response.data[key].indexOf(","))
    );

    const sympton = response.data[key].substring(
      response.data[key].indexOf(",") + 1
    );

    console.log(sympton);

    const symptomObj = {
      id: key,
      index: index,
      symptom: sympton,
    };

    symptoms.push(symptomObj);
  }
  return symptoms;
}


export async function getRules() {
  const response = await axios.get(URL_BACKEND + "/rules.json");
  const rule = [];
  for (const key in response.data) {
    const ruleObj = {
      id: key,
      rules: response.data[key],
    };

    rule.push(ruleObj);
  }

  return rule;
}