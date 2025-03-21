import React from 'react';
import styles from './index.module.scss'

const Navbar = () => {
  return (
    <div className={styles.principal}>
    <div className={styles.centralizaLogo}>
    <div className={styles.fundo}>
        <img className={styles.img} src="/logo.png" alt="" />
        <h1 className={styles.titulo}>PiggyFin</h1>
        <div className={styles.menu}>
        </div>
        </div>
        </div>
        </div>

  )
}

export default Navbar