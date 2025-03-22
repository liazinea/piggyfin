import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import InputForm from "../../components/InputForm";
import styles from "./index.module.scss";
import Footer from "../../components/Footer";
import BotaoForm from "../../components/BotaoForm";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import useCategorias from "../../hooks/useCategoria";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const CadastroDespesas = () => {
  const { categorias } = useCategorias()

  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      Navigate('/')
    }
  }, [token])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [apiMessage, setApiMessage] = useState([]);

  const cadastroDespesas = async (data) => {
    console.log("Enviando:", data);
    try {

      console.log(data)
      const response = await api.post("/despesa", data, {
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
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
        <form className={styles.card} onSubmit={handleSubmit(cadastroDespesas)}>
          <div className={styles.alinha}>
            <InputForm tipo={"text"} label={"Descrição"} placeholder={"Descreva a despesa, ex: água"} register={register} nome={'des_descricao'} />
            <div className={styles.fundo}>
              <label className={styles.label}>Categoria</label>
              <select className={styles.input}  {...register("cat_id", { required: true })}>
                <option
                  className={styles.placeholder}
                  value=""
                  disabled
                  selected
                >
                  Selecione a categoria
                </option>
                {categorias.map((categoria) => (
                  <option className={styles.placeholder} value={categoria.cat_id}>
                    {categoria.cat_nome}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.alinha}>
            <InputForm tipo={"number"} label={"Valor:"} placeholder={"Digite o valor em reais"} register={register} nome={'des_valor'} />
            <InputForm tipo={"date"} label={"Data"} register={register} nome={'des_data'} />
          </div>
          <div className={styles.btn}>
            <BotaoForm className={styles.btn} texto={"Cadastrar"} />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CadastroDespesas;
