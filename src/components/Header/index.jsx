import { Link } from "react-router";
import "./header.css";

import Button from "../Button";
import Profile from "../Profile";

import logoDio from "../../assets/logoDio.png";
import perfil from "../../assets/perfil.jpeg";
import arrow from "../../assets/arrowIcon.png";

const Header = ({ authenticate, tela }) => {
  return (
    <header>
      <div className="nav">
        <Link to={"/"}>
          <img className="logo" src={logoDio} alt="Logo Dio" />
        </Link>

        <input type="text" placeholder="Buscar..." />
        <a href="#">Live Code</a>
        <a href="#">Global</a>
      </div>

      {authenticate ? (
        <div className="btn-nav">
          <Profile profile={perfil} />
          <img src={arrow} alt="seta" />
        </div>
      ) : tela === "login" ? (
        <div className="btn-nav">
          <Link to={"/"}>
            <p>Home</p>
          </Link>

          <Link to={"/cadastro"}>
            <Button title={"Cadastrar"} variant="secundary" />
          </Link>
        </div>
      ) : tela === "home" ? (
        <div className="btn-nav">
          <Link to={"/login"}>
            <Button title={"Entrar"} />
          </Link>

          <Link to={"/cadastro"}>
            <Button title={"Cadastrar"} variant="secundary" />
          </Link>
        </div>
      ) : (
        <div className="btn-nav">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Link to={"/login"}>
            <Button title={"Entrar"} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
