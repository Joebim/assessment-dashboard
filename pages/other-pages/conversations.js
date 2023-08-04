import React, { useRef, useEffect } from "react";
import styles from "../../styles/Conversations.module.css";
import { CiSearch } from "react-icons/ci";
import { users } from "../../shared/data";
import Chat from "../../components/chat/chat";
import Photo1 from "../../public/photo1.svg";
import { PiHandbagSimpleLight } from "react-icons/pi";
import Send from "../../public/send.svg";
import Smile from "../../public/smile.svg";
import Plus from "../../public/plus.svg";
import RightBubble from "../../components/chat-bubble/right-bubble";
import LeftBubble from "../../components/chat-bubble/left-bubble";
import Timeline from "../../components/timeline/timeline";
import Link from "next/link";
import { RiSendPlaneFill } from "react-icons/ri";
import { useRouter } from "next/router";


export default function Conversations() {

  const router = useRouter();
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [router.pathname]);

  return (
    <>
      <div className={styles.conversations}>
        <div className={styles.conversationsContain}>
          <div className={styles.conversationsWrap}>
            <div className={styles.conversationsTopLeft}>
              <h1>Conversations With Customers</h1>
            </div>
            <div className={styles.conversationsTopRight}>
              <div className={styles.conversationsMessageBtn}>
                <p>New Message</p>
              </div>
            </div>
          </div>

          <div className={styles.conversationsBottom}>
            <div className={styles.conversationsBottomLeft}>
              <div className={styles.chatListContain}>
                <div className={styles.chatListHead}>
                  <h1>Contacts</h1>
                  <p>34</p>
                </div>
                <div className={styles.chatSearch}>
                  <CiSearch width="20" className={styles.searchIcon} />
                  <input
                    type="text"
                    placeholder="Search"
                    className={styles.chatInput}
                  />
                </div>
              </div>

              <div className={styles.chatList}>
                <Chat users={users} />
              </div>
            </div>

            <div className={styles.conversationsBottomRight}>
              <div className={styles.chatHead}>
                <div className={styles.chatHeadBar}>
                  <Photo1 width={10} height={10} className={styles.chatLogo} />

                  <div className={styles.orderChatWrap}>
                    {/* <div className={styles.orderchatTop}> */}
                    <div className={styles.orderChatTop}>
                      <p>Jane Doe</p>

                      <div className={styles.chatHeadWrap}>
                        <div className={styles.newCustomerToast}>
                          <p>New Customer</p>
                        </div>
                        <div className={styles.profileViewText}>
                          View Profile
                        </div>
                      </div>
                    </div>
                    <div className={styles.chatText}>
                      <div className={styles.OnlineDotWrap}>
                        <div className={styles.OnlineDotContain}>
                          <div className={styles.OnlineDot}></div>
                          <p>online</p>
                        </div>
                        <p>12:55 am</p>
                      </div>

                      <div className={styles.orderCount}>
                        <PiHandbagSimpleLight
                          width="40"
                          className={styles.searchIcon}
                        />
                        <p>0 Orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={chatRef} className={styles.chatBody}>
                {users.map((user, id) => (
                  <div key={id}>
                    {user.type === "sender" ? (
                      <RightBubble user={user} />
                    ) : (
                      <LeftBubble user={user} />
                    )}
                  </div>
                ))}
              </div>

              <div className={styles.chats}>
                <div className={styles.chatBarSearch}>
                  <Plus
                    width={23}
                    height={23}
                    className={styles.searchBarIcon}
                  />
                  <input
                    type="text"
                    placeholder="Your Message"
                    className={styles.chatbarInput}
                  />
                  <div className={styles.reactionContain}>
                    <Smile
                      width={23}
                      height={23}
                      className={styles.smileIcon}
                    />
                    <div className={styles.sendButton}>
                      <p>Send</p>
                      <RiSendPlaneFill
                        width="20"
                        height="20"
                        className={styles.searchBarIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
