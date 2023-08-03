import React from "react";
import styles from "../../styles/Components.module.css";

export default function LeftBubble() {
  return (
    <>
      {/* {props.users.map((chat, id) => ( */}
        <div className={styles.LeftBubbleContain} >
          <div className={styles.sentInfoLeft}>
            <div></div>
            <div></div>
          </div>

          <div className={styles.chatBubbleLeft}>
            <div className={styles.chatBubbleLeftText}>
              <p>Hi, I would like to know more about the product.</p>
            </div>
            <div className="chat-bubble-right-time"></div>
          </div>

          <div className={styles.chatTimeLeft}>
            <p>12:00</p>
          </div>
        </div>
      {/* ))} */}
    </>
  );
}
