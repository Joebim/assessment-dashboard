import Head from "next/head"
import Navbar from "../components/navbar/navbar"
import styles from "../styles/Dashboard.module.css"

export default function dashboard() {
  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles.dashboardContain}>
        <div className={styles.CardOne}></div>
        <div className={styles.CardTwo}></div>
        <div className={styles.CardThree}></div>
        <div className={styles.CardFour}></div>
        <div className={styles.CardFive}></div>
        <div className={styles.CardSix}></div>
      </div>
        
    </div>
  )
}
