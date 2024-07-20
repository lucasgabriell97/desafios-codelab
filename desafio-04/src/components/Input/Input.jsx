import "./style.css";

const Input = ({ type, name, id, placeholder }) => {
  return (
    <input className="input-form" type={type} name={name} id={id} placeholder={placeholder} required />
  );
};

export default Input;
