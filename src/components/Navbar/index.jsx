import React from 'react';
import styles from './index.module.scss'

import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className={styles.principal}>
    <div className={styles.centralizaLogo}>
    <div className={styles.fundo}>
        <img className={styles.img} src="/logo.png" alt="" />
        <h1 className={styles.titulo}>PiggyFin</h1>
        
        </div>
        </div>
        <div className={styles.menu}> 
            <Link className={styles.linkMenu} to='/perfil-usuario'>Perfil do Usuário</Link>
            <Link className={styles.linkMenu} to='/relatorio-despesas'>Relatórios</Link>
            <Link className={styles.linkMenu} to='/cadastro-despesas'>Cadastrar Despesas</Link>
        </div>
        

        </div>

  )
}

export default Navbar