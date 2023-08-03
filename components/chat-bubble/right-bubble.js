import React from "react";
import styles from "../../styles/Components.module.css";
import Iphone1 from "../../public/iphone1.svg";
import Iphone2 from "../../public/iphone2.svg";

export default function RightBubble() {
  return (
    <>
      <div className={styles.RightBubbleContain}>
        <div className={styles.sentInfoRight}>
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

        <div className={styles.chatBubbleRight}>
          <div className={styles.chatBubbleRightText}>
            <p>Hi, I would like to know more about the product.</p>
          </div>
          <div className="chat-bubble-right-time"></div>
        </div>

        <div className={styles.chatTimeRight}>
          <p>12:00</p>
        </div>
      </div>
    </>
  );
}
