import React from "react";
import Dropdown from "../dashboard/dropdown";
import Home from "../../public/Home.svg";
import styles from "../../styles/Navbar.module.css";
import { useRouter } from "next/dist/client/router";
import Profile from "../../public/profile.svg";
import { useContext, useState } from "react";
import { MenuContext } from "../context/menuContext";
import NotificationDropdown from "../dashboard/notificationDropdown";

export default function Navbar() {
  let toggleState = useContext(MenuContext);
  const { isCollapse } = toggleState;


  const router = useRouter();
  return (
    <div className={`${styles.navbar} ${isCollapse ? "navbar-collapse" : ""} `}>
      <div className={styles.navTopBar}>
        <div className={styles.navTopLeft}>
          <p>Dashboard</p>
        </div>
        <div className={`${styles.navTopRight}`}>
          <Dropdown
          text="Nanny &apos;s Shop"
          class="bg-[#FEF5EA]"
          dropClass="bg-[#FEF5EA]"
          />

          
          <NotificationDropdown/>

          <div className={styles.userIcon}>
            <Profile width={26} height={26} className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.navBreadcrumbBar}>
        <Home />/
        <p className={styles.crumbs}>
          {router.pathname.replace("/other-pages", "")}
        </p>
      </div>
    </div>
  );
}
