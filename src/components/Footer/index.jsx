import styles from './index.module.scss'

const Footer = () => {
  return (
    <div className={styles.principal}>
        <div className={styles.icone}>
            <img src="/logo.png" alt="" className={styles.logo}/>
            <p className={styles.iconeTexto}>PiggyFin</p>
        </div>
        <div className={styles.contato}>
          <p>Contatos:</p>
            <ul className={styles.lista}>
                <li className={styles.listaItem}>Telefone: (11) 4002-8922</li>
                <li className={styles.listaItem}>Celular: (11) 91234-5678</li>
                <li className={styles.listaItem}>E-mail: contato@piggfin.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer