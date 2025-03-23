import styles from './index.module.scss';

import React from 'react'

const Botao = ({texto, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className={styles.btn}>{texto}</button>
    </div>
  )
}   
export default Botao;