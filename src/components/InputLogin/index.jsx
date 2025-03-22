import React from 'react'
import styles from './index.module.scss'

const InputLogin = ({ tipo, placeholder, label, name }) => {
    return (
        <div>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type={tipo} placeholder={placeholder} name={name}/>
        </div>
    )
}

export default InputLogin