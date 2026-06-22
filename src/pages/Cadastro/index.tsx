import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import apiAxio from "../../services/api.js";

import "./cadastro.css";

import Header from "../../components/Header/index.js";
import Input from "../../components/Input/index.js";
import Button from "../../components/Button/index.js";

import logoPassword from "../../assets/password.png";
import logoEmail from "../../assets/iconEmail.png";
import logoUser from "../../assets/user.png";
import { IData } from "./types.js";

const schema = yup

  .object({
    username: yup.string().required("Campo obrigatório"),
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

// Componente cadastro

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (data: IData) => {
    try {
      const response = await apiAxio.post(`/users`, {
        name: data.username,
        email: data.email,
        password: data.password,
      });
      navigate("/feed");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Header />
      <main className="main-cadastro">
        <div className="container-cadastro">
          <h2 className="container-text-cadastro">
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </h2>

          <form className="form-cadastro" onSubmit={handleSubmit(onSubmit)}>
            <h2>Comece agora grátis</h2>
            <p>crie sua conta e make change._</p>

            <div className="div-input">
              <Input
                control={control}
                variant="input-login"
                icone={logoUser}
                placeholder="Nome completo"
                name="username"
                type="text"
                errorMessage={errors.username?.message}
              />
              <Input
                control={control}
                variant="input-login"
                icone={logoEmail}
                placeholder="E-mail"
                name="email"
                type="email"
                errorMessage={errors.email?.message}
              />
              <Input
                control={control}
                variant="input-login"
                icone={logoPassword}
                placeholder="Senha"
                name="password"
                type="password"
                errorMessage={errors.password?.message}
              />
            </div>

            {
              isValid ? <Button
              title={"Criar minha conta"}
              variant="secundary"
            /> : null  
            }
            
            <p>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da Dio.
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default Cadastro;
