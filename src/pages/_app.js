import "@/styles/globals.css";
import Menu from "./components/_menu";
import Footer from "./components/_footer";

export default function App({ Component, pageProps }) {
  return <>
    <Menu />
    <Component {...pageProps} />
    <Footer />
  </>
}
