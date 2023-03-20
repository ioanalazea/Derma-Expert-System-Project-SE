import "./TestPage.css";
import Question from "../components/Question";
import Button from "../components/Button";

function TestPage() {
  return (
    <div className="Container-testPage">
      <Question text="Do you have an itchy skin?" />
      <div className="Container-buttons">
        <Button title="Yes" />
        <Button title="No" />
      </div>
    </div>
  );
}

export default TestPage;
