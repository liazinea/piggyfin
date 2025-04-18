import React from 'react'
import styles from './index.module.scss'

const InputLogin = ({ tipo, placeholder, label, ...props }) => {
    return (
        <div>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type={tipo} placeholder={placeholder} {...props}/>
        </div>
    )
}

export default InputLogin