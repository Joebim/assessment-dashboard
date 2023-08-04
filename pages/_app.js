import "../styles/globals.css";
import Sidebar from "../components/sidebar/sidebar";
import { MenuContext } from "../components/context/menuContext";
import Navbar from "../components/navbar/navbar";
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [isCollapse, setIsCollapse] = useState(false); 

  return (
    <>
    <MenuContext.Provider value={{ isCollapse: isCollapse, setIsCollapse: setIsCollapse }}>
        <Navbar />
        <Sidebar />
        <div className={`main ${isCollapse ? "main-collapse" : ""}`}>
          <Component {...pageProps} />
        </div>
        </MenuContext.Provider>
    </>
  );
}

export default MyApp;
