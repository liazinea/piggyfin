import React, { useEffect } from 'react';
import styles from "./index.module.scss";
import { useAuth } from '../../context/AuthContext';
import InputLogin from '../../components/InputLogin';
import BotaoForm from '../../components/BotaoForm';
import Botao from '../../components/Botao'
import { useForm } from 'react-hook-form';
import {
    useNavigate
} from 'react-router-dom';
const Login = () => {
    const { login } = useAuth();
    const { token } = useAuth();
    console.log(localStorage.getItem('token'))

    useEffect(() => {
      if(token){
        navigate('/home')
      }  
    }, [token])
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            await login(data.email, data.password);
            console.log('Token atual:', token);
        } catch (error) {
            console.error('Erro ao fazer login:', error.response?.data || error.message);

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
                        <p className={styles.slogan}>Seu porquinho digital, suas finanças no lugar!</p>
                    </div>
                </div>
            </div>
            <div className={styles.painelDireito}>
                <form className={styles.caixaLogin} onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login</h2>
                    <div className={styles.forms}>
                        <InputLogin tipo="email" placeholder="Insira seu e-mail" label="Email:" {...register('email', {
                            required: 'O email é obrigatório',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Email inválido',
                            },
                        })} />
                        <InputLogin tipo="password" placeholder="Insira sua senha" label="Senha:" {...register('password', {
                            required: 'A senha é obrigatória',
                            minLength: {
                                value: 6,
                                message: 'A senha deve ter pelo menos 6 caracteres',
                            },
                        })} />
                    </div>
                    <div className={styles.btn}>
                        <BotaoForm className={styles.btn} texto={"Entrar"} />
                        <Botao 
                            className={styles.btn} 
                            texto={"Cadastrar"} 
                            onClick={() => navigate('/cadastro-usuario')} 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
