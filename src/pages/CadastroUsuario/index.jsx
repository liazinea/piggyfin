import React from 'react';
import styles from "./index.module.scss";
import InputForm from '../../components/InputLogin';
import BotaoForm from '../../components/BotaoForm';

const CadastroUsuario = () => {
    return (
        <div className={styles.container}>
            <div className={styles.painelesquerdo}>
                <div className={styles.logo}>
                    <div className={styles.piggyFin}>
                        <img src="/logo.png" alt="PiggyFin Logo"/>
                        <h1>PiggyFin</h1>
                    </div>
                    <div className={styles.texto}>
                        <p className={styles.slogan}>Seu porquinho digital, suas finanças no lugar!</p>
                    </div>
                </div>
            </div>
            <div className={styles.painelDireito}>
                <div className={styles.caixaLogin}>
                <div className={styles.tituloForms}>
                    <h2>Cadastro de Usuário</h2>
                    </div>
                    <div className={styles.forms}>
                        <InputForm tipo="texto" placeholder="Insira seu nome" label="Nome:" />
                        <InputForm tipo="texto" placeholder="Insira seu e-mail" label="E-mail:" />
                        <InputForm tipo="password" placeholder="Utilize caracteres especiais" label="Senha:" />
                        <InputForm tipo="password" placeholder="Digite novamente sua Senha" label="Confirme sua Senha:" />
                    </div>
                    <div className={styles.btn}>
                        <BotaoForm className={styles.btn} texto={"Cadastrar"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastroUsuario;
