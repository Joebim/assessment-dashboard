import React from "react";
import Dropdown from "./dropdown";
import Home from "../../public/Home.svg";
import Notification from "../../public/Notification.svg";
import styles from "../../styles/Navbar.module.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/dist/client/router";
import Profile from "../../public/profile.svg"
import { useContext, useState } from "react";
import { MenuContext } from "../context/menuContext";

export default function Navbar() {


  let toggleState = useContext(MenuContext);
  const {isCollapse} = toggleState


  const router = useRouter();
  return (
    <div className={`${styles.navbar} ${isCollapse ? "navbar-collapse" : ""} `}>
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

            <div className={styles.userIcon}>
              <Profile width={26} height={26} className={styles.icon}/>
            </div>
        </div>
      </div>
      <div className={styles.navBreadcrumbBar}>
        <Home />/
        <p className={styles.crumbs}>{router.pathname}</p>
      </div>
    </div>
  );
}
