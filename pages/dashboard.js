import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import styles from "../styles/Dashboard.module.css";
import { sales } from "../shared/data";
import { customers } from "../shared/data";
import { orders } from "../shared/data";
import { products } from "../shared/data";
import { carts } from "../shared/data";
import Graph from "../public/GraphIcon.svg";
import User from "../public/2User.svg";
import Bag from "../public/BagIcon.svg";
import Folder from "../public/FolderIcon.svg";
import Cart from "../public/CartIcon.svg";
import Order from "../components/order/order";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ItemOrders } from "../shared/data";
import DonutChart from "../components/charts/Donut-chart";
import BarChart from "../components/charts/bar-chart";
import { barChartOptions } from "../shared/data";
import { barChartData } from "../shared/data";
import { MenuContext } from "../components/context/menuContext";
import { useContext } from "react";
import Router from "next/router";

export default function Dashboard() {

  var options = {
    series: [
      {
        data: [
          {
            x: "Sept 10",
            y: [0, 20],
          },
          {
            x: "Sept 11",
            y: [0, 100],
          },
          {
            x: "Sept 12",
            y: [0, 80],
          },
          {
            x: "Sept 13",
            y: [0, 60],
          },
          {
            x: "Sept 14",
            y: [0, 20],
          },
          {
            x: "Sept 15",
            y: [0, 55],
          },
          {
            x: "Sept 16",
            y: [0, 70],
          },
        ],
      },
    ],
    chart: {
      height: 200,
      width: '100%',
      type: "rangeBar",
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        isDumbbell: false,
        columnWidth: 10,
        dumbbellColors: [["#008FFB", "#00E396"]],
        borderRadius: 4,
      },
    },
    legend: {
      show: false,
      showForSingleSeries: true,
      position: "top",
      horizontalAlign: "left",
      customLegendItems: ["Product A", "Product B"],
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["#00E396"],
        inverseColors: true,
        stops: [2, 100],
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        formatter: (value) => {
          if (value >= 1000) {
            return `${(value / 1000).toFixed(1)}k`;
          } else {
            return value;
          }
        },
        style: {
          fontSize: "10px", 
          colors: "#A6A8B1",
        },
      },
    },
    xaxis: {
      tickPlacement: "on",
      categories: ["20", "40", "60", "80", "100"],
      labels: {
        show: true,
        style: {
          fontSize: "10px",
          colors: "#A6A8B1",
        },
      },
    },
  };

  let NGNaira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });



  return (
    <div className={`${styles.dashboard}`}>
      
      <div className={styles.dashboardContain}>
        <div className={styles.sale}>
          <div className={styles.cardTopInfo}>
            <div>
              <Graph width={10} height={10} className={styles.logo} />
            </div>
            <div>
              <div className={styles.dropdown}>
                <p>This Week</p>
                <MdOutlineKeyboardArrowDown
                  width="20"
                  className={styles.downArrow}
                />
              </div>
            </div>
          </div>
          <div className={styles.cardBottomInfo}>
            <div className={styles.cardBottomInfoContainRight}>
              <p>Sales</p>
              <h1 className={styles.currency}>
                {NGNaira.format(sales.amount)}
              </h1>
            </div>
            <div className={styles.cardBottomInfoContainLeft}>
              <p>Volume</p>
              <div className={styles.cardBottomInfoContainWrap}>
                <h1 className={styles.currency}>{sales.volume}</h1>
                <span className={styles.percentage}>
                  +{sales.percentageEarned}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.customer}>
          <div className={styles.cardTopInfo}>
            <div>
              <User width={10} height={10} className={styles.logo} />
            </div>
            <div>
              <div className={styles.dropdown}>
                <p>This Week</p>
                <MdOutlineKeyboardArrowDown
                  width="20"
                  className={styles.downArrow}
                />
              </div>
            </div>
          </div>
          <div className={styles.cardBottomInfo}>
            <div className={styles.cardBottomInfoContainRight}>
              <p>Customers</p>
              <div className={styles.cardBottomInfoContainWrap}>
                <h1 className={styles.currency}>
                  {customers.numberOfActiveCustomers}
                </h1>
                <span className={styles.percentage}>
                  +{customers.percentageOfCustomersGained}%
                </span>
              </div>
            </div>
            <div className={styles.cardBottomInfoContainLeft}>
              <p>Active</p>
              <div className={styles.cardBottomInfoContainWrap}>
                <h1 className={styles.currency}>
                  {customers.numberOfActiveCustomers}
                </h1>
                <span className={styles.percentage}>
                  +{customers.percentageOfActiveCustomers}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.order}>
          <div className={styles.cardTopInfo}>
            <div>
              <Bag width={10} height={10} className={styles.logo} />
            </div>
            <div>
              <div className={styles.dropdown}>
                <p>This Week</p>
                <MdOutlineKeyboardArrowDown
                  width="20"
                  className={styles.downArrow}
                />
              </div>
            </div>
          </div>
          <div className={styles.cardBottomInfo}>
            <div className={styles.cardBottomInfoContainRight}>
              <p>All Orders</p>
              <h1 className={styles.currency}>{orders.numberOfOrders}</h1>
            </div>
            <div className={styles.cardBottomInfoContainLeft}>
              <p>Pending</p>
              <div className={styles.cardBottomInfoContainWrap}>
                <h1 className={styles.currency}>{orders.pendingOrders}</h1>
              </div>
            </div>
            <div className={styles.cardBottomInfoContainLeft}>
              <p>Completed</p>
              <div className={styles.cardBottomInfoContainWrap}>
                <h1 className={styles.currency}>{orders.completedOrders}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.marketing}>
          <div className={styles.cardTopInfo}>
            <div className={styles.marketingTitleContain}>
              <h1>Marketing</h1>
            </div>
            <div>
              <div className={styles.dropdown}>
                <p>This Week</p>
                <MdOutlineKeyboardArrowDown
                  width="20"
                  className={styles.downArrow}
                />
              </div>
            </div>
          </div>
          <div className={styles.marketingChartContain}>
            <div className={styles.marketingChartWrap}>
              <DonutChart />
            </div>
            <div className={styles.chartCircleOverlayLarge}></div>
            <div className={styles.chartCircleOverlaySmall}></div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.cardTopInfo}>
            <div>
              <Folder width={10} height={10} className={styles.logo} />
            </div>
          </div>
          <div className={styles.cardBottomInfo}>
            <div className={styles.cardBottomInfoContainRight}>
              <p className={styles.productText}>All Products</p>
              <h1 className={styles.currency}>{products.activeProducts}</h1>
            </div>
            <div className={styles.cardBottomInfoContainLeft}>
              <p className={styles.productText}>Active</p>
              <div className={styles.cardBottomInfoContainWrap}>
                <h1 className={styles.currency}>{products.pendingProducts}</h1>
                <span className={styles.percentage}>
                  +{products.percentageOfActiveProducts}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cart}>
          <div className={styles.cardTopInfo}>
            <div>
              <Cart width={10} height={10} className={styles.logo} />
            </div>
            <div>
              <div className={styles.dropdown}>
                <p>This Week</p>
                <MdOutlineKeyboardArrowDown
                  width="20"
                  className={styles.downArrow}
                />
              </div>
            </div>
          </div>
          <div className={styles.cardBottomInfo}>
            <div className={styles.cardBottomInfoContainRight}>
              <p className={styles.cartText}>Abandoned Cart</p>
              <div className={styles.cardBottomInfoContainWrap}>
                <h1 className={styles.currency}>{carts.abandoned}</h1>
                <span className={styles.percentage}>
                  +{carts.percentageEarned}%
                </span>
              </div>
            </div>
            <div className={styles.cardBottomInfoContainLeft}>
              <p>Customers</p>
              <div className={styles.cardBottomInfoContainWrap}>
                <h1 className={styles.currency}>{carts.customers}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.summary}>
          <div className={styles.cardTopInfo}>
            <div className={styles.summaryTitleContain}>
              <h1>Summary</h1>
              <div className={styles.summaryDropdown}>
                <p>This Week</p>
                <MdOutlineKeyboardArrowDown
                  width="20"
                  className={styles.downArrow}
                />
              </div>
            </div>
            <div>
              <div className={styles.dropdown}>
                <p>This Week</p>
                <MdOutlineKeyboardArrowDown
                  width="20"
                  className={styles.downArrow}
                />
              </div>
            </div>
          </div>
          <div className={styles.marketingChartContain}>
            <BarChart options={options} />;
    
          </div>
        </div>
        <div className={styles.orders}>
          <div>
            <h1>Recent Orders</h1>
          </div>
          <Order orders={ItemOrders} />
        </div>
      </div>
    </div>
  
  );
}
