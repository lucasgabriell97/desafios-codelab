import "./style.css";

const Label = ({ htmlFor, text }) => {
  return <label className="label-form" htmlFor={htmlFor}>{text}</label>;
};

export default Label;
