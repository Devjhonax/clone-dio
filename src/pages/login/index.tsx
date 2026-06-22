import { useNavigate, Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import apiAxio from "../../services/api.js";

import "./login.css";

import Header from "../../components/Header/index.js";
import Input from "../../components/Input/index.js";
import Button from "../../components/Button/index.js";

import passwordIcon from "../../assets/password.png";
import emailIcon from "../../assets/iconEmail.png";
import { IDataform } from "./types.js";

const schema = yup
  .object({
    email: yup
      .string()
      .email("email não é valido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "Digite no minimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit = async (dataForm: IDataform) => {
    try {
      console.log(dataForm.email, dataForm.password);

      const url = `/users?email=${dataForm.email}&password=${dataForm.password}`;
      console.log("URL: ", url);

      const { data } = await apiAxio.get(url);
      console.log("Resposta: ", data);
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Credenciais incorretas");
      }
    } catch (error) {
      alert(`Houve um erro., ${error}`);
    }
  };

  return (
    <>
      <Header tela={"login"} />

      <main className="main-login">
        <div className="container-div-login">
          <h2 className="h2-text-login">
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </h2>

          <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
            <h2>Faça seu cadastro</h2>
            <p>Faça seu login e make the change._</p>

            <div className="div-input">
              <Input
                control={control}
                variant="input-login"
                icone={emailIcon}
                placeholder="Email"
                name="email"
                type="email"
                errorMessage={errors.email?.message}
              />
              <Input
                control={control}
                variant="input-login"
                icone={passwordIcon}
                placeholder="Senha"
                name="password"
                type="password"
                errorMessage={errors.password?.message}
              />
            </div>
            
            {isValid ? <Button variant="secundary" title="Entrar" /> : null}

            <div className="div-input-ancor">
              <a href="#">Esqueci minha senha</a>
              <Link to="/cadastro">
                <a className="create-account">Criar Conta</a>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
