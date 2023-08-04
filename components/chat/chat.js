import React from "react";
import Photo1 from "../../public/photo1.svg";
import Photo2 from "../../public/photo2.svg";
import Photo3 from "../../public/photo3.svg";
import styles from "../../styles/Conversations.module.css";

export default function Chat(props) {
  return (
    <>
      {props.users.map((chat, id) => (
        <div className={styles.chatContain} key={id}>
          <div className={styles.orderchat}>
            {chat.new == true ? (
              <Photo1 width={10} height={10} className={styles.chatLogo} />
            ) : chat.name == "" ? (
              <Photo2 width={10} height={10} className={styles.chatLogo} />
            ) : (
              <Photo3 width={10} height={10} className={styles.chatLogo} />
            )}

            <div className={styles.orderChatWrap}>
              <div className={styles.orderChatTop}>
                <p>{chat.name}</p>
                {chat.new == true ? (
                  <div className={styles.newToast}>
                    <p>new</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className={styles.chatText}>
                <p>Hi, i want make enquiries about yo...</p>

                <div className={styles.chatTime}>12:55 am</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
