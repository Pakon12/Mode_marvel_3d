import React from 'react'
import styles from './Header.module.css'
const HeaderComponent = () => {
  return (
    <div className={styles.header}>
      <img src='./Logo.png' className={styles.logo} width="80px" />
      <div className={styles.headerRight}>
        <a className={styles.active} href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  )
}

export default HeaderComponent
