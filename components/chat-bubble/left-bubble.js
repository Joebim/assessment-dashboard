import React from "react";
import styles from "../../styles/Components.module.css";
import Iphone1 from "../../public/iphone1.svg";
import Timeline from "../timeline/timeline";

export default function LeftBubble(props) {
  return (
    <>
      <div className={styles.LeftBubbleContain}>
        <div className={styles.TimelineContain}>
          <Timeline timeline="12 August 2022"/>
        </div>
        <div className={styles.sentInfoLeft}>
          <div className={styles.info}>
            <div className={styles.orderItem}>
              <div className={styles.orderItemPhoto}>
                <Iphone1 width={10} height={10} className={styles.logo} />
              </div>
              <div className={styles.orderItemWrap}>
                {/* <div className={styles.orderItemTop}> */}
                <div className={styles.orderItemTop}>
                  <p>iPhone 13</p>
                  <p>₦730,000.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.avaliable}>12 in stock</div>
        </div>

        <div className={styles.chatBubbleLeft}>
          <div className={styles.chatBubbleLeftText}>
            <p>{props.user.chats}</p>
          </div>
        </div>

        <div className={styles.chatTimeLeft}>
          <p>{props.user.time}</p>
        </div>
      </div>
    </>
  );
}
