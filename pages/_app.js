import "../styles/globals.css";
import Sidebar from "../components/sidebar/sidebar";
import { MenuContext, MenuProvider } from "../components/context/menuContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MenuProvider>
        <Sidebar />
        <Component {...pageProps} />
      </MenuProvider>
    </>
  );
}

export default MyApp;
