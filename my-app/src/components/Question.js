import "./Question.css";

function Question({ text }) {
  return (
    <div className="Question-container">
      <p className="Question-text">{text}</p>
    </div>
  );
}

export default Question;
