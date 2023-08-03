import React from 'react'
import styles from "../../styles/Components.module.css";

export default function Timeline(props) {
  return (
    <>
    <div className={styles.timeline}>
       { props.timeline}
    </div>
    </>
  )
}
