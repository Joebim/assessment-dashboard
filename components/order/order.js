import React, { useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import Iphone1 from "../../public/iphone1.svg";
import Iphone2 from "../../public/iphone2.svg";

export default function Order(props) {
  console.log("props.type", props.orders);
  return (
    <>
      {props.orders.map((item, id) => (
        <div className={styles.orderItem} key={id}>
          <div className={styles.orderItemPhoto}>
            {item.name == "iPhone 13" ? (
              <Iphone1 width={10} height={10} className={styles.logo} />
            ) : (
              <Iphone2 width={10} height={10} className={styles.logo} />
            )}
          </div>
          <div className={styles.orderItemWrap}>
            {/* <div className={styles.orderItemTop}> */}
            <div className={styles.orderItemTop}>
              <p>{item.name}</p>
              <p>{item.date}</p>
            </div>
            <div className={styles.orderItemBottom}>
              <p>
                {item.amount} x {item.quantity}
              </p>
              {item.status == "Pending" ? (
                <div className={styles.itemStatusPending}>{item.status}</div>
              ) : (
                <div className={styles.itemStatusCompleted}>{item.status}</div>
              )}
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}
