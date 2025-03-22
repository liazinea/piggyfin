import { useState } from "react";
import styles from "./index.module.scss";
import InputForm from "../../components/InputLogin";
import BotaoForm from "../../components/BotaoForm";
import { useForm } from "react-hook-form";
import api from "../../services/api";

const CadastroUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [apiMessage, setApiMessage] = useState([]);

  const cadastroUsuario = async (data) => {
    console.log("Enviando:", data);
    try {
      const response = await api.post("/usuario", data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro completo:", error.response?.data);
      setApiMessage(error.response?.data?.errors || ["Erro desconhecido"]);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.painelEsquerdo}>
        <div className={styles.logo}>
          <div className={styles.piggyFin}>
            <img src="/logo.png" alt="PiggyFin Logo" />
            <h1>PiggyFin</h1>
          </div>
          <div className={styles.texto}>
            <p className={styles.slogan}>
              Seu porquinho digital, suas finanças no lugar!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.painelDireito}>
        <form onSubmit={handleSubmit(cadastroUsuario)}  className={styles.caixaLogin}>
          <div className={styles.tituloForms}>
            <h2>Cadastro de Usuário</h2>
          </div>
          <div className={styles.forms}>
            <InputForm
              tipo="text"
              placeholder="Insira seu nome"
              label="Nome:"
              {...register("name", { required: true })}
            />
            {errors.uname && <p>Nome é obrigatório</p>}
            <InputForm
              tipo="email"
              placeholder="Insira seu e-mail"
              label="E-mail:"
              {...register("email", { required: true })}
            />
            {errors.email && <p>Email é obrigatório</p>}
            <InputForm
              tipo="password"
              placeholder="Utilize caracteres especiais"
              label="Senha:"
              {...register("password", { required: true })}
            />
            {errors.password && <p>Senha é obrigatório</p>}
            <InputForm
              tipo="password"
              placeholder="Digite novamente sua Senha"
              label="Confirme sua Senha:"
              {...register("usu_senha", { required: true })}
            />
            {errors.password && <p>Senha é obrigatório</p>}
          </div>
          <div className={styles.btn}>
            <BotaoForm className={styles.btn} texto={"Cadastrar"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroUsuario;
