import "./Button.css";

interface ButtonProps {
  title: string;
  style?: React.CSSProperties;
}

function Button({ title, style }: ButtonProps) {
  return (
    <button className="Button" style={style}>
      {title}
    </button>
  );
}

export default Button;
