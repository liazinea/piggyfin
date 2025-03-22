import { useState } from "react";
import Navbar from "../../components/Navbar";
import InputForm from "../../components/InputForm";
import styles from "./index.module.scss";
import Footer from "../../components/Footer";
import BotaoForm from "../../components/BotaoForm";
import { useForm } from "react-hook-form";
import api from "../../services/api";

const CadastroDespesas = () => {
  const infos = [
    { id: 1, valor: "Alimento" },
    { id: 2, valor: "Luz" },
  ];
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const [apiMessage, setApiMessage] = useState([]);
  
    const cadastroDespesas = async (data) => {
      console.log("Enviando:", data);
      try {
        const response = await api.post("/despesas", data, {
          headers: { "Content-Type": "application/json" },
        });
        console.log("Resposta da API:", response.data);
      } catch (error) {
        console.error("Erro completo:", error.response?.data);
        setApiMessage(error.response?.data?.errors || ["Erro desconhecido"]);
      }
    };
  return (
    <div>
      <Navbar />

      <h1 className={styles.titulo}>Cadastro de Despesas</h1>
      <div className={styles.principal}>
        <form className={styles.card}>
          <div className={styles.alinha}>
            <InputForm tipo={"text"} label={"Descrição"} placeholder={"Descreva a despesa, ex: água"} {...register("usu_nome", { required: true })}/>
            <div className={styles.fundo}>
              <label className={styles.label}>Categoria</label>
              <select className={styles.input}>
                <option
                  className={styles.placeholder}
                  value=""
                  disabled
                  selected
                >
                  Selecione a categoria
                </option>
                {infos.map((info) => (
                  <option className={styles.placeholder} value={info.id}>
                    {info.valor}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.alinha}>
            <InputForm tipo={"number"} label={"Valor:"} placeholder={"Digite o valor em reais"} {...register("usu_nome", { required: true })}/>
            <InputForm tipo={"date"} label={"Data"} {...register("usu_nome", { required: true })}/>
          </div>
          <div className={styles.btn}>
            <BotaoForm className={styles.btn} texto={"Cadastrar"} {...register("usu_nome", { required: true })}/>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default CadastroDespesas;
