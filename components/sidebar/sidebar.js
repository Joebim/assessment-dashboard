import Link from "next/link";
import Image from "next/image";
import Category from "../../public/category.svg";
import Bag from "../../public/bag.svg";
import User from "../../public/user.svg";
import Folder from "../../public/folder.svg";
import Chat from "../../public/chat.svg";
import Settings from "../../public/settings.svg";
import Gift from "../../public/gift.svg";
import Headphones from "../../public/headphones.svg";
import styles from "../../styles/Sidebar.module.css";
import Counter from "./Counter";
import Logout from "../../public/logout.svg";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/router";
import { it } from "faker/lib/locales";
import { useContext, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MenuContext } from "../context/menuContext";

function Sidebar() {
  let toggleState = useContext(MenuContext);
  const { isCollapse } = toggleState;

  const router = useRouter();

  const toggleSidebar = (path) => {
    const currentRoute = router.pathname;
    if (currentRoute === path) {
      toggleState.setIsCollapse(!isCollapse)
    }
  };

 
    


  const sidebarItems = [
    {
      name: "Dashboard",
      path: "/",
      counter: 6,
      isCount: false,
      icon: (
        <Category
          width={10}
          height={10}
          className={`${styles.DashboardLogo} DashboardLogo`}
        />
      ),
    },
    {
      name: "Orders",
      path: "/other-pages/orders",
      counter: 6,
      isCount: true,
      icon: (
        <Bag width={10} height={10} className={`${styles.navLogo} navLogo`} />
      ),
    },
    {
      name: "Customers",
      path: "/other-pages/customers",
      counter: 6,
      isCount: false,
      icon: (
        <User width={10} height={10} className={`${styles.navLogo} navLogo`} />
      ),
    },
    {
      name: "Inventory",
      path: "/other-pages/inventory",
      counter: 6,
      isCount: false,
      icon: (
        <Folder
          width={10}
          height={10}
          className={`${styles.navLogo} navLogo`}
        />
      ),
    },
    {
      name: "Conversations",
      path: "/other-pages/conversations",
      counter: 6,
      isCount: true,
      icon: (
        <Chat width={10} height={10} className={`${styles.navLogo} navLogo`} />
      ),
    },
    {
      name: "Settings",
      path: "/other-pages/settings",
      counter: 6,
      isCount: false,
      icon: (
        <Settings
          width={10}
          height={10}
          className={`${styles.navLogo} navLogo`}
        />
      ),
    },
  ];

  return (
    <div
      className={`${styles.sidebar} ${
        isCollapse ? "sidebar-collapse" : "sidebar-visible"
      }`}
    >
      <div className={`${styles.sidebarContain} `}>
        <div className={styles.sidebarTop}>
          <div className={styles.logoContain}>
            <div className={styles.logoWrapper}>
              <Image
                src="/Graph.svg"
                alt="Vercel Logo"
                width={16}
                height={16}
                className={styles.logo}
                priority
              />
              <h1 className={`${styles.logoText} logoText`}>Metrics</h1>
            </div>
            {/* <div
              className={styles.menuContain}
            >
              <HiMenu width={10} height={10} className={`${styles.menuLogo}`} />
            </div> */}
          </div>
          <nav>
            <ul>
              {sidebarItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {toggleSidebar(item.path)}}
                  className={`${
                    router.pathname === item.path ? "selected" : ""
                  }`}
                >
                  <Link href={item.path} as={process.env.BACKEND_URL + item.path}>
                    <div className={`${styles.linkWrap} linkWrap`}>
                      {item.icon}
                      <p className={`${styles.navText} navText`}>{item.name}</p>

                      {item.isCount === true ? (
                        <Counter count={item.counter} toggleClass="counter" />
                      ) : (
                        ""
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles}>
          <ul>
            <div className={`${styles.contactBtn} contactBtn`}>
              <Link href="/other-pages/some-page">
                <div className={`${styles.contactWrap} contactWrap`}>
                  <Headphones
                    width={10}
                    height={10}
                    className={`${styles.contactLogo} contactLogo`}
                  />
                  <p className={`${styles.navText} navText`}>Contact Support</p>
                </div>
              </Link>
            </div>
            <div className={`${styles.giftBtn} giftBtn`}>
              <Link href="/other-pages/some-page">
                <div className={`${styles.giftBtnWrap} giftBtnWrap`}>
                  <div className={styles.giftRow}>
                    <div className={`${styles.gift} gift`}>
                      <Gift
                        width={10}
                        height={10}
                        className={`${styles.navLogo} navLogo`}
                      />
                      <p className={`${styles.giftText} giftText`}>
                        Free Gift Awaits You!
                      </p>
                    </div>
                  </div>
                  <div className={styles.giftRow}>
                    <div className={`${styles.gift} gift`}>
                      <p className={`${styles.giftTextAcc} giftTextAcc`}>
                        Upgrade your account
                      </p>
                      <FiChevronRight
                        height="20"
                        className={`${styles.rightArrow} rightArrow`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={`${styles.logoutBtn} logoutBtn`}>
              <Link href="/other-pages/some-page">
                <div className={styles.linkWrap}>
                  <Logout
                    width={10}
                    height={10}
                    className={`${styles.navLogo} navLogo`}
                  />
                  <p className={`${styles.logoutText} logoutText`}>Logout</p>
                </div>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
