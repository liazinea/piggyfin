import React from "react";
import Navbar from "../../components/Navbar";
import InputForm from "../../components/InputForm";
import styles from "./index.module.scss";

const CadastroDespesas = () => {
  const infos = [
    { id: 1, valor: "Alimento" },
    { id: 2, valor: "Luz" },
  ];
  return (
    <div>
      <Navbar />

      <h1 className={styles.titulo}>Cadastro de Despesas</h1>
      <div className={styles.principal}>
        <div className={styles.card}>
          <div className={styles.alinha}>
            <InputForm
              tipo={"text"}
              label={"Descrição"}
              placeholder={"Descreva a despesa, ex: água"}
            />
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
            <InputForm
              tipo={"number"}
              label={"Valor:"}
              placeholder={"Digite o valor em reais"}
            />
            <InputForm tipo={"date"} label={"Data"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroDespesas;
