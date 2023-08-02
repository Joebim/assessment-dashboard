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

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <div className={styles.logoContain}>
          <div className={styles.logoWrapper}>
            <Image
              src="/Graph.svg"
              alt="Vercel Logo"
              width={16}
              height={16}
              className={styles.logo}
            />
            <h1 className={styles.logoText}>Metrics</h1>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard">
                <div className={styles.linkWrap}>
                  <Category
                    width={10}
                    height={10}
                    className={styles.DashboardLogo}
                  />
                  <p className={styles.navText}>Dashboard</p>
                  <Counter count={6} />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/other-pages/some-page">
                <div className={styles.linkWrap}>
                  <Bag width={10} height={10} className={styles.navLogo} />
                  <p className={styles.navText}>Orders</p>
                  <Counter count={6} />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/other-pages/some-page">
                <div className={styles.linkWrap}>
                  <User width={10} height={10} className={styles.navLogo} />
                  <p className={styles.navText}>Customers</p>
                  <Counter count={6} />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/other-pages/some-page">
                <div className={styles.linkWrap}>
                  <Folder width={10} height={10} className={styles.navLogo} />
                  <p className={styles.navText}>Inventory</p>
                  <Counter count={6} />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/other-pages/some-page">
                <div className={styles.linkWrap}>
                  <Chat width={10} height={10} className={styles.logo} />
                  <p className={styles.navText}>Conversations</p>
                  <Counter count={6} />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/other-pages/some-page">
                <div className={styles.linkWrap}>
                  <Settings width={10} height={10} className={styles.navLogo} />
                  <p className={styles.navText}>Settings</p>
                  <Counter count={6} />
                </div>
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>

      <div className={styles}>
        <ul>
          <div className={styles.contactBtn}>
            <Link href="/other-pages/some-page">
              <div className={styles.linkWrap}>
                <Headphones width={10} height={10} className={styles.navLogo} />
                <p className={styles.navText}>Contact Support</p>
              </div>
            </Link>
          </div>
          <div className={styles.giftBtn}>
            <Link href="/other-pages/some-page">
              <div className={styles.giftBtnWrap}>
                <div className={styles.giftRow}>
                  <div className={styles.gift}>
                    <Gift width={10} height={10} className={styles.navLogo} />
                    <p className={styles.giftText}>Free Gift Awaits You!</p>
                  </div>
                </div>
                <div className={styles.giftRow}>
                  <div className={styles.gift}>
                    <p className={styles.giftTextAcc}>Upgrade your account</p>
                    <FiChevronRight height="20" className={styles.rightArrow} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.logoutBtn}>
            <Link href="/other-pages/some-page">
              <div className={styles.linkWrap}>
                <Logout width={10} height={10} className={styles.navLogo} />
                <p className={styles.logoutText}>Logout</p>
              </div>
            </Link>
          </div>
        </ul>
      </div>
    </div>
    // <aside className ={styles.sidebar}>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link href="/dashboard">
    //           <p>Dashboard</p>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/other-pages/some-page">
    //           <p>Some Page</p>
    //         </Link>
    //       </li>
    //       {/* Add more navigation links as needed */}
    //     </ul>
    //   </nav>
    // </aside>
  );
}

export default Sidebar;
