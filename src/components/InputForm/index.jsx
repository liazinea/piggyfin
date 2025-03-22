import React from 'react'
import styles from './index.module.scss'

const InputForm = ({tipo, placeholder, label, register, nome}) => {
  return (
    <div className={styles.fundo}>
        <label className= {styles.label}>{label}</label>
        <input {...register(nome)} className={styles.input}  type= {tipo} placeholder={placeholder}/>
    </div>
  )
}

export default InputForm