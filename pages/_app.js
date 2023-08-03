import "../styles/globals.css";
import Sidebar from "../components/sidebar/sidebar";
import { MenuContext, MenuProvider } from "../components/context/menuContext";
import Navbar from "../components/navbar/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MenuProvider>
        <Navbar />
        <Sidebar />
        <Component {...pageProps} />
      </MenuProvider>
    </>
  );
}

export default MyApp;
