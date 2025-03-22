import React from 'react'
import styles from './index.module.scss'

const InputForm = ({ tipo, placeholder, label }) => {
    return (
        <div>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type={tipo} placeholder={placeholder} />
        </div>
    )
}

export default InputForm;