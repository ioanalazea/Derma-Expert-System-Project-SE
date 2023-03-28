import "./TestPage.css";
import Question from "../components/Question";
import Button from "../components/Button";
import { getSymptoms } from "../store/database";
import { useEffect, useState } from "react";

function TestPage() {
  const [question, setQuestion] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionsArray = await getSymptoms();
      setQuestion(questionsArray);
    };
    fetchQuestions();
  }, []);

  const currentQuestion = question[currentQuestionIndex];
  const symptom = currentQuestion ? currentQuestion.symptom : "";

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 2;
    const nextQuestion = question.find(
      (question) => question.index === nextIndex
    );
    console.log(nextQuestion);
    if (nextQuestion) {
      setCurrentQuestionIndex(nextQuestion.index - 1);
    }
  };

  return (
    <div className="Container-testPage">
      <Question text={"Do you have " + symptom + "?"} />
      <div className="Container-buttons">
        <Button title="Yes" onClick={handleNextQuestion} />
        <Button title="No" onClick={handleNextQuestion} />
      </div>
    </div>
  );
}

export default TestPage;
