import React from "react";
import Navbar from "../../components/Navbar";
import InputFormDesativado from "../../components/InputFormDesativado";
import styles from "./index.module.scss";
import Footer from "../../components/Footer";

const PerfilUsuario = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.principal}>
        <h1 className={styles.titulo}>Meu Perfil</h1>
        <h3 className={styles.dados}>Dados Cadastrais</h3>
        <div className={styles.inputs}>
          <InputFormDesativado
            tipo={"text"}
            label={"Nome Completo:"}
            placeholder={"Nome Completo do Cliente"}
          />
          <InputFormDesativado
            tipo={"text"}
            label={"Email:"}
            placeholder={"nomedocliente@email.com"}
          />
          <InputFormDesativado
            tipo={"password"}
            label={"Senha:"}
            placeholder={"Senha"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PerfilUsuario;
