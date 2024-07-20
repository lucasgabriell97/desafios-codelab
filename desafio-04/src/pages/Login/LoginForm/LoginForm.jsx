import Label from "../../../components/Label/Label";
import Input from "../../../components/Input/Input";

import IconGoogle from "../../../assets/images/icon.png";
import "./style.css";

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="login-form-content">
        <div className="text-form">
          <p>Bem-vindo de volta</p>
          <h1>Faça login na sua conta</h1>
        </div>
        <form className="form">
          <Label htmlFor="email" text="E-mail" />
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@gmail.com"
          />
          <Label htmlFor="password" text="Senha" />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="0123456789"
          />
          <div className="remember-forgot">
            <div className="remember">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Lembre de mim</label>
            </div>
            <a href="#">Esqueceu sua senha?</a>
          </div>
          <button className="btn btn-form">Entrar na conta</button>
          <button className="btn btn-google">
            <img src={IconGoogle} alt="Ícone do Google" /> Ou faça login com o
            Google
          </button>
        </form>
        <p className="register">
          Não tem uma conta?
          <a href="#"> Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
