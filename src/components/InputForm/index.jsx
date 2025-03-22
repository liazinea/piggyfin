import React from 'react'
import styles from './index.module.scss'

const InputForm = ({tipo, placeholder, label, ...props}) => {
  return (
    <div className={styles.fundo}>
        <label className= {styles.label}>{label}</label>
        <input className={styles.input} step="0.01" type= {tipo} pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" placeholder={placeholder} {...props}/>
    </div>
  )
}

export default InputForm