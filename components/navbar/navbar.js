import React from "react";
import Dropdown from "./dropdown";
import Home from "../../public/Home.svg";
import Notification from "../../public/Notification.svg";
import styles from "../../styles/Navbar.module.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navTopBar}>
        <div className={styles.navTopLeft}>
            <p>Dashboard</p>
        </div>
        <div className={styles.navTopRight}>
            <div className={styles.dropdown}>
                <p>Nanny &apos;s Shop</p>
                <MdOutlineKeyboardArrowDown width="20" className={styles.downArrow}/>
            </div>

            <Notification width={10} height={10} className={styles.notificationLogo}/>

            <div className={styles.userIcon}></div>
        </div>
      </div>
      <div className={styles.navBreadcrumbBar}>
        <Home />
      </div>
    </div>
  );
}
