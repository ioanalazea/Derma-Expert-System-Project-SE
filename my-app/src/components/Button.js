import "./Button.css";

function Button({ title, onClick }) {
  return (
    <div>
      <button className="Button" type="button" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default Button;
