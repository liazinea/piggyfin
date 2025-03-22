import React from 'react';
import styles from "./index.module.scss";
import InputForm from '../../components/InputLogin';
import BotaoForm from '../../components/BotaoForm';

const Login = () => {
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
                    <h2>Login</h2>
                    <div className={styles.forms}>
                        <InputForm tipo="email" placeholder="Insira seu e-mail" label="Email:" />
                        <InputForm tipo="password" placeholder="Insira sua senha" label="Senha:" />
                    </div>
                    <div className={styles.btn}>
                        <BotaoForm className={styles.btn} texto={"Entrar"}/>
                        <BotaoForm className={styles.btn} texto={"Cadastrar"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
