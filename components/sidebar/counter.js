import React from 'react'
import styles from "../../styles/Sidebar.module.css";

export default function Counter(props) {
  return (
    <div className={styles.counter}>
        {props.count}
    </div>
  )
}
